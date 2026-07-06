# EU Forge Alternatives Recon

Status:

```text
NGOSYSTEM_EU_FORGE_ALTERNATIVES_RECON_RECORDED
OPD_013_EU_FORGE_ALTERNATIVE_RECON_REPORTED
EU_FORGE_DUE_DILIGENCE_PENDING
NO_GIT_HOSTING_MIGRATION
NO_PRIMARY_REMOTE_CHANGE
NO_MIRROR_CREATED
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```

This document records a small reconnaissance of European or self-controlled
Git forge alternatives for ngOSystem.

It does not migrate any repository, create a mirror, change a remote, change
branch protection, change repository visibility or create production readiness.

## Purpose

The current GitHub-based setup is operationally convenient, but OPD-006 showed
that required-check enforcement for the private backend may be constrained by
plan, visibility or provider features.

The purpose of this recon is to keep the alternative path visible without
creating empty repositories or moving code prematurely.

## Current Position

Current source-of-truth hosting remains unchanged:

```text
GitHub remains primary.
No primary remote changes are made.
No repository transfer is approved.
```

The strategic question is not "leave GitHub now".

The strategic question is:

```text
If private backend enforcement, EU infrastructure or sovereignty becomes
release-critical, which forge path is the least disruptive?
```

## Candidate Paths

| Candidate | Strength | Cost / risk | Current status |
| --- | --- | --- | --- |
| GitHub paid plan | Smallest operational change; likely solves private-backend required-check enforcement. | Not European-owned; keeps vendor dependence; paid plan decision needed. | CANDIDATE / GITHUB_PRIMARY_REMAINS |
| Forgejo self-hosted on EU infrastructure | Highest sovereignty; lightweight forge; can be operated on chosen EU hosting. | Requires server, backups, runner security, upgrades, monitoring and admin discipline. | CANDIDATE / SELF_HOSTING_RECON_NEEDED |
| Codeberg | European nonprofit public forge based on Forgejo; good fit for public mirrors/docs/open-source presence. | Must verify private repo, CI, runner, SLA, backup and support fit before backend use. | CANDIDATE / PUBLIC_MIRROR_OR_DOCS_PRESENCE_ONLY |
| GitLab self-managed on EU infrastructure | Strong branch protection, merge checks and CI; mature governance controls. | Heavier platform; higher operational surface than Forgejo. | CANDIDATE / HEAVY_PLATFORM_OPTION |
| GitLab.com | Mature hosted workflow and merge checks. | Provider/data-location and plan questions remain; not the sovereignty-first option. | CANDIDATE / HOSTED_PLATFORM_RECON_NEEDED |

## Current Recommendation

For the current stage:

```text
GitHub remains primary.
Forgejo self-hosted EU remains the strategic sovereignty candidate.
Codeberg remains a possible public mirror / public docs presence.
GitLab self-managed remains the heavier governance-platform candidate.
```

Do not transfer the backend until:

- production-candidate scope is declared;
- backend required-check enforcement becomes release-critical;
- secret and git-history review is complete;
- CI/runtime gate parity is mapped for the target forge;
- backup, runner and incident responsibilities are assigned;
- owner decision record exists.

## Future Recon Checklist

Before any EU forge pilot or mirror is created, record:

- target forge and operator;
- hosting jurisdiction and infrastructure owner;
- repository visibility model;
- branch protection / required checks capability;
- CI runner model and isolation boundary;
- secret storage model;
- audit log and retention model;
- backup and restore model;
- migration or mirror direction;
- rollback plan;
- whether the target is primary, mirror or public-presence only.

## Minimal Safe Next Experiment

The first safe experiment, if needed, is not backend migration.

It is:

```text
EU_FORGE_PUBLIC_MIRROR_PILOT_CANDIDATE
NO_PRIMARY_REMOTE_CHANGE
NO_SECRETS
NO_RUNTIME_DEPLOYMENT
```

Candidate content for such a pilot:

- product-governance public mirror; or
- static public docs mirror; or
- empty test repository with no product authority.

Backend mirroring is a later decision because it touches private runtime code,
secrets boundary, payment evidence and tenant data governance.

## Source Links For Future Verification

The following public documentation should be rechecked before a concrete
decision:

- Forgejo branch and tag protection:
  <https://forgejo.org/docs/latest/user/protection/>
- Forgejo Actions administrator guide:
  <https://forgejo.org/docs/latest/admin/actions/>
- GitLab protected branches:
  <https://docs.gitlab.com/user/project/repository/branches/protected/>
- GitLab auto-merge and pipelines-must-succeed behavior:
  <https://docs.gitlab.com/user/project/merge_requests/auto_merge/>
- Codeberg:
  <https://codeberg.org/>

## Forbidden Claims

Do not use this recon to claim:

```text
EU_FORGE_SELECTED
EU_FORGE_MIRROR_CREATED
EU_FORGE_PRIMARY_REMOTE_CONFIGURED
BACKEND_MIGRATED_TO_EU_FORGE
REPOSITORY_TRANSFER_COMPLETE
BRANCH_PROTECTION_CONFIGURED
REQUIRED_CHECKS_ENFORCED
PRODUCTION_READY
LEGAL_READY
```

## Acceptance Boundary

This is a recon record only.

```text
NGOSYSTEM_EU_FORGE_ALTERNATIVES_RECON_RECORDED
OPD_013_EU_FORGE_ALTERNATIVE_RECON_REPORTED
EU_FORGE_DUE_DILIGENCE_PENDING
NO_GIT_HOSTING_MIGRATION
NO_PRIMARY_REMOTE_CHANGE
NO_MIRROR_CREATED
NO_REPOSITORY_TRANSFER
NO_CODE_TRANSFER
NO_RUNTIME_EFFECT
NOT_PRODUCTION_READY
```
