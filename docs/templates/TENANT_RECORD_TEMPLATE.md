# Tenant Record Template

Status:

```text
TENANT_RECORD_TEMPLATE_RECORDED
NO_TENANT_PRODUCTION_ACTIVATION
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

Use this template for adding or updating tenant records in ngOSystem product
governance.

This template does not provision a tenant and does not activate production.

## Tenant Header

```text
Tenant id:
Tenant name:
Tenant organization:
Tenant type:
Status:
Decision owner:
Date:
Related repositories:
Related evidence:
```

Allowed tenant types:

- pilot tenant;
- staging tenant;
- production candidate;
- production tenant;
- archived tenant.

## Tenant Boundary

Define:

- what the tenant may exercise;
- what is explicitly outside tenant scope;
- whether the tenant is a product reference implementation;
- whether the tenant has any public-facing responsibilities;
- whether the tenant is allowed to represent product status externally.

## Product Boundary

Record:

```text
ngOSystem = independent product platform
tenant = scoped implementation / operator / user of ngOSystem
```

The tenant does not own product-wide governance unless a separate ownership
decision says so.

## Runtime And Environment

Record current state:

| Area | Status | Evidence |
| --- | --- | --- |
| Backend runtime | | |
| Frontend/runtime surface | | |
| Public staging | | |
| Production environment | | |
| Secrets ownership | | |
| Payment status | | |
| Support/incidents | | |

## Legal And Compliance

Record current state without overclaiming:

| Area | Status | Evidence |
| --- | --- | --- |
| RODO/GDPR | | |
| DPA / processor-controller role | | |
| Accessibility / WCAG | | |
| BIP/public information | | |
| e-Doreczenia | | |
| Login.gov.pl / Wezel Krajowy | | |
| Image/content consent | | |

## Tenant Production Gate

Before production:

- runtime evidence exists;
- legal/compliance residuals are either closed or explicitly accepted by owner;
- support/incidents path exists;
- payment path is either out of scope or evidenced;
- public content obligations are understood;
- rollback/offboarding plan exists.

## Status Tokens

Use narrow status tokens:

```text
PILOT_TENANT
STAGING_TENANT
PRODUCTION_TENANT_CANDIDATE
NO_TENANT_PRODUCTION_ACTIVATION
NOT_PRODUCTION_READY
```

Use only after evidence:

```text
PRODUCTION_TENANT_ACTIVE
```

## Forbidden Claims

Do not write:

```text
TENANT_PRODUCTION_READY
TENANT_PAYMENT_PRODUCTION_ACTIVE
TENANT_LEGAL_READY
TENANT_DATA_PROTECTION_CERTIFIED
PUBLIC_SAAS_LAUNCHED
```

unless separately evidenced.

## Residuals

| Residual | Owner | Trigger to close | Status |
| --- | --- | --- | --- |
| | | | |

## Acceptance Boundary

```text
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
