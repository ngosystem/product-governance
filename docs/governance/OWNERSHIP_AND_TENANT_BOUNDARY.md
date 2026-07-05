# Ownership And Tenant Boundary

Status:

```text
NGOSYSTEM_PRODUCT_OWNERSHIP_BOUNDARY_RECORDED
RC_SILESIA_FIRST_TENANT_BOUNDARY_RECORDED
NO_REPOSITORY_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records the product ownership and tenant boundary for ngOSystem.

## Boundary

```text
Pawel Kojs = product owner / IP decision owner
ngOSystem = independent product platform
RC Silesia = first tenant / pilot / implementation frontend
```

The GitHub organization `ngosystem` is a technical and governance container for
the product. It does not change the fact that product ownership and strategic
decision authority remain with Pawel Kojs.

The organization `RC-Silesia` remains tenant-specific. It should not become the
owner of the ngOSystem platform by accident.

## Current Repository Roles

See also: [ngOSystem Repository Map](REPOSITORY_MAP.md).

| Repository area | Role | Current action |
| --- | --- | --- |
| `ngosystem/product-governance` | product governance, naming architecture, roadmap, evidence discipline | initialized as public governance anchor |
| backend repositories | product implementation and runtime gates | no transfer in this step |
| `RC-Silesia/WEBSITE` | tenant frontend / pilot surface | remains tenant-specific |

## Non-Goals

This decision does not:

- transfer backend repositories;
- transfer website repositories;
- create production deployment;
- create public SaaS availability;
- configure secrets;
- configure billing;
- grant collaborators access;
- claim legal or regulatory readiness.

## Next Ownership Decisions

Future decisions should be handled explicitly and separately:

- whether backend repositories move under `ngosystem`;
- whether tenant-facing websites stay in tenant organizations;
- which GitHub environments and branch protections are required;
- who receives member, maintainer or admin access;
- whether public/private visibility changes are needed for product maturity.
