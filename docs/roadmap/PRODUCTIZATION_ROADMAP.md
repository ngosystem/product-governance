# ngOSystem Productization Roadmap

Status:

```text
NGOSYSTEM_PRODUCTIZATION_ROADMAP_RECORDED
NGOSYSTEM_PRODUCT_MODULE_REGISTRY_RECORDED
NGOSYSTEM_OPEN_PRODUCTIZATION_DECISIONS_RECORDED
PHASED_PRODUCTIZATION_PATH_RECORDED
NO_REPOSITORY_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records the productization path for ngOSystem.

It is a roadmap. It does not transfer code, activate runtime, certify legal
readiness, or claim production readiness.

## Productization Principle

ngOSystem should become a product independent from any single tenant.

```text
ngOSystem = independent product platform
RC Silesia = first tenant / pilot / implementation frontend
```

The roadmap must preserve that boundary while allowing RC Silesia to remain the
first learning tenant.

## Current State

```text
ADVANCED_DEV_STAGING
GOVERNANCE_REPO_ESTABLISHED
RC_SILESIA_FIRST_TENANT_RECORDED
NOT_PRODUCTION_READY
```

Current implementation repositories remain in their existing locations.

```text
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
```

## Roadmap Phases

| Phase | Name | Goal | Exit signal |
| --- | --- | --- | --- |
| P0 | Product governance foundation | Record product identity, ownership, tenant boundary, repository map, decision log and release gates. | `PRODUCT_GOVERNANCE_BASELINE_RECORDED` |
| P1 | Evidence hardening | Keep implementation evidence self-checking: runtime CI, migration guards, status canon, redaction, tracked debt. | Critical evidence gates reported wired and independently audited where needed. |
| P2 | Tenant pilot discipline | Keep RC Silesia as first tenant/pilot with scoped status and no accidental production claim. | Tenant record and pilot evidence remain scoped and residuals are explicit. |
| P3 | Repository transfer readiness | Decide whether backend/universal/template repos move under `ngosystem`; prepare transfer decision records. | Transfer decision package ready, not executed by default. |
| P4 | Product packaging | Define product modules, public naming, docs, tenant templates and deployment model. | Product package candidate recorded without production activation. |
| P5 | Production candidate | Product owner accepts remaining residuals and evidence chain satisfies release gates. | `PRODUCTION_CANDIDATE`, scoped. |
| P6 | Production activation | Runtime activation for a named product/tenant scope. | `PRODUCTION_ACTIVE`, scoped and evidenced. |

No phase may be skipped by prose or by a successful commit.

## Phase P0 - Governance Foundation

Already recorded in this repository:

- product family and naming architecture;
- ownership and tenant boundary;
- repository map;
- GitHub operating model;
- decision log and templates;
- status and evidence discipline;
- tenant registry;
- release gates.
- product module registry.

P0 does not create runtime.

## Phase P1 - Evidence Hardening

Evidence hardening remains in implementation repositories.

Examples:

- runtime-critical CI;
- migration dependency guard;
- status canon;
- tracked-debt lifecycle;
- matrix coherence checks;
- log redaction for evidence packages;
- tenant isolation recon and future runtime matrix.

Product governance may link to those artifacts, but must not overrule their
scoped status.

## Phase P2 - Tenant Pilot Discipline

RC Silesia remains:

```text
PILOT_TENANT
NOT_PRODUCTION_READY
```

Pilot success can support product learning. It does not by itself create:

- public SaaS launch;
- production tenant activation;
- payment production readiness;
- legal readiness;
- product-wide ownership transfer.

## Phase P3 - Repository Transfer Readiness

Repository transfer is optional and must not happen implicitly.

Before any implementation repository moves under `ngosystem`, use:

```text
docs/templates/REPOSITORY_TRANSFER_DECISION_TEMPLATE.md
```

Required decision topics include:

- source and target repositories;
- branch protection and CI;
- secrets and environments;
- deployment ownership;
- issue/PR continuity;
- rollback;
- evidence package;
- independent audit requirement, if applicable.

## Phase P4 - Product Packaging

Product packaging should clarify:

- product modules;
- tenant templates;
- public docs;
- deployment model;
- support/incidents model;
- pricing/billing boundary, if any;
- compliance baseline.

Packaging is not production activation.

The current product-module registry is recorded in:

```text
docs/roadmap/PRODUCT_MODULE_REGISTRY.md
```

Open productization decisions are recorded in:

```text
docs/roadmap/OPEN_PRODUCTIZATION_DECISIONS.md
```

## Phase P5 - Production Candidate

`PRODUCTION_CANDIDATE` requires the gate families from
`docs/governance/PRODUCT_RELEASE_GATES.md` to be explicitly satisfied or marked
not applicable.

At minimum:

- runtime/CI evidence;
- tenant evidence;
- payment status;
- privacy and compliance residuals;
- support/incidents path;
- rollback/offboarding path;
- owner decision.

## Phase P6 - Production Activation

Production activation must be scoped:

```text
Production for what product module?
For which tenant?
On which environment?
With which legal/compliance boundary?
With which evidence package?
```

Global production readiness is forbidden without separate evidence.

## Current Next Work

The next useful product-governance work is not code transfer.

Recommended next governance items:

1. keep product-governance docs current;
2. link implementation evidence only by scoped status;
3. maintain the open productization decision backlog;
4. prepare repository-transfer decision only when transfer becomes necessary;
5. prepare tenant production-candidate record only when RC Silesia moves beyond pilot/staging.

## Forbidden Claims

Do not use these from this roadmap alone:

```text
NGOSYSTEM_PRODUCTION_READY
NGOSYSTEM_RUNTIME_LIVE
NGOSYSTEM_REPOSITORY_TRANSFER_COMPLETE
TENANT_PRODUCTION_READY
PUBLIC_SAAS_LAUNCHED
LEGAL_READY
```

## Acceptance Boundary

This roadmap records sequencing only.

```text
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
