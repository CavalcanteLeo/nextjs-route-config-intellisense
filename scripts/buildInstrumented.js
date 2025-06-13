#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

console.log('🔧 Building instrumented extension for coverage...');

// Directories
const srcDir = path.join(__dirname, '..', 'src');
const outDir = path.join(__dirname, '..', 'out-instrumented');

// Clean output directory
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// Set coverage mode for babel
process.env.COVERAGE_MODE = 'true';

function transformFile(inputPath, outputPath) {
  const code = fs.readFileSync(inputPath, 'utf8');
  const result = babel.transformSync(code, {
    filename: inputPath,
    sourceMaps: true,
    sourceFileName: path.relative(process.cwd(), inputPath),
  });

  // Write the transformed code
  fs.writeFileSync(outputPath, result.code);

  // Write the source map
  if (result.map) {
    fs.writeFileSync(outputPath + '.map', JSON.stringify(result.map));
  }
}

function processDirectory(srcPath, outPath) {
  if (!fs.existsSync(outPath)) {
    fs.mkdirSync(outPath, { recursive: true });
  }

  const items = fs.readdirSync(srcPath);

  for (const item of items) {
    const srcItemPath = path.join(srcPath, item);
    const outItemPath = path.join(outPath, item);
    const stat = fs.statSync(srcItemPath);

    if (stat.isDirectory()) {
      processDirectory(srcItemPath, outItemPath);
    } else if (item.endsWith('.ts') && !item.endsWith('.d.ts')) {
      const jsOutputPath = outItemPath.replace(/\.ts$/, '.js');
      console.log(
        `📦 Transforming: ${path.relative(process.cwd(), srcItemPath)}`
      );
      transformFile(srcItemPath, jsOutputPath);
    }
  }
}

try {
  // Transform src directory (includes both extension and test files)
  console.log('🎯 Instrumenting extension and test files...');
  processDirectory(srcDir, outDir);

  // Copy package.json for extension loading
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8')
  );
  packageJson.main = './extension.js';
  fs.writeFileSync(
    path.join(outDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  console.log('✅ Instrumented extension built successfully!');
  console.log(`📁 Output directory: ${outDir}`);
} catch (error) {
  console.error('❌ Failed to build instrumented extension:', error);
  process.exit(1);
}
