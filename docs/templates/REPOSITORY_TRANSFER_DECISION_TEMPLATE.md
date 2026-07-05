# Repository Transfer Decision Template

Status:

```text
REPOSITORY_TRANSFER_DECISION_TEMPLATE_RECORDED
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

Use this template before moving any implementation repository into or out of
the `ngosystem` GitHub organization.

This template is not itself a transfer approval.

## Decision Header

```text
Decision id:
Decision date:
Decision owner:
Source repository:
Target repository:
Repository class:
Requested status:
```

Allowed repository classes:

- product governance;
- product implementation;
- universal/product tooling;
- tenant frontend;
- tenant records;
- archive/historical.

## Proposed Move

Describe exactly what changes:

- source owner and repository;
- target owner and repository;
- whether repository URL changes;
- whether GitHub organization changes;
- whether visibility changes;
- whether default branch changes;
- whether issues, PRs, releases, tags or wiki are moved;
- whether any package, deployment, database or environment names change.

## Non-Goals

This decision does not automatically approve:

- production deployment;
- legal readiness;
- RODO/GDPR readiness;
- WCAG/BIP/e-Doreczenia/Login.gov.pl readiness;
- domain or trademark claims;
- secret rotation;
- package/database/runtime rename;
- public SaaS launch;
- tenant production activation.

## Ownership And Access

Record:

- product owner;
- GitHub organization owner;
- repository admins;
- maintainers;
- read-only collaborators;
- deployment/environment owners;
- tenant representatives, if any.

## Branch Protection And CI

Record current and target controls:

| Control | Source state | Target state | Evidence |
| --- | --- | --- | --- |
| Default branch | | | |
| Pull request requirement | | | |
| Required status checks | | | |
| Runtime-critical workflow | | | |
| Governance checks | | | |
| Secret scanning / log redaction | | | |
| Environment protection | | | |
| Release/deployment approvals | | | |

## Secrets And Environments

Record:

- whether repository secrets exist;
- whether environment secrets exist;
- whether secrets are copied, rotated or deliberately not moved;
- who performs secret operations;
- how evidence proves no secret value is printed in logs or packages.

Default rule:

```text
NO_SECRET_VALUE_IN_GOVERNANCE_REPO
```

## Deployment And Runtime

Record:

- production deployment owner;
- staging deployment owner;
- Vercel/Supabase/other project ownership;
- runtime environment variables;
- callback URLs;
- DNS/domain dependencies;
- rollback path.

If the transfer has no runtime effect, state:

```text
NO_RUNTIME_EFFECT
```

## Evidence Package

A transfer-ready package should include:

- pre-transfer `git status`;
- source repository remote and branch;
- target repository existence and visibility;
- branch protection / required checks evidence or reason unavailable;
- workflow inventory;
- secrets/environment inventory without secret values;
- deployment owner evidence;
- post-transfer verification plan;
- rollback plan;
- final status token.

## Required Status Tokens

Before execution:

```text
REPOSITORY_TRANSFER_DECISION_REPORTED_READY
AWAITING_INDEPENDENT_AUDIT
NOT_PRODUCTION_READY
```

After execution, only if evidence exists:

```text
REPOSITORY_TRANSFER_REPORTED_EXECUTED
AWAITING_INDEPENDENT_AUDIT
NOT_PRODUCTION_READY
```

After independent audit, only auditor may write:

```text
REPOSITORY_TRANSFER_AUDIT_VALID
```

## Forbidden Claims

Do not use these unless separately evidenced:

```text
NGOSYSTEM_REPOSITORY_TRANSFER_COMPLETE
NGOSYSTEM_PRODUCTION_READY
NGOSYSTEM_RUNTIME_LIVE
TENANT_PRODUCTION_READY
LEGAL_READY
DATA_PROTECTION_CERTIFIED
SECRET_ROTATION_COMPLETE
```

## Decision

```text
Decision:
Rationale:
Residuals:
Next review:
```

## Acceptance Boundary

Completing this template is preparation only.

```text
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
