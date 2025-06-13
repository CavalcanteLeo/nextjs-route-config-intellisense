# Changelog

All notable changes to the "Next.js Route Config IntelliSense" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1] - 2024-12-19

### Added
- Initial release of Next.js Route Config IntelliSense extension
- Autocompletion support for all Next.js Route Segment Config exports:
  - `dynamic` - Control static/dynamic rendering behavior
  - `fetchCache` - Override fetch caching behavior  
  - `runtime` - Choose runtime environment (nodejs/edge)
  - `preferredRegion` - Set deployment region preference
  - `dynamicParams` - Control dynamic segment behavior
  - `experimental_ppr` - Enable Partial Prerendering
  - `revalidate` - Set revalidation time
  - `maxDuration` - Set maximum execution duration
- Support for TypeScript and JavaScript files (.ts, .tsx, .js, .jsx)
- Comprehensive test suite with 100% code coverage
- Detailed descriptions and documentation for each config option
- Proper handling of deprecated options (experimental-edge runtime)

### Technical
- Built with TypeScript and VS Code Extension API
- Comprehensive testing with Mocha and @vscode/test
- Code quality tools: ESLint, Prettier, Husky, Commitlint
- Automated coverage reporting with Istanbul/NYC
- CI/CD ready with proper git hooks and linting 