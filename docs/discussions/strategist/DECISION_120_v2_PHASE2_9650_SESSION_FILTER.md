# Strategist Mirror: DECISION_120 v2 Phase 2 Session Filter

Source: `STR4TEG15T/memory/decisions/DECISION_120_v2_PHASE2_9650_SESSION_FILTER.md`

## Metadata

- Phase: 2
- Scope: Optional `sessionID` filtering on `GET /event`
- Delivery branch: `phase2-9650-session-sse`
- Delivery PR (fork): `https://github.com/pcelebrado/opencode/pull/1`

## Contract snapshot

1. Add optional `sessionID` query support.
2. Preserve no-filter behavior when `sessionID` is absent.
3. Add tests for filtered and legacy paths.
4. Keep cross-agent continuity artifacts published.

## Validation snapshot

- `bun test test/server/event-subscribe.test.ts`
- `bun test test/control-plane/sse.test.ts test/acp/event-subscription.test.ts`
