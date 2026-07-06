# ngOSystem GitHub Operating Model

Status:

```text
NGOSYSTEM_GITHUB_OPERATING_MODEL_RECORDED
NGOSYSTEM_REPOSITORY_VISIBILITY_POLICY_RECORDED
NGOSYSTEM_BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY_RECORDED
NGOSYSTEM_GITHUB_BRANCH_PROTECTION_RECON_RECORDED
OPD_006_BRANCH_PROTECTION_CONFIGURATION_OPTIONS_RECORDED
OPD_006_OWNER_DECISION_GITHUB_FREE_FOR_NOW_RECORDED
OPD_006_PRODUCT_GOVERNANCE_BRANCH_PROTECTION_DECISION_RECORDED
PRODUCT_GOVERNANCE_REQUIRED_CHECK_CONTEXT_RECORDED
NGOSYSTEM_CONTINUOUS_QUALITY_LOOP_RECORDED
MULTI_AGENT_WORKTREE_ISOLATION_RECORDED
ORG_REPOSITORY_CLASSES_RECORDED
TENANT_REPOSITORY_BOUNDARY_RECORDED
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records the GitHub operating model for ngOSystem at the current
pre-production stage.

It is a governance document. It does not move repositories, change secrets,
create environments, change branch protection, or activate runtime.

## Organization Roles

| GitHub area | Role | Current boundary |
| --- | --- | --- |
| `ngosystem` | Product organization for ngOSystem governance and future product-owned repositories. | Governance anchor now; product runtime repositories only after separate decision. |
| `RC-Silesia` | Tenant organization for RC Silesia as first tenant and pilot. | Tenant-specific; not owner of the whole ngOSystem platform. |
| `pawelkojs-dotcom` | Current implementation location for existing backend and development repositories. | Existing code remains where it is until a transfer decision exists. |

## Repository Classes

| Class | Examples | Rule |
| --- | --- | --- |
| Product governance | `ngosystem/product-governance` | May contain product decisions, maps, naming, status discipline and roadmap. Must not contain secrets or runtime code. |
| Product implementation | current `pawelkojs-dotcom/ngos-payments-backend`; future possible `ngosystem/backend` | Runtime code and CI gates. Transfer requires a separate decision and migration checklist. |
| Universal/product tooling | current `ngOs_UNIVERSAL`; future possible `ngosystem/universal` | Product tooling and cross-module contracts. No mass rename by governance-only decision. |
| Tenant frontend | `RC-Silesia/WEBSITE` | Tenant implementation surface. Tenant status must not become product-wide production status. |
| Tenant records | RC Silesia operational/governance repositories | Tenant-specific records. They may consume ngOSystem but do not define product governance. |

## Transfer Gate

Moving any implementation repository under `ngosystem` requires a separate
decision record with at least:

- source and target repository names;
- ownership and admin access model;
- branch protection plan;
- GitHub Actions and required checks inventory;
- secrets and environments inventory;
- deployment ownership;
- issue/PR migration policy;
- archival policy for old repository URLs;
- rollback plan;
- status token and evidence package.

Use the repository transfer template:

```text
docs/templates/REPOSITORY_TRANSFER_DECISION_TEMPLATE.md
```

Until that decision exists:

```text
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
```

## Branch Protection And CI

Branch protection is a repository-level operational control, not a product
readiness claim.

The current branch protection and required checks policy is recorded in:

```text
docs/governance/BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY.md
```

The first read-only GitHub settings recon is recorded in:

```text
docs/governance/GITHUB_BRANCH_PROTECTION_RECON_2026-07-06.md
```

Branch protection configuration options after the recon are recorded in:

```text
docs/governance/BRANCH_PROTECTION_CONFIGURATION_OPTIONS.md
```

Current status:

```text
OPD_006_BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY_REPORTED
OPD_006_GITHUB_SETTINGS_RECON_REPORTED
OPD_006_BRANCH_PROTECTION_CONFIGURATION_OPTIONS_RECORDED
OPD_006_OWNER_DECISION_GITHUB_FREE_FOR_NOW_RECORDED
OPD_006_PRODUCT_GOVERNANCE_BRANCH_PROTECTION_DECISION_RECORDED
GITHUB_FREE_CURRENT_PLAN_ACCEPTED_FOR_NOW
PRODUCT_GOVERNANCE_PR_GATE_SELECTED
PRODUCT_GOVERNANCE_REQUIRED_CHECK_CONTEXT_RECORDED
BACKEND_AND_TENANT_BRANCH_PROTECTION_REMAIN_DEFERRED
```

For runtime repositories, future protection should prefer:

- pull request review or explicit owner approval;
- required CI checks for governance and runtime-critical paths;
- no direct production secret exposure in logs;
- separate environments for staging and production;
- audit trail for production deployment decisions.

For `product-governance`, the owner has selected a lightweight pull-request
gate into `main` while keeping GitHub Free. The required check context recorded
for this repository is:

```text
product-governance-quality
```

The observed settings evidence is recorded in:

```text
docs/governance/GITHUB_BRANCH_PROTECTION_EVIDENCE_2026-07-06.md
```

The product-governance repository now has a lightweight quality workflow:

```text
docs/governance/CONTINUOUS_QUALITY_LOOP.md
```

This reports quality-loop wiring only. It does not make the workflow a required
check for backend or tenant frontend repositories.

## Multi-Agent Working Tree Protocol

This protocol applies symmetrically to Codex, Claude, human-operated agents and
any other AI-assisted tool writing into a repository checkout.

The first agent that starts a write-capable thread in a working tree owns that
thread until one of the following happens:

- the thread is committed and pushed;
- the thread is explicitly handed off with a clean status report;
- the thread is abandoned and the working tree is restored to a known clean
  state.

While one agent owns a working tree, any second agent must choose one of these
paths:

- wait until the first agent finishes;
- work read-only and report findings without modifying files;
- use a separate `git worktree` or separate clone for its own write-capable
  work.

Cross-agent handoff must happen through a commit, patch, pull request, evidence
package, or explicit status note. It must not happen through concurrent writes
to the same files in the same working tree.

Before starting write-capable work, an agent should check:

```text
git status --short --branch
```

If the tree is dirty and the changes were not created by that agent in the same
thread, the agent must stop, switch to read-only review, or create a separate
worktree. This prevents partial writes, truncated files and ambiguous ownership
of local changes.

## Status Discipline

GitHub repository existence does not imply product readiness.

The following claims remain forbidden unless separately evidenced:

```text
NGOSYSTEM_PRODUCTION_READY
NGOSYSTEM_RUNTIME_LIVE
NGOSYSTEM_LEGAL_READY
NGOSYSTEM_REPOSITORY_TRANSFER_COMPLETE
TENANT_PRODUCTION_READY
RC_SILESIA_PRODUCT_OWNER
```

## Current Allowed Actions

Allowed now:

- record product governance;
- record repository map;
- record ownership and tenant boundary;
- record future transfer criteria;
- keep existing code repositories unchanged.

Not allowed by this document:

- move backend code;
- move tenant frontend code;
- rename packages or repositories;
- change deployment environments;
- copy or expose secrets;
- claim production readiness.

## Acceptance Boundary

This operating model is a documentation and governance baseline only.

The current repository visibility policy is recorded in:

```text
docs/governance/REPOSITORY_VISIBILITY_POLICY.md
```

```text
NGOSYSTEM_BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY_RECORDED
NGOSYSTEM_GITHUB_BRANCH_PROTECTION_RECON_RECORDED
OPD_006_BRANCH_PROTECTION_CONFIGURATION_OPTIONS_RECORDED
OPD_006_OWNER_DECISION_GITHUB_FREE_FOR_NOW_RECORDED
OPD_006_PRODUCT_GOVERNANCE_BRANCH_PROTECTION_DECISION_RECORDED
NGOSYSTEM_CONTINUOUS_QUALITY_LOOP_RECORDED
MULTI_AGENT_WORKTREE_ISOLATION_RECORDED
GITHUB_FREE_CURRENT_PLAN_ACCEPTED_FOR_NOW
PRODUCT_GOVERNANCE_PR_GATE_SELECTED
PRODUCT_GOVERNANCE_REQUIRED_CHECK_CONTEXT_RECORDED
BACKEND_AND_TENANT_BRANCH_PROTECTION_REMAIN_DEFERRED
NO_PAID_GITHUB_PLAN_CHANGE
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
