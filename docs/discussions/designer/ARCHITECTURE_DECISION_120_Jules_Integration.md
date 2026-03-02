# Designer Mirror: ARCHITECTURE_DECISION_120 Jules Integration

Source: `DE51GN3R/architectures/ARCHITECTURE_DECISION_120_Jules_Integration.md`

## Architecture snapshot

- Jules is session-based and polling-driven.
- Existing streaming provider adapter is not the right abstraction.
- Recommended path: standalone Jules domain/client shape.

## Core design directions

- Reuse auth and error handling surfaces where appropriate.
- Keep Jules lifecycle explicit (create, poll, approve/reject, complete).
- Preserve evidence and normalization contracts for run timeline UX.

## Historical note

This is retained as design lineage. Later implementation passes may narrow
scope, but this packet captures the full architecture framing.
