# GitHub Branch Protection And Required Checks Recon 2026-07-06

Status:

```text
NGOSYSTEM_GITHUB_BRANCH_PROTECTION_RECON_RECORDED
OPD_006_GITHUB_SETTINGS_RECON_REPORTED
PRODUCT_GOVERNANCE_MAIN_UNPROTECTED
BACKEND_PRIVATE_BRANCH_PROTECTION_FEATURE_GATED
TENANT_FRONTEND_MAIN_UNPROTECTED
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records a read-only GitHub settings reconnaissance for
`ngosystem/product-governance`, `pawelkojs-dotcom/ngos-payments-backend` and
`RC-Silesia/WEBSITE`.

It records observed GitHub API and workflow state. It does not configure branch
protection, required checks, repository rulesets, environments, deployments or
repository transfers.

## Scope

Checked repositories:

| Repository | Visibility | Default branch | Role |
| --- | --- | --- | --- |
| `ngosystem/product-governance` | Public | `main` | Product governance repository. |
| `pawelkojs-dotcom/ngos-payments-backend` | Private | `main` | Current backend/runtime implementation repository. |
| `RC-Silesia/WEBSITE` | Public | `main` | First tenant frontend repository. |

Checked surfaces:

- branch protection endpoint for `main`;
- repository rulesets endpoint;
- workflow list;
- recent workflow runs;
- latest observed job names for backend and tenant frontend workflows.

## Findings

### `ngosystem/product-governance`

Observed repository state:

```text
visibility: PUBLIC
default branch: main
```

Branch protection:

```text
GET /repos/ngosystem/product-governance/branches/main/protection
HTTP 404
message: Branch not protected
```

Rulesets:

```text
GET /repos/ngosystem/product-governance/rulesets
HTTP 200
body: []
```

Workflows:

```text
gh workflow list -R ngosystem/product-governance
no workflows returned
```

Recent runs:

```text
gh run list -R ngosystem/product-governance
[]
```

Interpretation:

```text
PRODUCT_GOVERNANCE_MAIN_UNPROTECTED
PRODUCT_GOVERNANCE_REQUIRED_CHECKS_NOT_CONFIGURED
PRODUCT_GOVERNANCE_ACTIONS_NOT_PRESENT
```

This is acceptable for the current documentation-only stage, but it should be
revisited before this repository carries binding release, security, legal or
production-candidate decisions.

### `pawelkojs-dotcom/ngos-payments-backend`

Observed repository state:

```text
visibility: PRIVATE
default branch: main
```

Branch protection:

```text
GET /repos/pawelkojs-dotcom/ngos-payments-backend/branches/main/protection
HTTP 403
message: Upgrade to GitHub Pro or make this repository public to enable this feature.
```

Rulesets:

```text
GET /repos/pawelkojs-dotcom/ngos-payments-backend/rulesets
HTTP 403
message: Upgrade to GitHub Pro or make this repository public to enable this feature.
```

Interpretation:

```text
BACKEND_PRIVATE_BRANCH_PROTECTION_FEATURE_GATED
BACKEND_REQUIRED_CHECKS_ENFORCEMENT_NOT_VERIFIED
BACKEND_BRANCH_PROTECTION_SETTINGS_NOT_AVAILABLE_ON_CURRENT_PLAN_OR_VISIBILITY
```

This does not mean runtime checks are absent. It means the GitHub branch
protection and ruleset settings were not available through the API for this
private repository under the current plan/visibility.

Observed workflows:

```text
Backend quality gates        active
RLS and Storage Runtime      active
Runtime critical gates       active
```

Recent backend runs showed actual `push` and `pull_request` execution. Latest
observed `main` run:

```text
workflow: Runtime critical gates
event: push
headSha: 4a74745d44a8659efc06deca39d95f1681274514
conclusion: success
job: runtime-critical
```

Runtime-critical job steps included:

```text
Membership role attestation runtime gate
PAY-C1 service identity runtime gate
PAY-C1 integrity runtime gate
PAY financial webhook gate matrix
```

Latest observed backend quality run:

```text
workflow: Backend quality gates
event: push
headSha: 4a74745d44a8659efc06deca39d95f1681274514
conclusion: success
job: quality
```

Quality job steps included:

```text
Typecheck
Test
Build
Lint
Governance check
NPM audit
Service-role exposure scan
Payment secret marker scan
Diff whitespace check
```

Interpretation:

```text
BACKEND_WORKFLOWS_PRESENT
BACKEND_RUNTIME_CRITICAL_GATES_OBSERVED_ON_PUSH
BACKEND_QUALITY_GATES_OBSERVED_ON_PUSH
BACKEND_REQUIRED_CHECKS_NOT_EVIDENCED_AS_BRANCH_PROTECTION
```

These workflow runs are important evidence that the gates execute. They are not
evidence that GitHub currently blocks merges or direct pushes when those gates
fail.

### `RC-Silesia/WEBSITE`

Observed repository state:

```text
visibility: PUBLIC
default branch: main
```

Branch protection:

```text
GET /repos/RC-Silesia/WEBSITE/branches/main/protection
HTTP 404
message: Branch not protected
```

Rulesets:

```text
GET /repos/RC-Silesia/WEBSITE/rulesets
HTTP 200
body: []
```

Observed workflows:

```text
pages-build-deployment       active
```

Latest observed run:

```text
workflow: pages-build-deployment
event: dynamic
headSha: ba5b54bb0a1da417b2a940c8205d9c9a8788963f
conclusion: success
```

Observed jobs:

```text
build
deploy
report-build-status
```

Interpretation:

```text
TENANT_FRONTEND_MAIN_UNPROTECTED
TENANT_FRONTEND_RULESETS_EMPTY
TENANT_FRONTEND_PAGES_DEPLOYMENT_PRESENT
TENANT_FRONTEND_REQUIRED_CHECKS_NOT_CONFIGURED
```

GitHub Pages deployment success is not the same as staging preview audit,
accessibility readiness, WCAG certification, content approval, asset consent or
production product readiness.

## Candidate Required Checks From Observed Job Names

If branch protection is later configured, candidate status checks must use real
GitHub check/job names, not only project shorthand.

Observed backend candidates:

```text
quality
runtime-critical
```

Observed tenant frontend candidates:

```text
build
deploy
report-build-status
```

These names are candidates only. Final required checks should be decided after
reviewing workflow trigger paths, stability, cost and whether a check is
appropriate for every PR or only for selected labels/environments.

## Current OPD-006 State

This recon advances OPD-006 from policy-only to policy plus observed GitHub
settings.

It does not close OPD-006.

Current status:

```text
OPD_006_GITHUB_SETTINGS_RECON_REPORTED
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
```

OPD-006 remains open until one of these happens per repository:

- branch protection / rulesets and required checks are configured with evidence;
- the absence of protection is explicitly accepted for the current stage;
- the repository is moved or visibility/plan changes make enforcement possible;
- the decision is deferred with owner rationale and residual status.

## Recommended Next Actions

1. Keep `product-governance` unprotected only while it stays documentation-only
   and owner-controlled.
2. For backend, decide whether to keep private and accept feature gating, make
   the repository public, or use a paid plan/organization feature path for
   branch protection.
3. For backend, treat `quality` and `runtime-critical` as the first candidate
   required checks once enforcement is available.
4. For tenant frontends, add explicit staging/accessibility/PII checks before
   requiring more than Pages deployment checks.
5. Do not report workflow success as required-check enforcement until GitHub
   protection/ruleset evidence exists.

## Forbidden Claims

This recon must not be used to claim:

```text
BRANCH_PROTECTION_CONFIGURED
REQUIRED_CHECKS_ENFORCED
BACKEND_BRANCH_PROTECTED
TENANT_FRONTEND_BRANCH_PROTECTED
PRODUCT_GOVERNANCE_BRANCH_PROTECTED
PRODUCTION_READY
LEGAL_READY
PUBLIC_SAAS_LAUNCHED
```

## Acceptance Boundary

```text
NGOSYSTEM_GITHUB_BRANCH_PROTECTION_RECON_RECORDED
OPD_006_GITHUB_SETTINGS_RECON_REPORTED
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
