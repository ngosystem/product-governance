# ngOSystem Continuous Quality Loop

Status:

```text
NGOSYSTEM_CONTINUOUS_QUALITY_LOOP_RECORDED
PRODUCT_GOVERNANCE_QUALITY_CHECK_REPORTED_WIRED
QUALITY_LOOP_CI_WORKFLOW_REPORTED_WIRED
NGOSYSTEM_CRYSTALLINE_SOFTWARE_MINIMALISM_RECORDED
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records the first continuous quality loop for
`ngosystem/product-governance`.

It is scoped to a governance/documentation repository. It does not introduce
runtime code, backend security guarantees, product release readiness, legal
readiness or production readiness.

## Purpose

The goal is to make product-governance work more controlled and less dependent
on memory or manual discipline.

The loop turns the current documentation rules into a lightweight automated
check:

```text
design intent
-> governance document
-> status discipline check
-> local link check
-> forbidden status token check
-> resource-size check
-> CI workflow
-> commit-ready state
```

## Current Repository Audit

Observed before this change:

| Area | Observed state | Gap |
| --- | --- | --- |
| Runtime code | None. Repository is governance-only. | Runtime test pipeline not applicable. |
| Package manifest | None. | No local `npm run check` entrypoint. |
| CI workflow | None in `ngosystem/product-governance`. | No automated governance check on push/PR. |
| Lint/type-check | Not applicable to product docs. | Need a lightweight structural check instead of a heavy toolchain. |
| Security gate | Status discipline exists in prose. | Need a machine check against forbidden status claims in Status blocks. |
| Resource efficiency | Repository is small and text-only. | Need a guard against unexpectedly large or unexpected file types. |

## Implemented Minimal Loop

Implemented files:

```text
package.json
scripts/product-governance-quality-check.mjs
.github/workflows/product-governance-quality.yml
docs/governance/CONTINUOUS_QUALITY_LOOP.md
```

Local command:

```text
npm run check
```

The checker is dependency-free and uses Node.js built-in modules only.

This shape follows the crystalline software minimalism principle:

```text
docs/governance/CRYSTALLINE_SOFTWARE_MINIMALISM.md
```

It checks:

- required governance documents exist;
- each Markdown document has a `Status` text block;
- each first `Status` block includes `NO_RUNTIME_EFFECT`;
- each first `Status` block includes `NOT_PRODUCTION_READY`;
- forbidden promotion tokens do not appear as active status tokens;
- local Markdown links point to existing files;
- repository files use expected text-oriented extensions;
- files remain below a lightweight size threshold;
- `README.md` links the required governance documents.

## Security Boundary

The checker blocks accidental active status claims such as:

```text
AUDIT_VALID
PRODUCTION_READY
LEGAL_READY
PUBLIC_SAAS_LAUNCHED
BRANCH_PROTECTION_CONFIGURED
REQUIRED_CHECKS_ENFORCED
```

It only checks status blocks and structural document hygiene. It is not a full
semantic parser and it does not replace independent audit.

## Green Software Boundary

For this repository, resource efficiency means:

- no runtime dependencies;
- no new package downloads for the checker;
- no binary or large generated artifacts;
- small text-only governance documents;
- deterministic local execution;
- cheap CI run on push and pull request.

This is not a runtime energy assessment for backend, frontend or deployment
systems.

## CI Boundary

The workflow reports the quality loop on GitHub Actions.

It does not configure branch protection or make the check required.

Current status remains:

```text
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
```

Required-check enforcement is still governed by OPD-006 and requires separate
GitHub settings evidence.

## Residuals

| Residual | Status | Trigger to close |
| --- | --- | --- |
| GitHub branch protection is not configured by this change. | OPEN | Separate OPD-006 configuration decision and evidence. |
| The checker is structural, not semantic. | ACCEPTED_BOUNDARY | Add targeted checks only when a concrete governance failure pattern appears. |
| Runtime/security quality loops remain in implementation repositories. | OUT_OF_SCOPE | Backend/frontend repository-specific tasks. |

## Non-Claims

This document does not claim:

```text
BRANCH_PROTECTION_CONFIGURED
REQUIRED_CHECKS_ENFORCED
RUNTIME_CI_PROTECTED
AUDIT_VALID
PRODUCTION_READY
LEGAL_READY
PUBLIC_SAAS_LAUNCHED
```

## Acceptance Boundary

```text
NGOSYSTEM_CONTINUOUS_QUALITY_LOOP_RECORDED
PRODUCT_GOVERNANCE_QUALITY_CHECK_REPORTED_WIRED
QUALITY_LOOP_CI_WORKFLOW_REPORTED_WIRED
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
