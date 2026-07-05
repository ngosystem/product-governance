# ngOSystem Status And Evidence Discipline

Status:

```text
NGOSYSTEM_STATUS_EVIDENCE_DISCIPLINE_RECORDED
AUDIT_VALID_WRITER_BOUNDARY_RECORDED
RUNTIME_EVIDENCE_OVER_REVIEW_PROSE
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records the status and evidence discipline for ngOSystem product
governance.

It is a governance rule. It does not create runtime evidence, legal readiness,
production readiness, or independent audit validity.

## Core Rule

```text
Evidence outranks prose.
Runtime evidence outranks review prose.
Independent audit outranks implementer self-review for AUDIT_VALID.
```

Product governance may record decisions, status boundaries and evidence links.
It must not promote implementation state beyond the evidence that exists in the
relevant repository or audit package.

## Who May Write What

| Actor | May write | Must not write |
| --- | --- | --- |
| Implementer / Codex | `REPORTED`, `REPORTED_PASS`, `AWAITING_INDEPENDENT_AUDIT`, evidence package notes, self-review | `AUDIT_VALID` for its own work, `PRODUCTION_READY`, `LEGAL_READY` |
| Independent auditor | `AUDIT_VALID`, `AUDIT_BLOCKED`, narrowed verdicts, residuals | production/legal readiness unless separately mandated and evidenced |
| Product owner | product decision accepted/deferred/rejected, production decision, ownership decision | technical audit validity without evidence |
| Legal/IOD reviewer | legal/privacy readiness or blockers within their mandate | runtime pass or engineering audit validity |

## Status Vocabulary

| Status | Meaning |
| --- | --- |
| `RECORDED` | Governance fact or decision is recorded. |
| `REPORTED` / `REPORTED_PASS` | Implementer reports completion; independent audit may still be pending. |
| `AWAITING_INDEPENDENT_AUDIT` | Evidence exists or is expected, but independent review has not yet closed it. |
| `AUDIT_VALID` | Independent audit found the scoped evidence valid. Must include scope and residuals. |
| `AUDIT_BLOCKED` | Independent audit found a blocker or missing evidence. |
| `NO_RUNTIME_EFFECT` | The change is documentation/governance only. |
| `NOT_PRODUCTION_READY` | No production-readiness claim is made. |
| `PRODUCTION_READY` | Forbidden unless production evidence and owner decision exist. |
| `LEGAL_READY` | Forbidden unless legal/IOD review explicitly records it. |

## Scope Rule

Every status must carry a scope.

Good:

```text
AUDIT_VALID for repo integration/checker/preparation only.
```

Bad:

```text
AUDIT_VALID
```

without saying for what.

## Residual Rule

Residuals do not invalidate a scoped positive verdict if they are:

- named;
- scoped outside the verdict;
- assigned to an owner or future trigger;
- preserved in a decision log, matrix, tracked-debt register or audit note.

Residuals become blockers when a status tries to claim the scope that the
residual still keeps open.

## Production And Legal Boundaries

The following must not be inferred from governance documents:

```text
PRODUCTION_READY
LEGAL_READY
RODO_READY
BIP_READY
WCAG_CERTIFIED
E_DORECZENIA_READY
LOGIN_GOV_PL_READY
PUBLIC_SAAS_LAUNCHED
TENANT_PRODUCTION_READY
```

These require their own evidence chain.

## Evidence Chain

Preferred chain:

```text
decision or defect
-> implementation or correction
-> runtime/checker proof
-> evidence package
-> independent audit
-> scoped status update
-> residuals/tracked debt
-> protective rule or future gate
```

If a step is missing, the status should say so.

## Relation To Implementation Repositories

Implementation repositories may carry deeper, machine-enforced status canon
rules.

This product-governance repository records the product-level rule:

```text
Do not promote product state beyond implementation evidence.
```

If implementation status and product-governance status differ, the product
governance document should point to the implementation evidence and preserve the
narrower status until reconciliation.

## Forbidden Claims

Do not write these in this repository unless separately evidenced:

```text
NGOSYSTEM_PRODUCTION_READY
NGOSYSTEM_RUNTIME_LIVE
NGOSYSTEM_LEGAL_READY
NGOSYSTEM_AUDIT_VALID_GLOBAL
RC_SILESIA_PRODUCT_OWNER
TENANT_PRODUCTION_READY
PUBLIC_SAAS_LAUNCHED
```

## Acceptance Boundary

This is a governance discipline document only.

```text
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
