# Phase 3 journal: Jules completion pass

## Milestone 1 - branch and baseline

- Created worktree branch: `chasing-jules-phase3` from `chasing-jules`.
- Fast-forwarded to `origin/dev` after Phase 2 merge.
- Confirmed `/event` session-scoped filtering is present in
  `packages/opencode/src/server/server.ts`.

## Milestone 2 - auth discoverability implementation

- Added built-in auth provider fallback with `jules` in
  `packages/opencode/src/cli/cmd/auth.ts`.
- Implemented `resolveBuiltinProviders()` with:
  - enabled/disabled filter support,
  - dedupe against models.dev and plugin providers.
- Added Jules-specific login hint text in CLI auth flow.

## Milestone 3 - test coverage

- Extended `packages/opencode/test/cli/plugin-auth-picker.test.ts` with
  `resolveBuiltinProviders` tests:
  - includes Jules by default,
  - excludes when disabled,
  - respects enabled-only lists,
  - dedupes when plugin already provides `jules`.

## Next checkpoint

- Run targeted package tests for auth picker and SSE session filter stability.
- Hand to Nexus for manual runtime verification before opening Phase 3 PR.

## Milestone 4 - fork sync and completion note

- Synced fork branches with `upstream/dev`:
  - `origin/dev`
  - `origin/chasing-jules-phase3`
- Branch for testing and finalization:
  `https://github.com/pcelebrado/opencode/tree/chasing-jules-phase3`
- Completion note prepared for tracking thread:
  - Nexus will test this branch today.
  - PR will be opened when final validation is complete.

## Milestone 5 - decision remains open

- This decision is intentionally kept `OPEN` pending Nexus manual validation.
- No Phase 3 upstream PR will be opened until test confirmation is complete.
- After manual test pass, we will prepare ticket-touch update notes and then
  open the final PR.

## Milestone 6 - local runtime binding

- Local OpenCode runtime is now bound to the Phase 3 build version:
  `0.0.0-chasing-jules-phase3-202603021407`.
- Runtime command precedence was updated via user PATH so `opencode` resolves
  to the Phase 3 branch build for manual validation today.

## Milestone 7 - branch governance and maintainer alignment

- Merged fork PR `#1` into `origin/dev` to lock Phase 2 `sessionID` SSE filter.
- Aligned PR communication on `anomalyco/opencode#15702` to Phase 1 scope and
  fork-evidence testing methodology.
- Removed stale/noisy comments and kept a single current status thread.

## Milestone 8 - documentation restoration and continuity hardening

- Restored strategist/oracle/designer mirrors under `docs/discussions/`.
- Restored OpenFixer journal mirrors under `docs/deployment/`.
- Added consolidated Phase 2 and Phase 3 idea log:
  `docs/discussions/PHASE2_PHASE3_IDEA_LOG.md`.
- Confirmed decision posture: Phase 3 remains `OPEN` pending Nexus testing and
  final upstream PR.

## Milestone 9 - Jules testing harness expansion

- Built three sample test repos under `docs/jules-testing/test-repos/` and
  initialized each as its own git repository.
- Published GitHub repos for agent performance auditing:
  - `https://github.com/pcelebrado/jules-test-todo-api-ts`
  - `https://github.com/pcelebrado/jules-test-py-backend-hardening`
  - `https://github.com/pcelebrado/jules-test-react-kanban-widget`
- Updated testing docs with direct GitHub links for Jules/Juno execution.

## Milestone 10 - release and runtime stability controls

- Created prerelease tag with CLI asset:
  `v0.0.0-chasing-jules-phase3-202603021421`.
- Attached Windows CLI binary for manual validation distribution.
- Corrected wrapper/path drift so development pushes no longer depend on a
  running dist binary lock path.
