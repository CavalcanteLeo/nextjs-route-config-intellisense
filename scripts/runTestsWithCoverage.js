#!/usr/bin/env node

const { spawn, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🔍 Running VS Code extension tests with V8 coverage...');

// Setup directories
const projectRoot = path.join(__dirname, '..');
const coverageDir = path.join(projectRoot, 'coverage');
const v8CoverageDir = path.join(projectRoot, '.nyc_output');

// Clean previous coverage data
console.log('🧹 Cleaning previous coverage data...');
[coverageDir, v8CoverageDir].forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
});

// Build instrumented extension
console.log('🔧 Building instrumented extension...');
try {
  execSync('node scripts/buildInstrumented.js', {
    stdio: 'inherit',
    cwd: projectRoot,
  });
} catch (error) {
  console.error('❌ Failed to build instrumented extension');
  process.exit(1);
}

// Create a simple test runner that enables V8 coverage
const testRunnerScript = `
const { runTests } = require('@vscode/test-electron');
const path = require('path');

async function main() {
  try {
    const extensionDevelopmentPath = path.resolve(__dirname, 'out-instrumented');
    const extensionTestsPath = path.resolve(__dirname, 'out-instrumented', 'test', 'suite', 'index.js');
    
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: ['--disable-extensions'],
      version: '1.101.0'
    });
  } catch (err) {
    console.error('Failed to run tests:', err.message);
    process.exit(1);
  }
}

main();
`;

fs.writeFileSync(path.join(projectRoot, 'test-runner.js'), testRunnerScript);

// Prepare environment for V8 coverage
const env = {
  ...process.env,
  NODE_V8_COVERAGE: v8CoverageDir,
  NODE_OPTIONS: '--enable-source-maps',
  COVERAGE_MODE: 'true',
};

console.log('🚀 Starting VS Code tests with V8 coverage collection...');

// Run the test runner with V8 coverage
const testProcess = spawn('node', ['test-runner.js'], {
  stdio: 'inherit',
  env,
  cwd: projectRoot,
});

testProcess.on('close', async code => {
  console.log('🔄 Processing V8 coverage data...');

  try {
    // Check if we have V8 coverage files
    const coverageFiles = fs
      .readdirSync(v8CoverageDir)
      .filter(f => f.startsWith('coverage-'));

    if (coverageFiles.length === 0) {
      console.warn('⚠️  No V8 coverage files found');
      console.log(
        '📊 Generating basic coverage report from instrumented code...'
      );

      // Fallback: Use NYC to analyze the instrumented code
      execSync(
        'npx nyc report --reporter=text --reporter=html --reporter=lcov',
        {
          stdio: 'inherit',
          cwd: projectRoot,
          env: {
            ...process.env,
            NYC_CONFIG_OVERRIDE: JSON.stringify({
              'temp-dir': './.nyc_output',
              'report-dir': './coverage',
              include: ['out-instrumented/extension.js'],
              exclude: ['out-instrumented/test/**'],
              'source-map': true,
              all: true,
            }),
          },
        }
      );
    } else {
      console.log(`📁 Found ${coverageFiles.length} V8 coverage files`);

      // Use c8 to process V8 coverage
      execSync(
        'npx c8 report --reporter=text --reporter=html --reporter=lcov',
        {
          stdio: 'inherit',
          cwd: projectRoot,
          env: {
            ...process.env,
            NODE_V8_COVERAGE: v8CoverageDir,
          },
        }
      );
    }

    // Clean up temporary files
    if (fs.existsSync(path.join(projectRoot, 'test-runner.js'))) {
      fs.unlinkSync(path.join(projectRoot, 'test-runner.js'));
    }

    if (code === 0) {
      console.log('✅ Tests completed successfully!');
      console.log('📊 Coverage report generated in ./coverage/');
      console.log('🌐 Open ./coverage/index.html to view detailed coverage');

      // Show a quick coverage summary
      if (fs.existsSync(path.join(coverageDir, 'lcov-report', 'index.html'))) {
        console.log(
          '📈 Coverage report available at: ./coverage/lcov-report/index.html'
        );
      }
    } else {
      console.error(`❌ Tests failed with exit code ${code}`);
      process.exit(code);
    }
  } catch (error) {
    console.error('❌ Failed to process coverage:', error.message);
    // Don't exit with error if coverage processing fails but tests passed
    if (code === 0) {
      console.log('⚠️  Tests passed but coverage processing failed');
    } else {
      process.exit(1);
    }
  }
});

testProcess.on('error', error => {
  console.error('❌ Failed to start test process:', error);
  process.exit(1);
});
