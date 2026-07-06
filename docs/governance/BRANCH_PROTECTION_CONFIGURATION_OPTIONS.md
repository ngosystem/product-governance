# OPD-006 Branch Protection Configuration Options

Status:

```text
OPD_006_BRANCH_PROTECTION_CONFIGURATION_OPTIONS_RECORDED
OPD_006_OWNER_DECISION_GITHUB_FREE_FOR_NOW_RECORDED
BRANCH_PROTECTION_DEFERRED_WITH_OWNER_RESIDUAL
GITHUB_FREE_CURRENT_PLAN_ACCEPTED_FOR_NOW
BACKEND_PRIVATE_BRANCH_PROTECTION_FEATURE_GATED_RESIDUAL_ACCEPTED
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records owner-decision options after the branch protection policy
the read-only GitHub settings recon, and the owner's current decision to keep
ngOSystem on GitHub Free for now.

It records a decision to defer branch-protection enforcement with explicit
residuals. It does not configure GitHub branch protection, rulesets, required
checks, environments, repository transfers or repository visibility.

## Source Evidence

This document depends on:

```text
docs/governance/BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY.md
docs/governance/GITHUB_BRANCH_PROTECTION_RECON_2026-07-06.md
```

Current facts from the recon:

| Repository | Observed state | Decision issue |
| --- | --- | --- |
| `ngosystem/product-governance` | Public, `main` unprotected, rulesets empty, product-governance quality workflow now exists after the recon. | Decide whether documentation-only direct commits remain acceptable. |
| `pawelkojs-dotcom/ngos-payments-backend` | Private, branch protection/rulesets feature-gated by GitHub plan/visibility, workflows observed on push/PR. | Decide whether privacy, plan change or visibility change is the right tradeoff. |
| `RC-Silesia/WEBSITE` | Public, `main` unprotected, rulesets empty, Pages deployment workflow present. | Decide when tenant frontend checks must become protected. |

Core distinction:

```text
Workflow success != required checks enforced.
```

## Option A: Keep `product-governance` Public Docs-Only Without Protection

Decision shape:

```text
PRODUCT_GOVERNANCE_DOCS_ONLY_DIRECT_COMMIT_ACCEPTED
PRODUCT_GOVERNANCE_BRANCH_PROTECTION_DEFERRED
```

Benefits:

- keeps product governance light;
- supports fast owner-led decision recording;
- matches current documentation-only scope;
- avoids ceremony before multiple maintainers or binding release/security/legal
  policy exists.

Costs and risks:

- no GitHub-enforced PR review;
- no GitHub-enforced required checks;
- mistakes are caught by local discipline and workflow feedback, not by branch
  protection.

Condition to keep this option:

```text
PRODUCT_GOVERNANCE_DOCS_ONLY
NO_SECRETS
NO_RUNTIME_CODE
NO_PRODUCTION_CANDIDATE_DECISION
```

Trigger to revisit:

- repository carries binding release policy;
- repository carries security policy;
- repository carries legal/compliance decisions;
- repository carries production-candidate decisions;
- additional maintainers start pushing directly;
- product owner wants required checks before merge.

## Option B: Keep Backend Private On Current Plan

Decision shape:

```text
BACKEND_PRIVATE_CURRENT_PLAN_ACCEPTED_WITH_RESIDUAL
BACKEND_REQUIRED_CHECKS_ENFORCEMENT_DEFERRED
```

Benefits:

- preserves backend privacy;
- avoids immediate plan or visibility change;
- keeps existing workflow execution on push and pull request.

Costs and risks:

- GitHub branch protection/rulesets were feature-gated by API response for the
  private repository;
- workflow success is observable but not evidenced as required-check
  enforcement;
- direct pushes can still bypass a failed workflow unless another protection
  mechanism exists.

Mitigation:

- continue runtime-critical and quality workflows;
- preserve status canon and governance gates;
- use explicit owner discipline for merges and pushes;
- keep residual visible in OPD-006.

This option is not a closure of OPD-006. It is an accepted residual if chosen.

## Option C: Backend Private With GitHub Plan That Enables Protection

Decision shape:

```text
BACKEND_PRIVATE_BRANCH_PROTECTION_PLAN_CHANGE_CANDIDATE
```

Benefits:

- keeps backend private;
- can enable branch protection/rulesets and required checks if the plan supports
  them;
- allows `quality` and `runtime-critical` to become candidate required checks.

Costs and risks:

- paid plan or organization-level feature change may be required;
- check names and bypass policy must be configured carefully;
- settings must be evidenced after configuration.

Required before execution:

- confirm GitHub plan capability;
- confirm exact required check names from workflow jobs;
- decide bypass policy for owner/admin;
- decide whether direct pushes to `main` are disallowed;
- record evidence after settings are applied.

Candidate required checks from recon:

```text
quality
runtime-critical
```

No configuration is performed by this document.

## Option D: Make Backend Public

Decision shape:

```text
BACKEND_PUBLIC_VISIBILITY_CHANGE_CANDIDATE
```

Benefits:

- branch protection/rulesets may become available without private-repo feature
  gating;
- improves transparency for future product/community development;
- can align with open civic infrastructure strategy.

Costs and risks:

- exposes implementation code;
- requires history and secret review;
- requires public communication boundary;
- may affect security posture and tenant expectations.

Required before execution:

- repository visibility decision;
- secret and git-history review;
- license/public contribution policy;
- issue/disclosure policy;
- deployment and environment review;
- explicit product owner acceptance.

This option must not be executed as a side effect of OPD-006.

## Option E: Keep Tenant Frontends Public And Unprotected For Now

Decision shape:

```text
TENANT_FRONTEND_BRANCH_PROTECTION_DEFERRED
```

Benefits:

- simple tenant website updates;
- low operational friction;
- aligns with current public static/frontend workflow.

Costs and risks:

- Pages deployment success is not accessibility, staging, PII or asset-consent
  readiness;
- no formal required checks before public tenant changes;
- tenant status may be overread as product-wide readiness.

Trigger to revisit:

- tenant frontend becomes production candidate;
- staging preview becomes public decision surface;
- accessibility/WCAG checks become available;
- PII/contact-data/secret checks are added;
- content, asset or image-consent approval becomes release-critical.

## Owner Decision Matrix

| Decision area | Lowest-risk current choice | Why |
| --- | --- | --- |
| Product governance | Option A | Docs-only repository, no secrets, lightweight quality workflow already exists. |
| Backend | Option B now; Option C before production candidate | Privacy remains useful, but required checks enforcement is strategically desirable before production. |
| Tenant frontend | Option E now; stronger checks before production candidate | Pages deployment exists, but not enough for production readiness. |

This matrix prepared the owner decision recorded below.

## Owner Decision Recorded - 2026-07-06

The product owner decision for OPD-006 is:

```text
GITHUB_FREE_CURRENT_PLAN_ACCEPTED_FOR_NOW
BRANCH_PROTECTION_DEFERRED_WITH_OWNER_RESIDUAL
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
```

Repository-specific outcome:

| Repository | Owner decision | Residual |
| --- | --- | --- |
| `ngosystem/product-governance` | Keep direct owner commits acceptable while the repository remains docs-only governance. | `Product governance quality` runs on push, but is not a required check. |
| `pawelkojs-dotcom/ngos-payments-backend` | Keep private on the current free GitHub setup for now. | Branch protection/rulesets remain feature-gated; workflow success is observable but not enforced as a required check. |
| `RC-Silesia/WEBSITE` | Keep public tenant frontend flow unchanged for now. | Pages deployment is not accessibility, content, asset-consent, staging or production readiness. |

This decision is an accepted residual, not a protection claim. It must be
reopened before any production-candidate decision, paid-plan decision,
repository visibility change, multi-maintainer write model, or binding release,
security or legal policy is moved into a repository.

## Owner Decision Checklist

When OPD-006 is ready for an owner decision, answer these questions in one
decision record. Do not answer them by creating settings ad hoc in GitHub.

| Area | Minimum owner answer | Evidence needed after action |
| --- | --- | --- |
| `ngosystem/product-governance` | Keep direct owner commits for docs-only work, or require PR plus `Product governance quality`. | Screenshot or API output showing protection/ruleset state, or explicit defer-with-residual record. |
| `pawelkojs-dotcom/ngos-payments-backend` | Keep private and accept current feature-gated protection residual, change plan, or change visibility. | API output for protection/rulesets plus current required check names, or explicit defer-with-residual record. |
| `RC-Silesia/WEBSITE` | Keep Pages-only deployment for now, or add required staging/accessibility/content checks before production-like changes. | API output for protection/rulesets plus current required check names, or explicit defer-with-residual record. |

The decision record should include:

- chosen option per repository;
- reason for each chosen option;
- residuals accepted by the owner;
- trigger that reopens the decision;
- exact required check names if any setting is configured;
- evidence path or GitHub URL for the settings state.

If no GitHub setting is changed, OPD-006 may still be narrowed, but only with a
clear residual:

```text
BRANCH_PROTECTION_DEFERRED_WITH_OWNER_RESIDUAL
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
```

If GitHub settings are changed, record the concrete result instead. Do not use a
generic success token.

## What Closes OPD-006 For Now

OPD-006 is narrowed by the owner decision above:

```text
OPD_006_OWNER_DECISION_GITHUB_FREE_FOR_NOW_RECORDED
BRANCH_PROTECTION_DEFERRED_WITH_OWNER_RESIDUAL
```

This is not technical enforcement. It closes the pending owner-decision question
for now by preserving GitHub Free and recording the residuals.

The decision must be reopened if any of these become true:

- product-governance carries binding release, security, legal or pricing policy;
- backend becomes a production-candidate repository;
- tenant frontend becomes production-like;
- additional maintainers receive direct write access;
- the owner decides paid GitHub, public backend, EU forge migration or required
  checks should be reconsidered.

Until an actual GitHub setting changes:

```text
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
```

## Forbidden Claims

Do not use this document to claim:

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

This is decision preparation only.

```text
OPD_006_BRANCH_PROTECTION_CONFIGURATION_OPTIONS_RECORDED
OPD_006_OWNER_DECISION_GITHUB_FREE_FOR_NOW_RECORDED
BRANCH_PROTECTION_DEFERRED_WITH_OWNER_RESIDUAL
GITHUB_FREE_CURRENT_PLAN_ACCEPTED_FOR_NOW
BACKEND_PRIVATE_BRANCH_PROTECTION_FEATURE_GATED_RESIDUAL_ACCEPTED
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
