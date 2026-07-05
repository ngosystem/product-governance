# Product Decision Record Template

Status:

```text
PRODUCT_DECISION_RECORD_TEMPLATE_RECORDED
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

Use this template for product-governance decisions in ngOSystem.

Completing this template records a decision proposal or decision. It does not
create runtime, legal readiness, production readiness or independent audit
validity.

## Header

```text
Decision id:
Title:
Date:
Decision owner:
Decision type:
Status:
Related repositories:
Related tenants:
Related evidence:
```

Allowed decision types:

- product architecture;
- repository governance;
- runtime gate;
- legal/compliance baseline;
- tenant boundary;
- status correction;
- roadmap sequencing;
- security/governance control.

## Context

Describe:

- what problem this decision addresses;
- what changed in project state;
- what evidence or reports triggered the decision;
- what remains unknown.

## Decision

Record the actual decision in clear language.

```text
Decision:
Allowed now:
Not allowed by this decision:
```

## Scope

Define exactly what this decision covers.

```text
Scope:
Not scope:
```

## Status Tokens

Record narrow status tokens.

```text
REPORTED
AWAITING_INDEPENDENT_AUDIT
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

Do not copy `AUDIT_VALID`, `PRODUCTION_READY`, or `LEGAL_READY` unless the
corresponding independent evidence exists.

## Evidence

Link evidence without embedding secrets:

- commits;
- PRs;
- evidence packages;
- audit verdicts;
- check outputs;
- legal/compliance review references;
- runtime proof, if any.

## Residuals

List residuals explicitly:

| Residual | Owner | Trigger to close | Status |
| --- | --- | --- | --- |
| | | | |

## Impact

Record expected impact:

- product;
- tenant;
- repository;
- runtime;
- legal/compliance;
- security;
- user/operator workflow.

## Non-Claims

This decision does not claim:

```text
PRODUCTION_READY
LEGAL_READY
DATA_PROTECTION_CERTIFIED
RUNTIME_LIVE
TENANT_PRODUCTION_READY
AUDIT_VALID
```

unless separately evidenced.

## Review And Audit

```text
Self-review:
Independent audit:
Next review date:
```

## Final Decision

```text
Accepted / Rejected / Deferred / Superseded:
Rationale:
Date:
Decision owner:
```

## Acceptance Boundary

```text
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
