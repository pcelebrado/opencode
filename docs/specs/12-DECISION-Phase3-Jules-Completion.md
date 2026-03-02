# Decision: Phase 3 Jules integration completion

## Decision context

- Parent plan: `docs/specs/10-PLAN-Jules-Three-Phase-Execution.md`
- Phase 2 status: merged in fork via `https://github.com/pcelebrado/opencode/pull/1`
- Active branch: `chasing-jules-phase3`
- Objective: complete Jules integration flow so operator usage is end-to-end,
  then map and close connected tickets in follow-up passes.

## Strategist contract

Phase 3 prioritizes operability before broader ticket closure:

1. Ensure Jules credentials can be added from `opencode auth login`.
2. Keep Phase 2 `sessionID` `/event` behavior intact while extending integration.
3. Keep rewiring local and avoid regressions to existing provider auth flow.
4. Publish implementation notes and journal checkpoints for rapid handoff.

## Designer implementation plan (assimilated)

### Architecture proposal

- Treat Jules as an auth-capable provider identity in CLI credential UX.
- Do not force Jules into models.dev dependency for login discoverability.
- Add deterministic tests around provider option resolution and config filters.

### Build steps

1. Add built-in auth provider fallback list containing `jules`.
2. Respect `enabled_providers` and `disabled_providers` for built-ins.
3. Avoid duplication if plugin or models.dev already supplies `jules`.
4. Add tests for inclusion, exclusion, and dedupe paths.

### Risk mitigation

- **Risk**: auth picker pollution with duplicate providers.
  - **Mitigation**: dedupe against models.dev and plugin provider ids.
- **Risk**: bypassing user config restrictions.
  - **Mitigation**: apply existing enabled/disabled filters to built-ins.

## Oracle assessment (assimilated)

Assessment: `CLEAR` for this Phase 3 entry slice.

- Thread status: `INTACT`
- Confidence: `92/100`
- Evidence vector: `UP`
- Hardening note: keep this pass constrained to auth discoverability + tests
  before broader route/runtime rewiring.

## Verification contract

Required validation for this slice:

- `bun test test/cli/plugin-auth-picker.test.ts`
- `bun test test/server/event-subscribe.test.ts`
- `bun test test/control-plane/sse.test.ts test/acp/event-subscription.test.ts`
