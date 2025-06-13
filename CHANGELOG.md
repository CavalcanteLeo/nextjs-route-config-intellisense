## [1.1.2](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/compare/v1.1.1...v1.1.2) (2025-06-13)


### Bug Fixes

* correct extension ID in test to match published extension ([52b2358](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/52b235872e75dd162c5121a927ec95b038d54a74))

## [1.1.1](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/compare/v1.1.0...v1.1.1) (2025-06-13)


### Bug Fixes

* add codecov.yml to fix path mapping for coverage reporting ([757717d](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/757717d6408c3a339f44d51d7cd1eeaa3bc1151a))

# [1.1.0](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/compare/v1.0.1...v1.1.0) (2025-06-13)


### Features

* enable Open VSX Registry publishing ([19a0f14](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/19a0f14236ee1632c9ff5b3bdf90b5c6b9b6ae29))

## [1.0.1](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/compare/v1.0.0...v1.0.1) (2025-06-13)


### Bug Fixes

* correct publisher ID to match VS Code Marketplace account ([a68fc24](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/a68fc24e195b513bf62f26f428678ace7c67d438))

# 1.0.0 (2025-06-13)


### Bug Fixes

* add missing babel.config.js for coverage instrumentation ([71b2be2](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/71b2be2eed5bb727092349a5867d79c84b88acc2))
* add missing coverage scripts and fix dependency review config ([d503e8a](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/d503e8ad2d3f5cf1aa7078a39cdfbb9f7ce55ec1))
* add missing coverage scripts for CI/CD pipeline ([c8756e9](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/c8756e9764305b05fb09dceac5380bf759ce65e4))
* add missing coverage scripts for CI/CD pipeline ([b24f21b](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/b24f21b16f1b49d5ef931e74b69d5cfa04edd1b9))
* add permissions for PR coverage comments ([8bd69b7](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/8bd69b7b3bed0133e6536b4621332440007b3162))
* add proper GitHub token configuration for semantic-release ([68f0faf](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/68f0faf4f8dbc1f19a6ff30e801eb72e765da01e))
* add xvfb for headless testing ([011ce91](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/011ce9169dc12ff666b21846fabb8ae2f92a6d9c))
* add xvfb for headless testing ([c6bfc19](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/c6bfc195288874e08b8d0632e320b9716461c24c))
* babel configuration for TypeScript parsing in coverage ([cfb5e10](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/cfb5e10fd3227ab7556c4c823590ff1edbbc73d3))
* disable Husky hooks during semantic-release in CI ([aec0e28](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/aec0e287e93c72a65a23065e1b3f9b86589d2ebd))
* improve semantic-release version detection in auto-release workflow ([3c07781](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/3c077810fc065451fe67f8c3e81c7f12798183db))
* remove dependency review workflow ([b5d3bb7](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/b5d3bb7ecaf54f16ceb463b363431d675484bc13))


### Features

* add fully automated release system with semantic versioning ([8b65b14](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/8b65b1492b4ccfc5cf3f3bf17cee9ee1b3fe47d6))
* initial Next.js Route Config IntelliSense extension ([431a8ae](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/commit/431a8ae88ed5becc676f4de0546779741fb11403))

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
