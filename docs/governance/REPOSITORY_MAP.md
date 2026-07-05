# ngOSystem Repository Map

Status:

```text
NGOSYSTEM_REPOSITORY_MAP_RECORDED
REPO_MAP_RECORDED
PRODUCT_TENANT_REPOSITORY_BOUNDARY_RECORDED
NO_REPOSITORY_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records the current repository boundary for ngOSystem. It is a
governance map, not a repository-transfer decision.

## Current Repository Roles

| Repository | Current owner/location | Role | Boundary |
| --- | --- | --- | --- |
| `ngosystem/product-governance` | GitHub organization `ngosystem` | Product governance, naming architecture, roadmap decisions, ownership and tenant boundaries. | Product governance only; no runtime, no secrets, no production deployment. |
| `pawelkojs-dotcom/ngos-payments-backend` | Pawel Kojs account / current implementation location | Backend implementation, Supabase migrations, runtime gates, payments, governance checks and evidence discipline for ngOSystem. | Implementation remains in its current repository until a separate transfer decision exists. |
| `RC-Silesia/WEBSITE` | Tenant-specific organization `RC-Silesia` | First tenant frontend and operational pilot surface for RC Silesia. | Tenant frontend only; not the product owner and not the canonical ngOSystem governance repository. |

## Product Boundary

```text
ngOSystem = independent product platform
RC Silesia = first tenant / pilot / implementation frontend
```

The repository map prevents accidental ownership drift. A tenant repository can
exercise the product, but it does not become the product governance source.

## Transfer Boundary

No repository transfer is performed by this document.

Future repository moves must be explicit decisions with their own evidence:

- backend transfer under `ngosystem`;
- frontend or tenant-template strategy;
- branch protection and environment policy;
- collaborator and role model;
- secrets and deployment ownership;
- public/private visibility changes.

## Non-Claims

This document does not claim:

- production readiness;
- legal, RODO, WCAG, BIP, e-Doreczenia or Login.gov.pl readiness;
- domain or trademark ownership;
- completed backend transfer;
- completed tenant-template extraction;
- deployment or runtime activation.
