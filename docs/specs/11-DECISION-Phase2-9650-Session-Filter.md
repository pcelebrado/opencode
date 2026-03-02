# Decision: Phase 2 implementation for issue #9650

## Decision context

- Parent plan: `docs/specs/10-PLAN-Jules-Three-Phase-Execution.md`
- Active branch: `phase2-9650-session-sse`
- Objective: implement session-scoped SSE subscription for `/event` in line with
  https://github.com/anomalyco/opencode/issues/9650.

## Strategist contract

Phase 2 is constrained to core SSE behavior and validation evidence:

1. Add `sessionID` query support to `/event`.
2. Preserve backward-compatible behavior when `sessionID` is omitted.
3. Validate with automated tests and publish milestone journal entries.

## Designer implementation plan (assimilated)

### Architecture proposal

- Keep transport unchanged (`streamSSE` on `/event`).
- Add server-side filtering at event dispatch time.
- Extract `sessionID` by scanning event properties for nested session context,
  since payload structures vary by event type.

### Build steps

1. Add `sessionID` query schema to `/event` route.
2. Add event-session extraction helper in server layer.
3. Apply conditional filter before stream write.
4. Add server-level tests proving:
   - session-scoped filtering works;
   - legacy all-events behavior remains.

### Risk mitigation

- **Risk**: dropping non-session events that clients still expect.
  - **Mitigation**: only filter when a concrete event `sessionID` exists.
- **Risk**: regressions in current clients.
  - **Mitigation**: explicit test for no-filter path.

## Oracle assessment (assimilated)

Assessment: `CLEAR` for Phase 2 implementation scope.

- Thread status: `INTACT`
- Confidence: `94/100`
- Evidence vector: `UP`
- Hardening note: keep event filtering observable via deterministic tests and
  preserve backward compatibility defaults.

## Phase 3 forward path

After Phase 2 merges and stabilizes:

1. Wire watcher/event integration to the accepted session-scoped SSE contract.
2. Re-validate reconnect semantics and timeline continuity.
3. Keep rewiring local so Phase 1 API surface remains stable.
