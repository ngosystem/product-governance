# ngOSystem Product Governance Baseline

Status:

```text
NGOSYSTEM_PRODUCT_GOVERNANCE_REPO_INITIALIZED
REPO_MAP_RECORDED
NGOSYSTEM_GITHUB_OPERATING_MODEL_RECORDED
NGOSYSTEM_DECISION_LOG_RECORDED
NGOSYSTEM_STATUS_EVIDENCE_DISCIPLINE_RECORDED
NGOSYSTEM_IMPLEMENTATION_EVIDENCE_LINKS_RECORDED
NGOSYSTEM_TENANT_REGISTRY_RECORDED
NGOSYSTEM_PRODUCT_RELEASE_GATES_RECORDED
NGOSYSTEM_PRODUCTIZATION_ROADMAP_RECORDED
NGOSYSTEM_PRODUCT_MODULE_REGISTRY_RECORDED
NGOSYSTEM_OPEN_PRODUCTIZATION_DECISIONS_RECORDED
NGOSYSTEM_TENANT_TEMPLATE_STRATEGY_RECORDED
NGOSYSTEM_REPOSITORY_VISIBILITY_POLICY_RECORDED
NGOSYSTEM_BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY_RECORDED
NGOSYSTEM_GITHUB_BRANCH_PROTECTION_RECON_RECORDED
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
- productization roadmap;
- product module registry;
- open productization decision backlog;
- tenant-template strategy;
- repository visibility policy;
- branch protection and required checks policy;
- branch protection and required checks recon;
- status discipline;
- implementation evidence source links;
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

Implementation evidence source links are recorded in:

```text
docs/governance/IMPLEMENTATION_EVIDENCE_LINKS.md
```

The tenant registry is recorded in:

```text
docs/governance/TENANT_REGISTRY.md
```

Product release gates are recorded in:

```text
docs/governance/PRODUCT_RELEASE_GATES.md
```

The productization roadmap is recorded in:

```text
docs/roadmap/PRODUCTIZATION_ROADMAP.md
```

The product module registry is recorded in:

```text
docs/roadmap/PRODUCT_MODULE_REGISTRY.md
```

Open productization decisions are recorded in:

```text
docs/roadmap/OPEN_PRODUCTIZATION_DECISIONS.md
```

The current tenant-template strategy is recorded in:

```text
docs/roadmap/TENANT_TEMPLATE_STRATEGY.md
```

The repository visibility policy is recorded in:

```text
docs/governance/REPOSITORY_VISIBILITY_POLICY.md
```

The branch protection and required checks policy is recorded in:

```text
docs/governance/BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY.md
```

The first read-only GitHub settings recon is recorded in:

```text
docs/governance/GITHUB_BRANCH_PROTECTION_RECON_2026-07-06.md
```

Current boundary:

```text
REPO_MAP_RECORDED
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
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
