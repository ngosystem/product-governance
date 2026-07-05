# ngOSystem Product Governance Baseline

Status:

```text
NGOSYSTEM_PRODUCT_GOVERNANCE_REPO_INITIALIZED
REPO_MAP_RECORDED
NGOSYSTEM_GITHUB_OPERATING_MODEL_RECORDED
NGOSYSTEM_DECISION_LOG_RECORDED
NGOSYSTEM_STATUS_EVIDENCE_DISCIPLINE_RECORDED
NGOSYSTEM_TENANT_REGISTRY_RECORDED
NGOSYSTEM_PRODUCT_RELEASE_GATES_RECORDED
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records the first governance baseline for the independent
ngOSystem product repository.

## Purpose

`ngosystem/product-governance` is the canonical governance anchor for ngOSystem
as an independent product family.

It records:

- product naming architecture;
- product ownership and tenant boundary;
- current repository map;
- GitHub operating model;
- decision log and decision-record templates;
- tenant registry and tenant-record template;
- product release gate model;
- status discipline;
- roadmap and governance decisions.

It does not contain runtime implementation code.

## Current Product Boundary

```text
ngOSystem = independent product platform
ngOSys = compact technical shorthand
RC Silesia = first tenant / pilot / implementation frontend
Pawel Kojs = product owner / IP decision owner
```

RC Silesia is the first tenant and operational pilot. It is not the product
owner for the whole ngOSystem platform.

## Repository Map

The current repository map is recorded in:

```text
docs/governance/REPOSITORY_MAP.md
```

The current GitHub operating model is recorded in:

```text
docs/governance/GITHUB_OPERATING_MODEL.md
```

Repository-transfer decisions must use:

```text
docs/templates/REPOSITORY_TRANSFER_DECISION_TEMPLATE.md
```

Product-governance decisions should be recorded in:

```text
docs/governance/DECISION_LOG.md
```

New product decisions should use:

```text
docs/templates/PRODUCT_DECISION_RECORD_TEMPLATE.md
```

Status and evidence discipline is recorded in:

```text
docs/governance/STATUS_AND_EVIDENCE_DISCIPLINE.md
```

The tenant registry is recorded in:

```text
docs/governance/TENANT_REGISTRY.md
```

Product release gates are recorded in:

```text
docs/governance/PRODUCT_RELEASE_GATES.md
```

Current boundary:

```text
REPO_MAP_RECORDED
NO_CODE_TRANSFER
```

No backend, website, tenant, package, database, deployment or secret ownership
is transferred by this baseline.

## Non-Claims

This baseline does not claim:

- production readiness;
- legal readiness;
- RODO/GDPR sufficiency;
- WCAG certification;
- BIP readiness;
- e-Doreczenia readiness;
- Login.gov.pl / Wezel Krajowy integration readiness;
- domain or trademark ownership;
- repository transfer;
- mass rename.

## Next Decisions

Future decisions should be handled as separate, evidenced changes:

- whether backend repositories move under `ngosystem`;
- whether tenant frontends remain in tenant organizations;
- branch protection and environment policy;
- collaborator and maintainer model;
- public/private visibility policy;
- product/tenant release train.

## Acceptance Boundary

This is a governance baseline only.

```text
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
