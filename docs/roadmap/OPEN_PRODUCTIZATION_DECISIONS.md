# ngOSystem Open Productization Decisions

Status:

```text
NGOSYSTEM_OPEN_PRODUCTIZATION_DECISIONS_RECORDED
PRODUCTIZATION_DECISION_BACKLOG_RECORDED
NGOSYSTEM_TENANT_TEMPLATE_STRATEGY_RECORDED
NGOSYSTEM_REPOSITORY_VISIBILITY_POLICY_RECORDED
NGOSYSTEM_BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY_RECORDED
NGOSYSTEM_GITHUB_BRANCH_PROTECTION_RECON_RECORDED
OPD_006_BRANCH_PROTECTION_CONFIGURATION_OPTIONS_RECORDED
NGOSYSTEM_CONTINUOUS_QUALITY_LOOP_RECORDED
NO_DECISION_EXECUTED
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records productization decisions that remain open.

It prevents accidental decisions by implication. A GitHub repository, product
name, successful pilot, implementation commit or evidence package does not
decide any item below by itself.

## Rule

Open decisions remain open until an explicit product decision record closes
them.

Use:

```text
docs/templates/PRODUCT_DECISION_RECORD_TEMPLATE.md
```

For repository moves, use:

```text
docs/templates/REPOSITORY_TRANSFER_DECISION_TEMPLATE.md
```

## Decision Backlog

| Decision id | Decision area | Current status | Why it matters | Closure artifact |
| --- | --- | --- | --- | --- |
| OPD-001 | Backend repository ownership | OPEN / NO_REPOSITORY_TRANSFER | Decide whether `pawelkojs-dotcom/ngos-payments-backend` stays where it is or moves under `ngosystem`. | Repository transfer decision record. |
| OPD-002 | Universal/tooling repository ownership | OPEN / NO_REPOSITORY_TRANSFER | Decide whether `ngOs_UNIVERSAL` remains separate, moves under `ngosystem`, or is split into product tooling packages. | Repository transfer or packaging decision record. |
| OPD-003 | Tenant frontend strategy | OPEN / TENANT_BOUNDARY_PRESERVED | Decide whether future tenant frontends stay in tenant organizations, use templates, or share a product-owned starter. | Tenant frontend strategy decision. |
| OPD-004 | Tenant-template extraction | OPEN / NO_TEMPLATE_RELEASE | Decide what becomes a reusable tenant template after RC Silesia. | Template package decision and evidence package. |
| OPD-005 | Repository visibility policy | OPEN / VISIBILITY_POLICY_PENDING | Decide which product repositories should be public/private and why. | GitHub visibility and access decision. |
| OPD-006 | Branch protection and required checks policy | OPEN / POLICY_RECON_AND_OPTIONS_REPORTED / OWNER_DECISION_PENDING | Decide when direct commits remain acceptable and when PR-required checks become mandatory. | GitHub operating-model update and repo-level configuration evidence. |
| OPD-007 | Product release train | OPEN / RELEASE_TRAIN_PENDING | Decide how product releases are named, scoped and linked to tenant deployments. | Release train decision and release-gate checklist. |
| OPD-008 | Product pricing and billing boundary | OPEN / COMMERCIAL_POLICY_PENDING | Decide whether and how commercial plans attach to modules such as `ngOPay`, `ngOStart` or tenant packages. | Pricing/billing decision; no runtime by default. |
| OPD-009 | Compliance applicability baseline closure | OPEN / LEGAL_REVIEW_PENDING | Decide applicability and closure path for BIP, WCAG, e-Doreczenia, Login.gov.pl, RODO/DPA and related Polish public-sector requirements. | Legal/compliance decision and review evidence. |
| OPD-010 | Support and incident operating model | OPEN / SLA_POLICY_PENDING | Decide production support channel, incident severity model, contact-data boundary and SLA/non-SLA language. | Support/incidents operating-model decision. |
| OPD-011 | Production-candidate scope | OPEN / PRODUCTION_CANDIDATE_NOT_DECLARED | Decide what exact module, tenant, environment and residual set may first become a production candidate. | Product owner production-candidate decision. |
| OPD-012 | Product website and public narrative | OPEN / PUBLIC_PRODUCT_SITE_PENDING | Decide whether `ngosystem` needs a product site separate from tenant websites. | Product communication decision; content and asset approvals. |

## Current Recommended Ordering

Do not start with repository transfer.

Recommended order:

1. keep evidence hardening in implementation repositories;
2. close or explicitly carry critical residuals;
3. maintain tenant-template strategy without releasing a template;
4. decide repository transfer only when it reduces operational risk;
5. define production-candidate scope only after release gates are linked.

## Progress Notes

| Decision id | Progress | Evidence |
| --- | --- | --- |
| OPD-003 | Tenant frontend strategy reported, not closed. | `docs/roadmap/TENANT_TEMPLATE_STRATEGY.md` |
| OPD-004 | Tenant-template extraction boundaries reported, no template released. | `docs/roadmap/TENANT_TEMPLATE_STRATEGY.md` |
| OPD-005 | Repository visibility policy reported, no GitHub setting changed. | `docs/governance/REPOSITORY_VISIBILITY_POLICY.md` |
| OPD-006 | Branch protection and required checks policy reported, no GitHub setting changed. | `docs/governance/BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY.md` |
| OPD-006 | Read-only GitHub settings recon recorded: product-governance and WEBSITE unprotected; backend protection/rulesets feature-gated while private on current plan; no setting changed. | `docs/governance/GITHUB_BRANCH_PROTECTION_RECON_2026-07-06.md` |
| OPD-006 | Product-governance quality workflow reported wired, but not configured as a required check. | `docs/governance/CONTINUOUS_QUALITY_LOOP.md` |
| OPD-006 | Branch protection configuration options recorded; owner decision still pending; no GitHub setting changed. | `docs/governance/BRANCH_PROTECTION_CONFIGURATION_OPTIONS.md` |

## Explicit Non-Decisions

The following remain true until their own decision records exist:

```text
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_TEMPLATE_RELEASE
NO_PUBLIC_SAAS_LAUNCH
NO_PRODUCT_RELEASE_TRAIN
NO_PRODUCTION_CANDIDATE
NOT_PRODUCTION_READY
```

## Decision Closure Rule

When closing an open decision:

- reference the OPD id;
- record the decision owner;
- link evidence or explain why evidence is not yet applicable;
- preserve residuals;
- update this file from `OPEN` to `CLOSED`, `DEFERRED` or `SUPERSEDED`;
- add or update the canonical decision log.

## Forbidden Claims

Do not derive these from this backlog:

```text
TRANSFER_APPROVED
REPOSITORY_TRANSFER_COMPLETE
TENANT_TEMPLATE_READY
PUBLIC_SAAS_LAUNCHED
PRODUCTION_CANDIDATE
PRODUCTION_READY
LEGAL_READY
```

## Acceptance Boundary

This is a decision backlog only.

```text
NO_DECISION_EXECUTED
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
