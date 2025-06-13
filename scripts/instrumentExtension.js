#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Instrumenting extension code for coverage...');

// Clean previous instrumented build
const outCoverageDir = path.join(__dirname, '..', 'out-coverage');
if (fs.existsSync(outCoverageDir)) {
  fs.rmSync(outCoverageDir, { recursive: true, force: true });
}

// Compile TypeScript with source maps
console.log('Compiling TypeScript with source maps...');
execSync('npm run compile:coverage', { stdio: 'inherit' });

// Instrument the compiled JavaScript files
console.log('Instrumenting JavaScript files...');
try {
  execSync(
    'npx nyc instrument out-coverage out-coverage-instrumented --source-map',
    {
      stdio: 'inherit',
      env: {
        ...process.env,
        NYC_CONFIG: path.join(__dirname, '..', '.nycrc.json'),
      },
    }
  );

  // Replace the original with instrumented version
  if (fs.existsSync(outCoverageDir)) {
    fs.rmSync(outCoverageDir, { recursive: true, force: true });
  }
  fs.renameSync(
    path.join(__dirname, '..', 'out-coverage-instrumented'),
    outCoverageDir
  );

  console.log('Extension code instrumented successfully!');
} catch (error) {
  console.error('Failed to instrument extension code:', error.message);
  process.exit(1);
}
