# Deployment Journal: DECISION_120 Milestone 2 — Architecture & Integration Design

Source mirror from:
`opencode-jules/docs/deployment/refs/JOURNAL_2026-03-01_DECISION_120_M2_ARCHITECTURE.md`

## Summary

Architecture phase established that Jules does not fit the existing streaming
provider adapter contract. Standalone Jules domain/client approach confirmed.

## Deliverables

- `docs/specs/08-ARCH-Jules_Provider_Integration.md`

## Confirmed architecture points

- Jules should live alongside Zen provider modules, not inside ProviderHelper.
- Phase 1 uses client-driven polling through stateless proxy routes.
- Phase 2 introduces SSE-native watcher behavior.
- Truth-first UX constraints are explicit and enforced by design.
