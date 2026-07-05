# ngOSystem Repository Candidate Map

Status:

```text
NGOSYSTEM_REPOSITORY_CANDIDATE_MAP_RECORDED
NEW_REPOS_NOT_REJECTED
NEW_REPOS_DEFERRED_UNTIL_DECISION_RECORD
NO_REPOSITORY_CREATED
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_TEMPLATE_RELEASE
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records possible future ngOSystem repositories without creating
them.

It prevents two opposite mistakes:

- assuming the candidate repositories were rejected;
- creating empty repositories before the product decision and evidence exist.

## Rule

Candidate repositories are options, not active work.

```text
Candidate repo != approved repo.
Candidate repo != repository transfer.
Candidate repo != product launch.
```

Each candidate needs its own product decision or transfer decision before it is
created, moved or populated.

## Candidate Repository Map

| Candidate repository | Current blocker / OPD | Opens when | Current status |
| --- | --- | --- | --- |
| `ngosystem/backend` | OPD-001 backend repository ownership; OPD-005 visibility; OPD-006 branch protection | Backend ownership, visibility, required checks and secret/deployment boundary are decided. | CANDIDATE / NO_REPOSITORY_TRANSFER |
| `ngosystem/universal` | OPD-002 universal/tooling repository ownership | `ngOs_UNIVERSAL` is classified as product tooling, package set, archive or implementation dependency. | CANDIDATE / NO_REPOSITORY_TRANSFER |
| `ngosystem/tenant-template` | OPD-004 tenant-template extraction; OPD-003 tenant frontend strategy | RC Silesia pilot yields a reusable tenant pattern with evidence and residuals. | CANDIDATE / NO_TEMPLATE_RELEASE |
| `ngosystem/product-site` | OPD-012 product website and public narrative | Product narrative, public content boundary, assets and legal/compliance caveats are approved. | CANDIDATE / PUBLIC_PRODUCT_SITE_PENDING |
| `ngosystem/docs` | OPD-007 release train; OPD-009 compliance baseline closure | Documentation publishing scope is separated from product-governance decisions and public-readiness claims. | CANDIDATE / DOCS_SITE_NOT_APPROVED |
| `ngosystem/sdk` | OPD-002 tooling ownership; OPD-011 production-candidate scope | There is a stable external integration surface worth packaging. | CANDIDATE / NO_PUBLIC_API_COMMITMENT |
| `ngosystem/tenant-frontend-starter` | OPD-003 tenant frontend strategy; OPD-004 tenant-template extraction | Future tenant frontend strategy chooses a product-owned starter instead of tenant-owned copies. | CANDIDATE / NO_TEMPLATE_RELEASE |

The names above are placeholders for decision work. They are not reservation
claims and they do not require immediate repository creation.

## Current Active Repository Anchor

The only current product-governance repository under `ngosystem` is:

```text
ngosystem/product-governance
```

It records product decisions, repository candidates and boundaries.

It does not contain runtime code, tenant frontend code or secrets.

## Why Not Create Them Now

Creating repositories too early would create empty containers without
evidence-backed purpose.

Current reasons to defer:

- backend still has active implementation history and runtime gates in its
  existing repository;
- backend branch protection and visibility tradeoffs remain open;
- `ngOs_UNIVERSAL` has not been classified into product tooling, package or
  archive form;
- tenant template extraction should wait for stronger tenant evidence from RC
  Silesia;
- product-site/public narrative needs content and legal/compliance boundaries;
- no production-candidate scope has been declared.

## Creation Gate

Before any candidate repository is created, record:

- OPD id or decision record;
- owner;
- repository name;
- repository visibility;
- initial protection/checks policy;
- whether secrets are allowed;
- whether runtime code is allowed;
- initial README purpose;
- migration or non-migration statement;
- rollback/archive plan if the repository is a transfer target.

Repository transfer decisions should use:

```text
docs/templates/REPOSITORY_TRANSFER_DECISION_TEMPLATE.md
```

New product decisions should use:

```text
docs/templates/PRODUCT_DECISION_RECORD_TEMPLATE.md
```

## Forbidden Claims

Do not use this map to claim:

```text
REPOSITORY_APPROVED
REPOSITORY_CREATED
REPOSITORY_TRANSFER_COMPLETE
TENANT_TEMPLATE_READY
PUBLIC_PRODUCT_SITE_READY
PUBLIC_SAAS_LAUNCHED
PRODUCTION_READY
LEGAL_READY
```

## Acceptance Boundary

This is a candidate map only.

```text
NGOSYSTEM_REPOSITORY_CANDIDATE_MAP_RECORDED
NEW_REPOS_NOT_REJECTED
NEW_REPOS_DEFERRED_UNTIL_DECISION_RECORD
NO_REPOSITORY_CREATED
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_TEMPLATE_RELEASE
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
