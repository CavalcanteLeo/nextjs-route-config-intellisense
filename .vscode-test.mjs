import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
  files: process.env.COVERAGE_MODE
    ? 'out-coverage/test/**/*.test.js'
    : 'out/test/**/*.test.js',
  workspaceFolder: './src/test/fixtures',
  mocha: {
    ui: 'tdd',
    timeout: 20000,
    color: true,
  },
  // Disable built-in coverage when using external coverage tools
  coverage: process.env.COVERAGE_MODE
    ? false
    : {
        includeAll: true,
        exclude: ['**/node_modules/**', '**/out/test/**', '**/*.d.ts'],
        reporter: ['text', 'html', 'lcov'],
      },
  // Extension host environment variables for coverage
  extensionDevelopmentPath: process.cwd(),
  extensionTestsPath: process.env.COVERAGE_MODE
    ? './out-coverage/test/extension.test.js'
    : './out/test/extension.test.js',
});
