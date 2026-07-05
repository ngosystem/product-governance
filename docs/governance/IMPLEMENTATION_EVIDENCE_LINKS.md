# ngOSystem Implementation Evidence Links

Status:

```text
NGOSYSTEM_IMPLEMENTATION_EVIDENCE_LINKS_RECORDED
IMPLEMENTATION_EVIDENCE_SOURCE_MAP_RECORDED
NO_EVIDENCE_REVALIDATION
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records where implementation evidence is expected to live.

It is an evidence-source map, not an evidence verdict. It does not recompute
hashes, rerun checks, assign `AUDIT_VALID`, transfer repositories or activate
runtime.

## Core Rule

Product governance may link to evidence. It must not upgrade evidence.

```text
Evidence source map != evidence validation
Evidence link != AUDIT_VALID
Evidence link != production readiness
```

If a source repository or audit package carries a narrower status, this product
governance repository must preserve that narrower status.

## Authoritative Source Map

| Source | Evidence class | Product areas informed | Boundary |
| --- | --- | --- | --- |
| `ngosystem/product-governance` | product ownership, naming, tenant boundary, release gates, decision log, roadmap | all product areas | governance only; no runtime evidence |
| `pawelkojs-dotcom/ngos-payments-backend` | backend runtime gates, Supabase migrations, payments, status canon, tracked debt, tenant isolation, support/incidents and evidence packages | `ngOPay`, `ngONet`, `ngOSafe`, `ngOSet`, selected `ngOStart` and `ngODoc` foundations | implementation source; status must be read from the repo and its audit packages |
| `ngOs_UNIVERSAL` | universal/product foundation contracts, ORG-NET/VOL-NET schemas and validators, founding/document tooling where present | `ngOStart`, `ngODoc`, `ngONet`, `ngOSet` | implementation source; no production inference from product governance |
| `RC-Silesia/WEBSITE` | tenant frontend, staging preview, public RC Silesia surface, tenant pilot UI | tenant-specific RC Silesia pilot and frontend evidence | tenant repository; not product ownership source |
| `RC-Silesia-SOT` | source-of-truth artifacts for tenant formal content where applicable | tenant formal-content evidence | tenant evidence only; not product-wide legal readiness |
| evidence ZIPs and sidecars in controlled handoff locations | audit packages, manifests, SHA256SUMS, verbatim gates and independent audit inputs | scoped module audits | valid only after independent audit; raw package presence is not a verdict |

## Product Area Evidence Pointers

| Product area | Primary evidence source | Expected evidence types | Current product-governance boundary |
| --- | --- | --- | --- |
| `ngOStart` | `ngOs_UNIVERSAL`, `ngos-payments-backend`, tenant evidence packages | schemas, validators, founding-package checks, formal-content evidence | no automatic filing, signing, adoption or legal authority |
| `ngODoc` | `ngOs_UNIVERSAL`, backend governance/audit docs | provenance, document-generation checks, hash/source records | no final legal sufficiency and no automatic filing claim |
| `ngOPay` | `ngos-payments-backend` | payment runtime checks, P24 sandbox/live evidence, webhook identity, financial gates | live/payment production claims remain evidence-gated |
| `ngONet` | `ngos-payments-backend`, `ngOs_UNIVERSAL` | ORG-NET/VOL-NET contracts, validators, CN-PILOT evidence, tenant-isolation checks | no public directory, no person marketplace, no production matching runtime |
| `ngOSafe` | `ngos-payments-backend`, product-governance docs | status canon, redaction, support/incidents, tracked debt, migration dependency guards | no legal/data-protection certification and no production SLA |
| `ngOSet` | `ngos-payments-backend`, `ngOs_UNIVERSAL` | membership-role runtime probes, role/policy schemas, settings validators | no VC/EAA credential runtime and no broad status beyond scoped evidence |
| `ngOSprint` | tenant pilot docs, CN-PILOT evidence, future product templates | pilot plans, closeout packages, bounded operational evidence | speed does not bypass release gates |
| `ngOStop` | future evidence source | not yet established | concept only |

## Evidence Status Reading Rule

When product governance references an implementation result, record the source
status exactly and preserve its scope.

Examples:

```text
REPORTED_PASS / AWAITING_INDEPENDENT_AUDIT
AUDIT_VALID_FOR_TEXT_STRUCTURAL_GUARD
AUDIT_VALID_FOR_DELETE_PATH_AND_FAIL_CLOSED_RUNTIME_PROBES
BLOCKED_PRE_FLIGHT
NOT_PRODUCTION_READY
```

Do not shorten these into:

```text
AUDIT_VALID
READY
DONE
PRODUCTION_READY
```

without the original scope and residuals.

## Audit Package Rule

An evidence package becomes useful only when it is inspectable:

- ZIP or source artifact is present;
- SHA sidecar or declared SHA is present;
- internal manifest and `SHA256SUMS.txt` exist when required by the package standard;
- runtime/check outputs are verbatim when the package claims runtime evidence;
- independent auditor can reproduce or inspect the relevant proof.

Path names in reports are not enough by themselves.

```text
shown-in-chat != present-on-disk
path-mentioned != evidence-present
hash-declared != hash-verified
```

## Cross-Repository Boundary

This document does not move any repository under `ngosystem`.

Repository transfer remains governed by:

```text
docs/templates/REPOSITORY_TRANSFER_DECISION_TEMPLATE.md
```

Until a transfer decision exists, implementation evidence remains where it is.

## Forbidden Claims

Do not derive these from this map:

```text
NGOSYSTEM_PRODUCTION_READY
NGOSYSTEM_RUNTIME_LIVE
NGOSYSTEM_AUDIT_VALID_GLOBAL
IMPLEMENTATION_EVIDENCE_VALIDATED
REPOSITORY_TRANSFER_COMPLETE
TENANT_PRODUCTION_READY
LEGAL_READY
```

## Acceptance Boundary

This is an evidence-source map only.

```text
NO_EVIDENCE_REVALIDATION
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
