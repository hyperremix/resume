# AGENTS.md

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```txt
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## 5. Equal Quality on Every Screen

**Mobile, tablet and desktop are first-class. None of them falls out of the others.**

The site must be equally good at roughly 390px (phone), 820px (tablet portrait) and 1280px and up (desktop):

- The first screen shows who Fredrik is on every size: name, role and photo, not only a headline.
- The same information is reachable with the same ease; nothing is hidden on small screens because it was inconvenient to lay out.
- No horizontal overflow, no orphaned words in headlines, no column that is mostly empty space.
- Tap targets are at least 44px on touch devices, and hover-only affordances have a touch equivalent.

Check every UI change at all three widths, in light and dark mode, before calling it done. Designing for desktop and letting smaller screens degrade is not acceptable.

## Required quality gates (must pass before completion)

Run these from the repository root:

1. `bun run ts:check`
2. `bun run lint`
3. `bun run build`

There is no test suite. If any command fails, fix the issue and re-run from the failing step onward.
