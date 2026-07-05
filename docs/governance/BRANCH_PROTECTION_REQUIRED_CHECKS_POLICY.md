# ngOSystem Branch Protection And Required Checks Policy

Status:

```text
NGOSYSTEM_BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY_RECORDED
OPD_006_BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY_REPORTED
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records the branch protection and required checks policy for the
ngOSystem repository set.

It is a governance policy. It does not configure GitHub settings, change
required checks, move repositories, change deployments, or create production
readiness.

## Purpose

Branch protection and required checks are operational controls for repository
integrity. They help ensure that code, governance changes, runtime checks and
tenant-specific updates pass the right gates before they enter a protected
branch.

They are not product readiness claims.

Passing required checks must not be reported as:

```text
PRODUCTION_READY
LEGAL_READY
PUBLIC_SAAS_LAUNCHED
```

## Repository Classes

| Repository class | Current examples | Protection intent |
| --- | --- | --- |
| Product governance | `ngosystem/product-governance` | Protect product decisions, status discipline, repository policy, release gates and product/tenant boundaries. |
| Product runtime/backend | current `pawelkojs-dotcom/ngos-payments-backend`; future product backend if transferred | Protect migrations, runtime-critical checks, payment gates, tenant isolation, status canon and secrets/redaction evidence. |
| Tenant frontend | `RC-Silesia/WEBSITE`; future tenant frontends | Protect tenant-facing presentation, staging previews, accessibility checks, content boundaries, assets and consent checklists. |
| Product tooling/universal | current `ngOs_UNIVERSAL`; future product tooling repositories | Protect shared contracts, validators, schemas and tooling that can affect more than one tenant or module. |

This policy records the desired structure. Exact GitHub required check names
must be inventoried from the repository workflows before any settings are
applied.

## Protection Levels

| Level | Name | Use when | Controls |
| --- | --- | --- | --- |
| L0 | Documentation direct-commit allowed | Low-risk governance documents before binding release/security/legal policy. | Direct commit by owner allowed; status discipline still required. |
| L1 | PR recommended | Documents or contracts affect multiple repositories, tenants or product claims. | Pull request preferred; review or explicit owner approval. |
| L2 | PR plus required checks | Runtime code, migrations, CI gates, validators, release gates or tenant-facing build outputs. | Pull request, required status checks, no bypass without explicit owner decision. |
| L3 | Protected release/environment gate | Production-like deployments, secrets, payments, public launch, legal/compliance sensitive output. | Required checks plus environment approvals and deployment evidence. |

The level can differ per repository. A tenant frontend can be at L2 for staging
checks while product-governance remains L0 or L1 for documentation-only work.

## Product Governance Repository

Repository:

```text
ngosystem/product-governance
```

Current recommended level:

```text
L0 / L1_TRANSITION
```

Direct commits are acceptable while this repository contains governance
documents only and while Paweł Kojs remains the sole product decision owner.

Move to L1 or L2 when the repository starts carrying binding:

- release policy;
- security policy;
- pricing or commercial policy;
- legal or compliance decisions;
- production-candidate decisions;
- repository transfer decisions.

Candidate checks before L2:

- markdown structure check;
- forbidden production/legal/runtime claim scan;
- status-token consistency check;
- link/reference check for local governance documents.

Current boundary:

```text
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

## Product Runtime Backend

Current implementation repository:

```text
pawelkojs-dotcom/ngos-payments-backend
```

Current recommended level:

```text
L2_FOR_MAIN
L3_FOR_PRODUCTION_ENVIRONMENTS
```

Candidate required checks:

- governance/status-canon/tracked-debt checks;
- migration dependency guard;
- runtime-critical CI for membership attestation and PAY C1 runtime checks;
- PAY C1 integrity checks;
- PAY financial gate;
- tenant isolation checks as they mature from recon to runtime matrix;
- lint, typecheck and test suite;
- secret/redaction scans;
- packaging/evidence integrity checks for release or audit bundles.

The exact GitHub check names must be read from workflow job names before branch
protection is configured. This policy does not assert that any of these checks
are currently enforced by GitHub branch protection.

Runtime check PASS does not imply production readiness. It narrows the evidence
scope for the specific invariant under test.

## Tenant Frontends

Current tenant frontend example:

```text
RC-Silesia/WEBSITE
```

Current recommended level:

```text
L1_FOR_CONTENT_ONLY
L2_FOR_STAGING_PREVIEW
L3_FOR_PRODUCTION_PUBLICATION
```

Candidate required checks:

- static build or page generation check;
- staging preview check;
- noindex/demo-value guard for staging previews;
- PII, contact-data and secret scan;
- accessibility and WCAG-oriented static checks;
- Lighthouse evidence for staging or production-candidate reviews;
- asset and image-consent checklist before public production claim;
- tenant/product boundary claim scan.

Tenant frontend checks must not promote a tenant preview into product SaaS
readiness. A tenant preview can be valid while the product remains:

```text
NOT_PRODUCTION_READY
```

## Environments

Preview and staging deployments may run automatically if they preserve their
preview/staging boundary.

Production deployments should require:

- explicit product or tenant owner decision, depending on scope;
- required checks for the repository class;
- environment approval;
- evidence of secrets handling;
- rollback or incident plan;
- legal/compliance sign-off if the deployment claims such readiness.

## OPD-006 Closure Path

This policy reports progress on OPD-006. It does not close OPD-006.

OPD-006 can be closed only after a separate evidence-backed change:

1. inventory actual GitHub branch protection settings per repository;
2. inventory actual workflow job names and required status check names;
3. record which checks are enforced, optional or unavailable;
4. apply configuration where appropriate, or explicitly defer with reasons;
5. record evidence from GitHub settings or API output;
6. update the decision log and open-decision backlog.

Until then:

```text
OPD_006_BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY_REPORTED
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
```

## Forbidden Claims

This document must not be used to claim:

```text
BRANCH_PROTECTION_CONFIGURED
REQUIRED_CHECKS_ENFORCED
RUNTIME_CI_PROTECTED
PRODUCTION_READY
LEGAL_READY
PUBLIC_SAAS_LAUNCHED
```

Those claims require separate evidence from repository settings, runtime runs,
release gates or legal/compliance review, depending on the claim.

## Acceptance Boundary

This is a policy record only.

```text
NGOSYSTEM_BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY_RECORDED
OPD_006_BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY_REPORTED
NO_BRANCH_PROTECTION_CHANGE
NO_REQUIRED_CHECKS_CONFIGURATION_CHANGE
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
