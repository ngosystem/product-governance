# ngOSystem Product Release Gates

Status:

```text
NGOSYSTEM_PRODUCT_RELEASE_GATES_RECORDED
PRODUCTION_GATE_MODEL_RECORDED
RELEASE_GATE_EVIDENCE_CHAIN_RECORDED
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records the product-level gates that must be satisfied before any
ngOSystem production-readiness claim.

It is a governance model. It does not activate production, certify compliance,
run runtime checks, approve payments, or launch a tenant.

## Release Ladder

| Level | Meaning | Allowed claim |
| --- | --- | --- |
| L0 Governance recorded | Product/governance decision exists. | `RECORDED` |
| L1 Contract/foundation | Spec, schema, fixtures, validator or documentation exist. | `FOUNDATION_READY` / `NO_RUNTIME_EFFECT` |
| L2 Local evidence | Local checks, runtime probes or package evidence exist. | `REPORTED_PASS` / `AWAITING_INDEPENDENT_AUDIT` |
| L3 Independent audit | Evidence reviewed by independent auditor. | scoped `AUDIT_VALID` |
| L4 Staging pilot | Controlled staging/pilot execution. | `STAGING_READY` or `PILOT_READY`, scoped |
| L5 Production candidate | Product owner accepts remaining residuals and all required evidence exists. | `PRODUCTION_CANDIDATE` |
| L6 Production active | Runtime production activation exists and is evidenced. | `PRODUCTION_READY` / `PRODUCTION_ACTIVE`, scoped |

No level may be skipped by prose.

## Gate Families

Before a production claim, all applicable gate families must have explicit
status.

| Gate family | Required evidence before production |
| --- | --- |
| Runtime and CI | Critical runtime workflows, SQL probes, rollback checks, deployment evidence. |
| Tenant | Tenant record, operator roles, tenant-specific readiness and offboarding plan. |
| Payments | Sandbox/live evidence, webhook identity, callbacks, secret handling, treasury governance. |
| Privacy and data protection | RODO/GDPR basis, DPA/controller-processor decision, logging/body capture decisions. |
| Public/legal/compliance | WCAG, BIP, e-Doreczenia, Login.gov.pl / Wezel Krajowy applicability decisions. |
| Support and incidents | Support path, incident reporting, no personal contact data storage policy, SLA boundary. |
| Security | Tenant isolation, RLS, secret redaction, branch protection, deployment access controls. |
| Content/assets | Formal content approval, image/content consent, asset provenance. |

If a gate is not applicable, that must be recorded explicitly.

## Production Candidate Rule

`PRODUCTION_CANDIDATE` may be used only when:

- product owner records the decision;
- runtime gate status is linked;
- tenant gate status is linked;
- legal/compliance gate residuals are linked;
- payment gate is either complete or explicitly out of scope;
- support/incidents path is linked;
- rollback/offboarding path is linked;
- remaining residuals are named and accepted.

## Production Active Rule

`PRODUCTION_READY` or `PRODUCTION_ACTIVE` may be used only when:

- deployment/runtime evidence exists;
- production environment ownership is recorded;
- production secrets/environment boundary is recorded without secret values;
- monitoring/support responsibilities are recorded;
- applicable legal/compliance approvals are recorded;
- independent audit or owner acceptance references the exact production scope.

## Forbidden Shortcuts

The following do not create production readiness:

- GitHub repository exists;
- product-governance document exists;
- `production allowed` decision exists without activation evidence;
- staging preview passes;
- tenant pilot succeeds;
- local tests pass;
- payment sandbox preflight is ready;
- independent audit validates a narrow foundation or checker.

## Explicit Non-Claims

This document does not claim:

```text
NGOSYSTEM_PRODUCTION_READY
NGOSYSTEM_RUNTIME_LIVE
TENANT_PRODUCTION_READY
PAYMENT_PRODUCTION_READY
LEGAL_READY
RODO_READY
WCAG_CERTIFIED
BIP_READY
PUBLIC_SAAS_LAUNCHED
```

## Current Product State

Current product governance state:

```text
ADVANCED_DEV_STAGING
NOT_PRODUCTION_READY
```

Current product-governance repository state:

```text
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

## Acceptance Boundary

This document records gates only.

```text
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
