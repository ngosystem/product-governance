# ngOSystem Decision Log

Status:

```text
NGOSYSTEM_DECISION_LOG_RECORDED
PRODUCT_DECISION_PROTOCOL_RECORDED
NGOSYSTEM_STATUS_EVIDENCE_DISCIPLINE_RECORDED
NGOSYSTEM_TENANT_REGISTRY_RECORDED
NGOSYSTEM_PRODUCT_RELEASE_GATES_RECORDED
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document is the canonical product-governance decision log for ngOSystem.

It records decisions at the product/governance layer. Runtime evidence remains
in implementation repositories unless a separate evidence package is linked.

## Decision Authority

```text
Product owner / IP decision owner: Pawel Kojs
AI agents: propose, implement, package evidence and self-review
Independent auditor: may assign AUDIT_VALID only after evidence review
```

Product decisions should not be inferred from commits alone. A commit can record
or implement a decision, but the decision itself must be explicit.

## Decision Types

| Type | Use when |
| --- | --- |
| Product architecture | Naming, product family, product/tenant boundary, roadmap structure. |
| Repository governance | Repository map, transfer, visibility, branch protection, access model. |
| Runtime gate | CI, workflow, runtime evidence requirements, production activation gates. |
| Legal/compliance baseline | BIP, WCAG, e-Doreczenia, Login.gov.pl, RODO/GDPR, DPA readiness boundaries. |
| Tenant boundary | RC Silesia or future tenant-specific scope and non-transfer rules. |
| Status correction | Correction of overbroad, stale or self-assigned status tokens. |

## Current Decisions

| Decision id | Title | Status | Evidence |
| --- | --- | --- | --- |
| D-0001 | ngOSystem product family and naming architecture | RECORDED / NO_RUNTIME_EFFECT / NOT_PRODUCTION_READY | `docs/brand/NGOSYSTEM_PRODUCT_FAMILY.md` |
| D-0002 | Product ownership and RC Silesia first-tenant boundary | RECORDED / NO_RUNTIME_EFFECT / NOT_PRODUCTION_READY | `docs/governance/OWNERSHIP_AND_TENANT_BOUNDARY.md` |
| D-0003 | Repository map for current product/tenant implementation split | REPO_MAP_RECORDED / NO_CODE_TRANSFER / NOT_PRODUCTION_READY | `docs/governance/REPOSITORY_MAP.md` |
| D-0004 | Product governance repository baseline | NGOSYSTEM_PRODUCT_GOVERNANCE_REPO_INITIALIZED / NO_RUNTIME_EFFECT / NOT_PRODUCTION_READY | `docs/governance/PRODUCT_GOVERNANCE_BASELINE.md` |
| D-0005 | GitHub operating model for product and tenant repositories | NGOSYSTEM_GITHUB_OPERATING_MODEL_RECORDED / NO_REPOSITORY_TRANSFER / NOT_PRODUCTION_READY | `docs/governance/GITHUB_OPERATING_MODEL.md` |
| D-0006 | Repository transfer decision template | REPOSITORY_TRANSFER_DECISION_TEMPLATE_RECORDED / NO_REPOSITORY_TRANSFER / NOT_PRODUCTION_READY | `docs/templates/REPOSITORY_TRANSFER_DECISION_TEMPLATE.md` |
| D-0007 | Status and evidence discipline | NGOSYSTEM_STATUS_EVIDENCE_DISCIPLINE_RECORDED / AUDIT_VALID_WRITER_BOUNDARY_RECORDED / NOT_PRODUCTION_READY | `docs/governance/STATUS_AND_EVIDENCE_DISCIPLINE.md` |
| D-0008 | Tenant registry and tenant record template | NGOSYSTEM_TENANT_REGISTRY_RECORDED / RC_SILESIA_FIRST_TENANT_RECORDED / NO_TENANT_PRODUCTION_ACTIVATION / NOT_PRODUCTION_READY | `docs/governance/TENANT_REGISTRY.md`; `docs/templates/TENANT_RECORD_TEMPLATE.md` |
| D-0009 | Product release gates | NGOSYSTEM_PRODUCT_RELEASE_GATES_RECORDED / PRODUCTION_GATE_MODEL_RECORDED / NOT_PRODUCTION_READY | `docs/governance/PRODUCT_RELEASE_GATES.md` |

## Required Form For New Decisions

New decisions should use:

```text
docs/templates/PRODUCT_DECISION_RECORD_TEMPLATE.md
```

Repository transfers should use the specialized template:

```text
docs/templates/REPOSITORY_TRANSFER_DECISION_TEMPLATE.md
```

## Forbidden Shortcuts

Do not treat any of the following as a decision by itself:

- a commit title;
- a merged PR;
- a GitHub organization or repository existing;
- a generated report without linked evidence;
- a self-review using `AUDIT_VALID`;
- a status token copied from another repository;
- a tenant milestone used as a product-wide milestone.

## Status Discipline

See also:

```text
docs/governance/STATUS_AND_EVIDENCE_DISCIPLINE.md
```

Decision records must preserve the boundary between:

```text
REPORTED
AWAITING_INDEPENDENT_AUDIT
AUDIT_VALID
PRODUCTION_READY
LEGAL_READY
```

Only independent audit may assign `AUDIT_VALID`.
Production and legal readiness require their own evidence and must not be
derived from governance documentation alone.

## Acceptance Boundary

This decision log is product governance only.

```text
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
