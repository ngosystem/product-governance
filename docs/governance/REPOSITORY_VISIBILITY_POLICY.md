# ngOSystem Repository Visibility Policy

Status:

```text
NGOSYSTEM_REPOSITORY_VISIBILITY_POLICY_RECORDED
OPD_005_REPOSITORY_VISIBILITY_POLICY_REPORTED
NO_VISIBILITY_CHANGE
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records a product-level repository visibility policy for
ngOSystem.

It does not change any GitHub repository setting, move code, expose secrets,
publish a product runtime, or create a public SaaS launch.

## Core Rule

Repository visibility is an operational and governance decision.

It must not be inferred from:

- repository name;
- GitHub organization;
- successful tests;
- tenant pilot status;
- public product narrative;
- existence of an evidence package.

```text
public repository != production readiness
private repository != weak governance
visibility policy != visibility change
```

## Current Default

At the current pre-production stage:

| Repository class | Default visibility posture | Rationale |
| --- | --- | --- |
| Product governance | Public allowed when no secrets/runtime code are present. | Public governance helps establish product identity and decision discipline. |
| Runtime implementation | Private by default until transfer, branch protection, secret handling and public-risk review are complete. | Runtime code may expose architecture, attack surface, internal checks or accidental sensitive material. |
| Universal/product tooling | Private or restricted by default until package boundaries and license/public-risk review exist. | Tooling may contain mixed research, tenant, and product materials. |
| Tenant frontend | Tenant decision. Public only when tenant content, assets, consent, accessibility and deployment boundaries are reviewed. | Tenant frontend visibility is not product-wide visibility. |
| Tenant records | Private or restricted by default. | May contain governance, personal, legal, financial or operational material. |
| Evidence packages | Not public by default. | Packages may include logs, local paths, residuals, hashes, operational metadata or redacted secrets. |
| Templates/starters | Public only after explicit release decision. | A template can be copied by others and must not carry tenant-specific content or hidden assumptions. |

## Current Repository Posture

| Repository | Current role | Visibility policy position |
| --- | --- | --- |
| `ngosystem/product-governance` | Product governance anchor. | Public is acceptable while it remains docs-only and secrets-free. |
| `pawelkojs-dotcom/ngos-payments-backend` | Current backend/runtime implementation. | Keep current visibility until a separate transfer/visibility decision exists. |
| `ngOs_UNIVERSAL` | Universal/product tooling and foundation artifacts. | Keep current visibility until package boundaries are reviewed. |
| `RC-Silesia/WEBSITE` | First-tenant frontend. | Tenant-controlled visibility; product governance must not treat it as product-wide public SaaS. |
| `RC-Silesia-SOT` | Tenant/source-of-truth materials. | Keep restricted unless a tenant-specific publication decision exists. |

This table is descriptive. It is not a GitHub settings change.

## Public-Allowed Criteria

A repository may become or remain public only if all applicable items are true:

- no secrets, credentials, tokens, private keys or unredacted environment values;
- no personal data or tenant-private operational data;
- no unreviewed legal/RODO/WCAG/BIP/e-Doreczenia/Login.gov.pl claims;
- no production readiness implied by README, badges, releases or deployment links;
- license/public-use posture is decided or explicitly withheld;
- branch protection and CI expectations are documented where the repository is operationally important;
- evidence packages are either absent or intentionally public-safe;
- tenant-specific assets and consent boundaries are reviewed.

## Private-By-Default Criteria

Keep a repository private or restricted when it contains:

- runtime implementation with unresolved security or secret-handling questions;
- payment, webhook, treasury or environment setup details;
- tenant records, member/volunteer/support/incident material;
- legal drafts, DPA, RODO or public-sector compliance work-in-progress;
- generated evidence packages with logs or local operational metadata;
- assets or photos without public-consent clearance;
- mixed research/product material not yet separated.

## Evidence Package Boundary

Evidence packages are not automatically public artifacts.

Before publishing any package, verify:

- redaction;
- manifest and SHA integrity;
- absence of PII and secrets;
- no local path leakage that creates risk;
- no accidental production/legal readiness claim;
- owner decision to publish.

## Tenant Boundary

Tenant visibility is tenant-scoped.

```text
RC Silesia public frontend != ngOSystem public SaaS launch
tenant public page != product production readiness
```

Future tenant templates must not copy tenant-public content into product-public
defaults without a separate template release decision.

## Relation To Open Decisions

This document reports progress on:

```text
OPD-005 Repository visibility policy
```

It does not close OPD-005.

OPD-005 can close only after current repository settings are inventoried and a
future decision either accepts them or records changes.

## Forbidden Claims

Do not derive these from this policy:

```text
VISIBILITY_CHANGE_COMPLETE
REPOSITORY_PUBLICATION_APPROVED
REPOSITORY_TRANSFER_APPROVED
PUBLIC_SAAS_LAUNCHED
PRODUCTION_READY
LEGAL_READY
```

## Acceptance Boundary

This is a visibility policy record only.

```text
NO_VISIBILITY_CHANGE
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
