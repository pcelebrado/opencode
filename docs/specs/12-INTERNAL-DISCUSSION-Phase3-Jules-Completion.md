# Internal discussion: Phase 3 Jules completion

## Strategic discussion

- We continue on fork-only scope first, with no upstream PR creation until
  manual verification is complete.
- Phase 2 `sessionID` SSE filtering is already merged into fork `dev`, so Phase
  3 can build directly on that baseline.

## Design discussion

- Jules login discoverability should not depend on models.dev data freshness.
- The auth picker needs a deterministic built-in fallback entry for Jules.
- Built-in entries must follow the same config gates as standard providers.

## Validation discussion

- Unit tests are sufficient for the auth picker logic in this slice.
- SSE tests remain in the validation contract to guard against Phase 2
  regression while Phase 3 work progresses.

## Handoff discussion

- Nexus will run manual testing today on `chasing-jules-phase3`.
- PR creation is intentionally deferred until Nexus confirms runtime behavior.
- Final decision state remains `OPEN` until those two events complete.
