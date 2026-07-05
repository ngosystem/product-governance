# ngOSystem Product Family

Status:

```text
NGOSYSTEM_PRODUCT_FAMILY_RECORDED
NGO_PRODUCT_NAMING_ARCHITECTURE_READY
NO_MASS_RENAME
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records a product naming decision. It does not rename code,
repositories, packages, database objects, deployment targets or legal entities.
It does not claim production readiness, trademark clearance, domain ownership or
GitHub organization transfer.

## Brand Decision

`ngOSystem` is the product umbrella for the civic operating system for NGOs and
associations.

`ngOSys` is the compact technical shorthand that may be used later for
namespaces, repository labels, CLI-style contexts or compact UI contexts after a
separate implementation decision.

The middle `OS` in `ngOSystem` intentionally carries the meaning:

```text
OS = Operating System
```

This gives the product family a graphic and semantic center while preserving the
`ngO` root.

The current product-module mapping is recorded in:

```text
docs/roadmap/PRODUCT_MODULE_REGISTRY.md
```

## Product Relationship

```text
ngOSystem = independent product platform
RC Silesia = first tenant / pilot / implementation frontend
```

RC Silesia is not the product owner for the whole platform. It is the first
tenant and operational pilot through which the product is exercised.

## Product Family

| Product name | Product role | Current boundary |
| --- | --- | --- |
| `ngOStart` | organization start, founding, statutes, KRS readiness, onboarding | draft/support artifacts only; no automatic filing, signing, adoption or legal authority |
| `ngODoc` | documents, resolutions, provenance, versions and formal artifacts | no final legal sufficiency or automatic filing claim |
| `ngOPay` | membership fees, payment intent, P24, webhook governance, treasurer flows | live P24 remains blocked until live sandbox E2E evidence |
| `ngONet` | organization network, volunteer mutual aid, controlled civic-network pilots | no public directory, no person marketplace, no production matching runtime |
| `ngOSafe` | compliance, privacy, status canon, support, incidents, audit and evidence gates | not legal-ready, not data-protection certified, no production helpdesk/SLA |
| `ngOSet` | settings, roles, policies, organization configuration and permissions | no VC/EAA credential runtime and no broad temporal-role audit-valid claim beyond scoped evidence |
| `ngOSprint` | bounded campaign, project, event, recruitment, settlement or operational burst | speed must not bypass governance gates |
| `ngOStop` | closure, liquidation, transformation, archival and succession | concept only; not implemented |

## Legacy Naming Boundary

Existing labels such as `ngOs`, `ngOs Universal`, `ngos-payments-backend` or
tenant-specific repository names remain valid historical and technical labels
until a separate rename plan exists.

Do not perform mass rename as part of this decision.

```text
NO_MASS_RENAME
```

Allowed now:

- record product naming architecture;
- use `ngOSystem` in product/governance documentation;
- map existing modules to the product family;
- keep existing runtime code, package names and database names unchanged.

Not allowed by this decision:

- rename repositories;
- rename package names;
- rename environment variables;
- rename database schemas, functions, roles or migrations;
- claim domain or trademark ownership;
- claim production, legal, RODO, WCAG, BIP, e-Doreczenia or Login.gov.pl readiness.

## Acceptance Boundary

This decision remains a naming and product architecture decision only.

```text
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
