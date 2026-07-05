# ngOSystem Crystalline Software Minimalism

Status:

```text
NGOSYSTEM_CRYSTALLINE_SOFTWARE_MINIMALISM_RECORDED
MINIMUM_NECESSARY_CODE
DEPENDENCY_LAST_RESORT
INVARIANT_FIRST_ENGINEERING
NO_ORNAMENTAL_AUTOMATION
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records the engineering taste and constraint for ngOSystem:
software structure should be light, resource-aware and internally coherent.

The goal is not to produce more code. The goal is to express the smallest
amount of code necessary to preserve a real invariant.

## Core Rule

```text
Minimum code.
Maximum invariant.
Zero ornament.
```

Every new script, dependency, workflow, module, abstraction or document must
answer one question:

```text
What concrete invariant does this make harder to break?
```

If the answer is unclear, the change should not be added.

## Decision Filter

Before adding code or automation, ask:

| Question | Required answer |
| --- | --- |
| Does this protect a named invariant? | Yes. |
| Does this remove more complexity than it adds? | Yes. |
| Can it be explained in one sentence? | Yes. |
| Can it run locally and deterministically? | Yes, unless explicitly scoped otherwise. |
| Does it avoid new dependencies by default? | Yes. |
| Does it preserve existing governance gates? | Yes. |
| Does it avoid claiming runtime or production readiness? | Yes. |

If a change fails this filter, defer it or redesign it.

## Dependency Rule

Dependencies are allowed only when they are the smallest responsible solution.

Default status:

```text
DEPENDENCY_LAST_RESORT
```

Accept a dependency only when:

- native platform features would create more fragile code;
- the dependency replaces meaningful complexity;
- maintenance cost is understood;
- lockfile and CI implications are acceptable;
- security and update path are clear;
- the dependency does not weaken status or evidence discipline.

Do not add dependencies for aesthetics, fashion, convenience alone or the
appearance of maturity.

## Automation Rule

Automation should be narrow and load-bearing.

Good automation:

- checks a concrete status or evidence invariant;
- fails loudly when the invariant is broken;
- is cheap to run;
- is deterministic;
- is easy to delete if the invariant disappears.

Bad automation:

- exists because other repositories have it;
- creates noisy ritual;
- hides failing tests;
- requires large dependencies for a small rule;
- produces reports nobody reads;
- increases CI cost without reducing risk.

## Refactoring Rule

Refactoring is a quality practice, not a visual cleanup ritual.

Refactor only when it:

- reduces real duplication;
- makes an invariant easier to see;
- makes testing easier;
- removes dead code;
- reduces coupling;
- clarifies a boundary;
- lowers future change cost.

Do not refactor merely to introduce a preferred style or a larger abstraction.

## Green Software Boundary

For ngOSystem, green/resource-aware engineering starts with restraint:

- avoid unnecessary dependencies;
- keep checks small;
- avoid generated artifacts in governance repositories;
- keep runtime-heavy checks in runtime repositories;
- avoid repeated work when one deterministic check is enough;
- prefer explicit evidence over repeated prose.

This is not a claim of measured energy efficiency. It is a design constraint
against avoidable waste.

## Relationship To The Quality Loop

The current product-governance quality loop is intentionally lightweight:

```text
package.json
scripts/product-governance-quality-check.mjs
.github/workflows/product-governance-quality.yml
```

It uses no runtime dependencies and checks only governance-specific invariants.

The quality checker also enforces the current dependency boundary:

```text
DEPENDENCY_FREE_GUARD_REPORTED_WIRED
```

That shape is intentional and should be preserved until a concrete failure mode
justifies more machinery.

## Forbidden Drifts

Do not use this principle to justify:

```text
SECURITY_SIMPLIFIED_AWAY
GOVERNANCE_REMOVED_FOR_SPEED
TESTS_SKIPPED_FOR_MINIMALISM
DEPENDENCIES_ADDED_FOR_MATURITY_SIGNAL
HEAVY_LINTING_ADDED_WITHOUT_TRIGGER
PRODUCTION_READY
LEGAL_READY
```

Minimalism must strengthen evidence, not weaken it.

## Acceptance Boundary

This is an engineering-governance principle only.

```text
NGOSYSTEM_CRYSTALLINE_SOFTWARE_MINIMALISM_RECORDED
MINIMUM_NECESSARY_CODE
DEPENDENCY_LAST_RESORT
INVARIANT_FIRST_ENGINEERING
NO_ORNAMENTAL_AUTOMATION
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
