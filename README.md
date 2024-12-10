# Rules

Before submitting code, the following checks will be automatically performed:

- Commit message format (rule in `commitlint.config.cjs` will be apply)
- Tests (`npm run test`)
- Linting (`npm run lint`)
- Code formatting (`npm run format`)
  If there are any errors, please fix them before submitting your code.

# Coding Rules

- Functions in the `util` folder must have tests (`npm run test` to check).
- Commit messages must follow the rules in `commitlint.config.cjs`.
- To fix linting errors, run `npm run lint:fix`.

# CI/CD Process for Next.js Project in github.

## CI:

- Run tests
- Run linting: check lint with best practices for Next.js, format code with Prettier
- Run build

## CD:

- Build
- Deploy
