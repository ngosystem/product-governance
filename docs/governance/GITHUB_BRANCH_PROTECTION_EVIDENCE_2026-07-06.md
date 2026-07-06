# GitHub Branch Protection Evidence 2026-07-06

Status:

```text
PRODUCT_GOVERNANCE_BRANCH_PROTECTION_EVIDENCE_RECORDED
PRODUCT_GOVERNANCE_PR_GATE_OBSERVED
PRODUCT_GOVERNANCE_REQUIRED_CHECK_CONTEXT_OBSERVED
PRODUCT_GOVERNANCE_ADMIN_ENFORCEMENT_DISABLED_RECORDED
NO_PAID_GITHUB_PLAN_CHANGE
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This evidence note records the GitHub settings observed after the owner decision
to keep GitHub Free while adding a pull-request gate and the existing quality
workflow as the required check for `ngosystem/product-governance`.

It does not apply to runtime repositories, tenant frontends, production release
policy, legal readiness or backend branch protection.

## Command

```text
gh api -i repos/ngosystem/product-governance/branches/main/protection
```

## Observed Result

Observed on 2026-07-06 via GitHub REST API:

```text
HTTP/2.0 200 OK
required_status_checks.strict=true
required_status_checks.contexts=["product-governance-quality"]
required_status_checks.checks[0].context=product-governance-quality
required_status_checks.checks[0].app_id=15368
required_pull_request_reviews.required_approving_review_count=0
required_pull_request_reviews.dismiss_stale_reviews=false
required_pull_request_reviews.require_code_owner_reviews=false
required_pull_request_reviews.require_last_push_approval=false
enforce_admins.enabled=false
allow_force_pushes.enabled=false
allow_deletions.enabled=false
required_linear_history.enabled=false
```

The prior read returned:

```text
HTTP/2.0 404 Not Found
message=Branch not protected
```

## Owner Decision Boundary

This evidence supports the product-governance part of OPD-006 only.

Backend branch protection remains feature-gated on the current private GitHub
Free setup. Tenant frontend protection remains deferred until tenant production
or production-like scope is explicitly considered.

## Forbidden Claims

Do not use this evidence to claim:

```text
BACKEND_BRANCH_PROTECTED
TENANT_FRONTEND_BRANCH_PROTECTED
NGOSYSTEM_PRODUCTION_READY
NGOSYSTEM_RUNTIME_LIVE
NGOSYSTEM_LEGAL_READY
PUBLIC_SAAS_LAUNCHED
```

## Acceptance Boundary

This is GitHub settings evidence for a documentation/governance repository.

```text
PRODUCT_GOVERNANCE_BRANCH_PROTECTION_EVIDENCE_RECORDED
PRODUCT_GOVERNANCE_PR_GATE_OBSERVED
PRODUCT_GOVERNANCE_REQUIRED_CHECK_CONTEXT_OBSERVED
NO_PAID_GITHUB_PLAN_CHANGE
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
