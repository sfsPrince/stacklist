# Stack Implementation — TDD Task List

## Rules
- RED → GREEN → REFACTOR, one test at a time
- Never write implementation before the failing test exists
- Never move to the next test until current test is green and refactor is done

## Parallel vs Sequential

```
SEQUENTIAL (each depends on the previous):
  Setup → Underflow → Push+Pop → LIFO Order → Overflow

PARALLEL (independent of each other, can run alongside any feature):
  ┌─ Peek          ─┐
  ├─ Quality Gate  ─┤  ← can be run after any feature is complete
  └─ Documentation ─┘
```

> **Note:** Core features (Underflow → Push+Pop → LIFO → Overflow) must be done in order
> because each builds on the previous. Peek and the Quality Gate checks are independent
> and can be done in parallel once the core stack structure exists.

---

## Tasks

### Phase 1 — Sequential (must be done in order)

#### Setup
- [x] Create `TASKS.md` (this file)

#### Underflow (pop on empty stack)
- [x] RED   — write failing test: `pop()` on empty stack throws `StackUnderflow`
- [x] GREEN — implement minimum code to make test pass
- [x] REFACTOR — review Stack code for clarity and simplicity

#### Push + Pop (basic round-trip)
- [x] RED   — write failing test: `push(x)` then `pop()` returns `x`
- [x] GREEN — implement `push` and `pop`
- [x] REFACTOR — review

#### LIFO Order (multiple items)
- [x] RED   — write failing test: items come out in last-in-first-out order
- [x] GREEN — make test pass
- [x] REFACTOR — review

#### Overflow (push beyond capacity)
- [x] RED   — write failing test: pushing beyond capacity throws `StackOverflow`
- [x] GREEN — implement overflow guard in `push`
- [x] REFACTOR — final review

---

### Phase 2 — Parallel (can run independently once Phase 1 core structure exists)

#### Peek (inspect top without removing) ║ PARALLEL
- [x] RED   — write failing tests: `peek()` on empty stack throws `StackUnderflow`; peek returns top item without removing it; peek does not change stack size
- [x] GREEN — implement `peek`: guard empty, return `this._items.at(-1)`
- [x] REFACTOR — added 3-item test to kill `at(-1) → at(+1)` mutant

#### Quality Gate ║ PARALLEL (run after any feature, required before closing)
- [x] `npm test` — all tests pass
- [x] `npm run test:coverage` — 100% coverage (lines, branches, functions, statements)
- [x] `npm run mutate` — 100% mutation score, no surviving mutants

---

## Files
- `stack.js` — implementation
- `stack.test.js` — tests (co-located with source)
