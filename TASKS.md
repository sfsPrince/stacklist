# Stack Implementation — TDD Task List

## Rules
- RED → GREEN → REFACTOR, one test at a time
- Never write implementation before the failing test exists
- Never move to the next test until current test is green and refactor is done

## Tasks

### Setup
- [ ] Create `TASKS.md` (this file)

### Underflow (pop on empty stack)
- [ ] RED   — write failing test: `pop()` on empty stack throws `StackUnderflow`
- [ ] GREEN — implement minimum code to make test pass
- [ ] REFACTOR — review Stack code for clarity and simplicity

### Push + Pop (basic round-trip)
- [ ] RED   — write failing test: `push(x)` then `pop()` returns `x`
- [ ] GREEN — implement `push` and `pop`
- [ ] REFACTOR — review

### LIFO Order (multiple items)
- [ ] RED   — write failing test: items come out in last-in-first-out order
- [ ] GREEN — make test pass
- [ ] REFACTOR — review

### Overflow (push beyond capacity)
- [ ] RED   — write failing test: pushing beyond capacity throws `StackOverflow`
- [ ] GREEN — implement overflow guard in `push`
- [ ] REFACTOR — final review

### Peek (inspect top without removing)
- [x] RED   — write failing tests: `peek()` on empty stack throws `StackUnderflow`; peek returns top item without removing it; peek does not change stack size
- [x] GREEN — implement `peek`: guard empty, return `this._items.at(-1)`
- [x] REFACTOR — added 3-item test to kill `at(-1) → at(+1)` mutant

### Quality Gate
- [ ] `npm test` — all tests pass
- [ ] `npm run test:coverage` — 100% coverage (lines, branches, functions, statements)
- [ ] `npm run mutate` — 100% mutation score, no surviving mutants

## Files
- `stack.js` — implementation
- `stack.test.js` — tests (co-located with source)
