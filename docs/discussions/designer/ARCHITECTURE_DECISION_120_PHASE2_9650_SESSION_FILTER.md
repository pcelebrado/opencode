# Designer Mirror: ARCHITECTURE_DECISION_120 Phase 2 SSE Session Filter

Source: `DE51GN3R/architectures/ARCHITECTURE_DECISION_120_PHASE2_9650_SESSION_FILTER.md`

## Scope

- Optional `sessionID` filter on `GET /event`.
- Keep no-filter legacy behavior intact.

## Implementation checklist

1. Query schema accepts optional `sessionID`.
2. Helper extracts nested event session context.
3. Dispatch gate filters only on concrete mismatch.
4. Regression tests cover filtered and unfiltered modes.

## Outcome intent

Narrow route-level change with deterministic safety and minimal blast radius.
