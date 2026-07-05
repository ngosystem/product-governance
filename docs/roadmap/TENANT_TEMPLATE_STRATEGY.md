# ngOSystem Tenant Template Strategy

Status:

```text
NGOSYSTEM_TENANT_TEMPLATE_STRATEGY_RECORDED
OPD_003_TENANT_FRONTEND_STRATEGY_REPORTED
OPD_004_TENANT_TEMPLATE_EXTRACTION_REPORTED
NO_TEMPLATE_RELEASE
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records the first tenant-template strategy for ngOSystem.

It is not a released template, not a code extraction, not a frontend migration
and not a production tenant activation.

## Strategy Principle

RC Silesia is the first learning tenant.

The project may learn tenant patterns from RC Silesia, but it must not turn
RC-specific content, branding, legal facts or operational decisions into
product defaults.

```text
RC Silesia = first tenant / pilot / implementation frontend
ngOSystem = independent product platform
Tenant template = future reusable boundary, not current runtime artifact
```

## Template Candidate Layers

| Layer | Can become reusable template? | Current boundary |
| --- | --- | --- |
| Information architecture | Yes, after audit. Generic homepage, organization profile, statutory documents, membership, payments, support and pilot sections may become template candidates. | Must not copy RC Silesia wording as product default. |
| Component patterns | Yes, after extraction decision. Navigation, cards, forms, document lists, status panels and accessibility patterns may be reusable. | No code extraction in this step. |
| Governance/status language | Yes. Narrow status tokens, residuals, evidence links and `NOT_PRODUCTION_READY` boundaries should be reusable. | Must preserve source module scope. |
| Compliance placeholders | Yes. WCAG, BIP, e-Doreczenia, Login.gov.pl, RODO/DPA applicability sections may become template blocks. | Legal applicability remains tenant-specific and pending review. |
| Operator workflows | Partly. Treasurer/secretary/admin workflows can become template candidates when they are generic. | RC Silesia operator facts remain tenant-specific. |
| Assets and media | No by default. | Images, logos, people, venue photos and consent records are tenant-specific unless separately licensed. |
| Legal content | No by default. | Statutes, resolutions, entity details and legal statements remain tenant-specific. |
| Payment credentials/configuration | No. | Secrets, P24 data, webhook bearers and treasury setup are tenant/environment-specific. |
| Tenant data | No. | Members, volunteers, contacts, finances, incidents and support content are never template defaults. |

## Future Repository Shape Options

No option is selected by this document.

| Option | Meaning | When to choose |
| --- | --- | --- |
| A. Tenant frontends stay tenant-owned | Each tenant keeps its own frontend repository. Product provides docs/templates only. | Best while tenant needs are divergent or product template is immature. |
| B. Product-owned starter template | `ngosystem` hosts a starter repository used to create future tenant frontends. | Choose when repeatable frontend shell exists and evidence gates are stable. |
| C. Shared package plus tenant shells | Product owns shared UI/components; tenants keep thin repositories. | Choose when multiple tenants need common UI but tenant branding/content remains separate. |
| D. Managed tenant platform | Product hosts runtime tenant surfaces centrally. | Production-stage decision only; requires runtime, compliance, support and operations evidence. |

Current recommended default:

```text
Option A now
Option B/C later after evidence
Option D not now
```

## Extraction Readiness Checklist

Before any tenant template can be released, record evidence for:

- tenant-neutral information architecture;
- explicit list of tenant-specific content to exclude;
- asset and consent boundary;
- accessibility baseline;
- no PII/contact-data defaults;
- no payment credentials or secret placeholders that could be mistaken for real values;
- no legal-content reuse without tenant review;
- staging/demo values marked as demo;
- release-gate mapping;
- independent audit of the extracted template package.

## RC Silesia Extraction Boundary

RC Silesia may contribute learning from:

- navigation and content structure;
- staging preview lessons;
- operator workflows;
- public-content obligations;
- accessibility/performance findings;
- support/incidents expectations;
- governance and evidence packaging.

RC Silesia must not be copied as:

- default legal entity data;
- default statutes or resolutions;
- default images, logos or people;
- default contact data;
- default bank/payment configuration;
- default production-readiness claim;
- default compliance/legal conclusion.

## Relation To Open Decisions

This document reports progress on:

```text
OPD-003 Tenant frontend strategy
OPD-004 Tenant-template extraction
```

It does not close them.

They remain open until a future decision selects a repository option and, if
applicable, ships an audited template artifact.

## Forbidden Claims

Do not derive these from this strategy:

```text
TENANT_TEMPLATE_READY
TENANT_TEMPLATE_RELEASED
TENANT_FRONTEND_STRATEGY_CLOSED
REPOSITORY_TRANSFER_APPROVED
PUBLIC_SAAS_LAUNCHED
PRODUCTION_READY
LEGAL_READY
```

## Acceptance Boundary

This is a strategy record only.

```text
NO_TEMPLATE_RELEASE
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
