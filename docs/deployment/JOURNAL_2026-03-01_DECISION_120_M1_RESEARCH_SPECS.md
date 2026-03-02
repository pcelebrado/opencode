# Deployment Journal: DECISION_120 Milestone 1 — Research & Specifications

Source mirror from:
`opencode-jules/docs/deployment/refs/JOURNAL_2026-03-01_DECISION_120_M1_RESEARCH_SPECS.md`

## Summary

Research/specification phase completed with seven documents defining data model,
normalization, keepalive UX, thinking pipeline, TSX skeleton, SSE event spec,
and ADR contracts for Jules integration.

## Deliverables

- `docs/specs/01-NOTES_AI_Provider_Architecture.md`
- `docs/specs/02-NOTES_normalizeJulesToRun.md`
- `docs/specs/03-NOTES_keepalive copy generator.md`
- `docs/specs/04-NOTES_Thinking_Pipeline.md`
- `docs/specs/05-NOTES_agentic_run_page_jules_tsx_skeleton.md`
- `docs/specs/06-SPEC-SSE_Parallel_to_Planned_Feature.md`
- `docs/specs/07-ADR-Jules_Agentic_Run.md`

## Key decisions

1. Jules is not a ProviderHelper format adapter.
2. Truth-first UX is mandatory (events as truth, keepalive as labeled UX copy).
3. Two-loop architecture (truth loop and perception loop).
4. Evidence-based completion for plan steps.
5. Phased delivery (proxy first, SSE watcher later).
