# CLAUDE.md

## Stack
- JavaScript (Node.js)
- Jest — test runner, coverage
- Stryker.js — mutation testing

## Test-Driven Development

**TDD is required for all code in this repo.** Follow the Red → Green → Refactor cycle strictly:

1. **Red** — Write a failing test that describes the desired behaviour
2. **Green** — Write the minimum code needed to make the test pass
3. **Refactor** — Clean up while keeping all tests green

## Coverage
- 100% coverage is required on all lines, branches, functions, and statements
- Coverage is enforced via Jest thresholds in `jest.config.js`
- Run coverage: `npm run test:coverage`
- Do not write code that cannot be reached and tested

## Mutation Testing
- Run Stryker after all tests pass: `npm run mutate`
- A mutation score of 100% is the target
- If Stryker reports surviving mutants, write tests that kill them before closing the task
- Do not suppress mutants with `// Stryker disable` comments without a documented reason

## Code Style
- Prefer `.filter()`, `.map()`, `.reduce()`, `.sort()` over imperative loops
- Functions must not mutate their arguments
- Pure functions are preferred — isolate side effects at the boundaries
- Test files live alongside the source file they test (`foo.js` → `foo.test.js`)

## Dependencies
- Only `jest` and `@stryker-mutator/core` + `@stryker-mutator/jest-runner` are devDependencies
- No test utilities beyond what Jest provides (no sinon, no chai, etc.)
- Avoid production dependencies unless strictly necessary

## Verification Checklist (before marking any task done)
1. `npm test` — all tests pass
2. `npm run test:coverage` — 100% coverage on all metrics
3. `npm run mutate` — 100% mutation score (no surviving mutants)

## After Completing a Task
- After every task is done, ask the user: "Do you want to commit and push these changes?"
- Wait for confirmation before running `git add`, `git commit`, and `git push`
