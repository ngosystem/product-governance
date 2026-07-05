# ngOSystem Tenant Registry

Status:

```text
NGOSYSTEM_TENANT_REGISTRY_RECORDED
RC_SILESIA_FIRST_TENANT_RECORDED
TENANT_RECORD_TEMPLATE_RECORDED
NO_TENANT_PRODUCTION_ACTIVATION
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records tenant identities and tenant/product boundaries for
ngOSystem.

It is a governance registry. It does not provision tenants, activate runtime,
configure secrets, create billing, or claim production readiness.

## Registry Rule

Every tenant entry must preserve the boundary between:

```text
product platform
tenant organization
pilot implementation
production tenant
```

A tenant can exercise ngOSystem. A tenant does not become the owner of the whole
ngOSystem product platform.

## Current Tenants

| Tenant id | Tenant name | Status | Role | Evidence |
| --- | --- | --- | --- | --- |
| T-0001 | RC Silesia | RC_SILESIA_FIRST_TENANT_RECORDED / PILOT_TENANT / NOT_PRODUCTION_READY | first tenant, pilot, implementation frontend | `docs/governance/OWNERSHIP_AND_TENANT_BOUNDARY.md`; `docs/governance/REPOSITORY_MAP.md` |

## RC Silesia Boundary

```text
RC Silesia = first tenant / pilot / implementation frontend
ngOSystem = independent product platform
Pawel Kojs = product owner / IP decision owner
```

RC Silesia may be used to validate workflows, language, operator practices,
tenant-facing UI, governance packs and pilots.

RC Silesia does not by itself imply:

- production SaaS launch;
- legal readiness;
- data-protection certification;
- payment production readiness;
- public network runtime;
- product ownership transfer;
- repository transfer.

## Tenant Status Vocabulary

| Status | Meaning |
| --- | --- |
| `PILOT_TENANT` | Tenant used for controlled pilot or reference implementation. |
| `STAGING_TENANT` | Tenant configured for staging evidence, not production. |
| `PRODUCTION_TENANT_CANDIDATE` | Candidate for production tenant activation; not yet active. |
| `PRODUCTION_TENANT_ACTIVE` | Forbidden until production activation evidence exists. |
| `TENANT_ARCHIVED` | Tenant record retained, active use ended. |

## Tenant Record Template

New tenant records should use:

```text
docs/templates/TENANT_RECORD_TEMPLATE.md
```

## Tenant Production Gate

Before any `PRODUCTION_TENANT_ACTIVE` claim, a tenant-specific decision must
record at least:

- tenant legal/entity identity;
- administrator and operator roles;
- data-processing basis and DPA status, if applicable;
- environment and secret ownership;
- payment status, if applicable;
- support/incidents path;
- accessibility and public-content obligations, if applicable;
- runtime evidence;
- rollback and offboarding plan.

Until then:

```text
NO_TENANT_PRODUCTION_ACTIVATION
NOT_PRODUCTION_READY
```

## Forbidden Claims

Do not use these unless separately evidenced:

```text
RC_SILESIA_PRODUCTION_TENANT_ACTIVE
TENANT_PRODUCTION_READY
TENANT_PAYMENT_PRODUCTION_ACTIVE
TENANT_LEGAL_READY
TENANT_DATA_PROTECTION_CERTIFIED
PUBLIC_SAAS_LAUNCHED
```

## Acceptance Boundary

This registry is product governance only.

```text
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
