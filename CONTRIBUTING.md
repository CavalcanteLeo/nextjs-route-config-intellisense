# Contributing to Next.js Route Config IntelliSense

Thank you for your interest in contributing! This guide will help you get started.

## 🚀 Automated Release System

This project uses **semantic-release** for fully automated versioning and publishing. Here's how it works:

### How Releases Work

1. **Merge to Main**: When code is merged to the `main` branch, the auto-release workflow automatically:

   - Analyzes commit messages using conventional commit format
   - Determines the next version (patch, minor, or major)
   - Updates `package.json` version
   - Creates a Git tag
   - Generates changelog
   - Creates GitHub release
   - Publishes to VS Code Marketplace
   - Publishes to Open VSX Registry
   - Uploads coverage reports

2. **No Manual Versioning**: You don't need to manually update version numbers or create releases!

### Conventional Commits

All commits **must** follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

#### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Types and Version Bumps

| Type       | Description              | Version Bump              | Example                                   |
| ---------- | ------------------------ | ------------------------- | ----------------------------------------- |
| `feat`     | New feature              | **Minor** (0.1.0 → 0.2.0) | `feat: add runtime config completion`     |
| `fix`      | Bug fix                  | **Patch** (0.1.0 → 0.1.1) | `fix: resolve duplicate completion items` |
| `docs`     | Documentation            | **None**                  | `docs: update README with examples`       |
| `style`    | Code style changes       | **None**                  | `style: format code with prettier`        |
| `refactor` | Code refactoring         | **None**                  | `refactor: simplify completion logic`     |
| `test`     | Adding tests             | **None**                  | `test: add coverage for edge cases`       |
| `chore`    | Maintenance              | **None**                  | `chore: update dependencies`              |
| `ci`       | CI/CD changes            | **None**                  | `ci: add coverage reporting`              |
| `perf`     | Performance improvements | **Patch**                 | `perf: optimize completion matching`      |

#### Breaking Changes

For **major** version bumps (1.0.0 → 2.0.0), include `BREAKING CHANGE:` in the footer:

```
feat: redesign completion API

BREAKING CHANGE: The completion provider now requires VS Code 1.100.0 or higher
```

#### Examples

```bash
# Minor version bump (new feature)
git commit -m "feat: add experimental_ppr config support"

# Patch version bump (bug fix)
git commit -m "fix: handle malformed export statements gracefully"

# No version bump (documentation)
git commit -m "docs: add troubleshooting section to README"

# Major version bump (breaking change)
git commit -m "feat: require VS Code 1.100.0

BREAKING CHANGE: Dropped support for VS Code versions below 1.100.0"
```

### Skipping Releases

To skip the auto-release process, add `[skip ci]` to your commit message:

```bash
git commit -m "docs: fix typo [skip ci]"
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)
- VS Code or Cursor

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/cavalcanteLeo/nextjs-route-config-intellisense.git
   cd nextjs-route-config-intellisense
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Husky hooks**
   ```bash
   npm run prepare
   ```

### Development Workflow

1. **Create a feature branch**

   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes**

   - Edit code in `src/`
   - Add tests in `src/test/`
   - Update documentation if needed

3. **Test your changes**

   ```bash
   # Run tests
   npm test

   # Run tests with coverage
   npm run test:coverage

   # Run linting
   npm run lint

   # Fix linting issues
   npm run lint:fix

   # Check formatting
   npm run format:check

   # Fix formatting
   npm run format
   ```

4. **Commit with conventional format**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create PR**
   ```bash
   git push origin feat/your-feature-name
   ```

### Testing the Extension

1. **Open in VS Code**

   - Open the project in VS Code
   - Press `F5` to launch Extension Development Host
   - Test the extension in the new window

2. **Manual Testing**
   - Create a Next.js file (e.g., `page.tsx`)
   - Type `export const ` and trigger autocomplete
   - Verify completions appear correctly

## 📋 Code Standards

### TypeScript

- Use strict TypeScript configuration
- Prefer interfaces over types
- Avoid `any` type - use specific types
- Use readonly props for React components

### Code Style

- Use Prettier for formatting (automatic via pre-commit hooks)
- Use ESLint for code quality (automatic via pre-commit hooks)
- Follow functional programming patterns
- Use descriptive variable and function names

### Testing

- Write tests for all new features
- Maintain 100% function coverage
- Test edge cases and error conditions
- Use descriptive test names

### File Structure

```
src/
├── extension.ts          # Main extension entry point
├── completionProvider.ts # Completion logic
├── types.ts             # Type definitions
└── test/
    ├── suite/
    │   └── extension.test.ts  # Integration tests
    └── runTest.ts       # Test runner
```

## 🔄 Pull Request Process

1. **Ensure CI passes**

   - All tests must pass
   - Code coverage must be maintained
   - Linting and formatting checks must pass

2. **Use conventional commit format**

   - PR title should follow conventional commit format
   - This determines the version bump when merged

3. **Update documentation**

   - Update README if adding new features
   - Add JSDoc comments for new functions
   - Update CHANGELOG.md if needed

4. **Review process**
   - PRs require approval before merging
   - Address all review feedback
   - Ensure branch is up to date with main

## 🚀 Release Process

### Automatic Releases (Recommended)

Simply merge your PR to `main` with a conventional commit message. The system will:

1. Analyze your commit messages
2. Determine the appropriate version bump
3. Create a release automatically
4. Publish to all marketplaces

### Manual Releases (Emergency Only)

If you need to create a manual release:

1. Go to GitHub Actions
2. Run the "Manual Release" workflow
3. Provide the version number (e.g., `1.2.3`)

## 🐛 Bug Reports

When reporting bugs, please include:

- VS Code/Cursor version
- Extension version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 💡 Feature Requests

For feature requests, please:

- Check existing issues first
- Describe the use case
- Explain why it would be valuable
- Consider implementation complexity

## 📞 Getting Help

- **Issues**: [GitHub Issues](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/issues)
- **Discussions**: [GitHub Discussions](https://github.com/cavalcanteLeo/nextjs-route-config-intellisense/discussions)

## 🎉 Recognition

Contributors will be recognized in:

- CHANGELOG.md for each release
- GitHub releases
- README.md contributors section

Thank you for contributing! 🚀
