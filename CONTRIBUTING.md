# Contributing to Next.js Route Config IntelliSense

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Open in VS Code: `code .`
4. Press `F5` to run the extension in a new Extension Development Host window

## Code Quality

This project uses several tools to maintain code quality:

### ESLint

- Run linting: `npm run lint`
- Fix linting issues: `npm run lint:fix`

### Prettier

- Format code: `npm run format`
- Check formatting: `npm run format:check`

### Testing

- Run tests: `npm test`
- Run tests with coverage: `npm run test:coverage`

## Commit Message Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. All commit messages must be formatted as:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries
- **perf**: A code change that improves performance
- **ci**: Changes to CI configuration files and scripts
- **build**: Changes that affect the build system or external dependencies
- **revert**: Reverts a previous commit

### Examples

```bash
feat: add support for maxDuration export
fix: resolve completion items duplication issue
docs: update README with installation instructions
test: add comprehensive coverage for all completion types
refactor: simplify completion item creation logic
chore: update dependencies to latest versions
```

### Rules

- Use lowercase for the type and description
- Keep the header under 72 characters
- Use the imperative mood ("add" not "added" or "adds")
- Don't end the subject line with a period
- Separate the header from the body with a blank line
- Wrap the body at 100 characters
- Use the body to explain what and why, not how

## Git Hooks

This project uses [Husky](https://typicode.github.io/husky/) to run git hooks:

### Pre-commit Hook

- Runs `lint-staged` to format and lint staged files
- Runs tests to ensure nothing is broken
- Prevents commits if any step fails

### Commit-msg Hook

- Validates commit messages against conventional commit format
- Prevents commits with invalid messages

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature-name`
3. Make your changes following the code quality guidelines
4. Write or update tests as needed
5. Ensure all tests pass: `npm test`
6. Commit your changes using conventional commit format
7. Push to your fork and submit a pull request

## Code Style

- Use TypeScript for all code
- Follow the existing code style (enforced by Prettier and ESLint)
- Write meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused
- Use early returns to reduce nesting

## Testing

- Write tests for new features and bug fixes
- Aim for high test coverage
- Use descriptive test names
- Test both happy paths and edge cases
- Mock external dependencies appropriately

## Questions?

If you have questions about contributing, please open an issue or start a discussion.
