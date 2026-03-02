# Phase 2 and Phase 3 Idea Log (Nexus + OpenFixer)

## Purpose

Capture the direct implementation dialogue used to accelerate Phase 2 and Phase
3 execution so other agents can recover full intent after compaction.

## Phase 2 idea set (issue #9650)

1. Keep change narrow: `/event` route only.
2. Add optional query parameter `sessionID` to SSE subscription endpoint.
3. Preserve legacy behavior when no `sessionID` is supplied.
4. Avoid broad bus/protocol rewrites; filter at dispatch gate.
5. Add deterministic tests for both filtered and unfiltered behavior.
6. Maintain milestone journal entries with commit/push checkpoints.

## Phase 2 execution outcomes

- Implemented helper-based event session extraction to handle nested payload
  variance.
- Added route-level conditional filter and verified backward compatibility.
- Added targeted server tests for filtered/unfiltered paths.
- Merged into fork `dev` via PR #1:
  `https://github.com/pcelebrado/opencode/pull/1`

## Phase 3 immediate execution directives from Nexus

1. Branch from `chasing-jules` into `chasing-jules-phase3`.
2. Complete Jules integration before ticket-closure sweep.
3. Keep full lineage and do not rewrite history.
4. Keep all internal workflow/discussion documentation in branch docs.
5. Defer final upstream PR until manual testing is complete.
6. Keep decision OPEN until testing is done and PR is finalized.

## Phase 3 implementation ideas captured

1. Jules should be discoverable in `opencode auth login` even when models.dev
   does not list it.
2. Built-in provider entry must respect enabled/disabled provider filters.
3. Avoid duplicate provider entries when plugins or config already provide
   `jules`.
4. Continue validating Phase 2 SSE session behavior while extending Phase 3.

## Phase 3 execution outcomes (current)

- Added Jules built-in auth provider discoverability path.
- Added tests for include/exclude/dedupe behavior in auth provider picker.
- Synced fork branches with `upstream/dev` and kept branch-local decision state.
- Created Phase 3 release with CLI asset for manual validation.
- Decision remains OPEN pending Nexus manual test pass and final upstream PR.

## Current operator guidance

- Historical lineage branch: `chasing-jules-phase3`
- Manual test branch link:
  `https://github.com/pcelebrado/opencode/tree/chasing-jules-phase3`
- Tracking note thread:
  `https://github.com/anomalyco/opencode/pull/15702`

## Final PR shaping policy

- Internal discussion/workflow docs remain visible in development lineage.
- Final upstream PR can include documentation adapted for OpenCode docs while
  internal-only artifacts are removed by forward commits (no history rewrite).
