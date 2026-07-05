# ngOSystem Product Module Registry

Status:

```text
NGOSYSTEM_PRODUCT_MODULE_REGISTRY_RECORDED
PRODUCT_FAMILY_MODULE_BOUNDARIES_RECORDED
IMPLEMENTATION_EVIDENCE_SOURCES_MAPPED
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This registry maps the ngOSystem product-family names to current module
boundaries and evidence sources.

It is a product-governance registry. It does not move repositories, rename
runtime code, create deployments, activate tenants or claim production
readiness.

## Registry Rule

Product-family names describe product areas.

Implementation evidence remains in the current implementation repositories
until a separate transfer decision exists.

```text
Product name != repository transfer
Product name != production readiness
Product name != legal readiness
Product name != tenant activation
```

## Current Module Registry

| Product area | Product role | Current implementation/evidence source | Current boundary |
| --- | --- | --- | --- |
| `ngOStart` | organization start, founding, statutes, KRS readiness and onboarding | `ngOs_UNIVERSAL`, `ngos-payments-backend`, tenant evidence packages | support/foundation evidence only; no automatic filing, signing, adoption or legal authority |
| `ngODoc` | documents, resolutions, provenance, formal artifacts and export discipline | `ngOs_UNIVERSAL`, backend governance docs, evidence packages | no final legal sufficiency claim and no automatic filing claim |
| `ngOPay` | membership fees, payment intent, Przelewy24, webhook identity, treasury flows | `ngos-payments-backend` | live P24 remains evidence-gated; no payment production readiness |
| `ngONet` | ORG-NET, VOL-NET, CN-PILOT and controlled civic-network flows | `ngos-payments-backend`, `ngOs_UNIVERSAL` | no public directory, no person marketplace and no production matching runtime |
| `ngOSafe` | status canon, privacy guardrails, support/incidents, evidence gates and audit discipline | `ngos-payments-backend`, product-governance docs | not legal-ready, not data-protection certified and no production helpdesk/SLA |
| `ngOSet` | settings, roles, policies, membership-role attestations and organization configuration | `ngos-payments-backend`, `ngOs_UNIVERSAL` | no VC/EAA credential runtime and no broad temporal-role claim beyond scoped evidence |
| `ngOSprint` | bounded campaign, project, event, recruitment, settlement or operational burst | tenant pilot docs, CN-PILOT evidence, future templates | speed must not bypass release gates, consent rules or evidence discipline |
| `ngOStop` | closure, liquidation, transformation, archival and succession | concept only | not implemented |

## Evidence Source Boundary

This registry may point to implementation repositories and audit packages, but
it does not supersede their scoped status.

If an implementation repository says:

```text
AWAITING_INDEPENDENT_AUDIT
BLOCKED
REPORTED_PASS
NOT_PRODUCTION_READY
```

then this product registry must not upgrade that status.

## Tenant Boundary

RC Silesia remains the first tenant and pilot.

```text
RC Silesia = first tenant / pilot / implementation frontend
ngOSystem = independent product platform
```

Pilot evidence can inform product development, but it does not create
product-wide production readiness.

## Naming Boundary

This registry does not authorize mass rename.

Allowed now:

- use product-family names in governance and roadmap documents;
- use this registry to group current modules;
- point to current evidence sources by scoped status.

Not allowed by this registry:

- rename repositories;
- rename packages;
- rename database schemas, migrations, functions or roles;
- rename environment variables;
- migrate code under `ngosystem`;
- claim trademark or domain clearance;
- claim production, legal, RODO, WCAG, BIP, e-Doreczenia or Login.gov.pl readiness.

## Product Packaging Signal

This registry supports roadmap phase P4:

```text
P4 = Product Packaging
```

It does not move the project into P4 by itself. P4 still requires product
package candidates, tenant templates, deployment model and release-gate
evidence.

## Forbidden Claims

Do not derive these from this registry:

```text
NGOSYSTEM_PRODUCTION_READY
NGOSYSTEM_RUNTIME_LIVE
NGOSYSTEM_REPOSITORY_TRANSFER_COMPLETE
PRODUCT_MODULE_RUNTIME_READY
TENANT_PRODUCTION_READY
PUBLIC_SAAS_LAUNCHED
LEGAL_READY
```

## Acceptance Boundary

This registry records product module boundaries only.

```text
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
