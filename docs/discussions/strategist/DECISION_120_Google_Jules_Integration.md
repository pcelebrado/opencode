# Strategist Mirror: DECISION_120 Google Jules Integration

Source: `STR4TEG15T/memory/decisions/DECISION_120_Google_Jules_Integration.md`

## Why this is mirrored here

- Keeps Phase 1 to Phase 3 strategy visible inside the branch lineage.
- Preserves implementation context after compaction.

## Key strategic points

- Two-phase delivery: stateless Jules proxy first, SSE-native watcher second.
- Community alignment targets: `#6627`, `#9649`, `#9650`.
- Non-negotiables include strict style, testing, and issue/PR hygiene.
- Phase 2 companion work establishes `sessionID` filtering as a fixed contract.

## Referenced artifacts

- `docs/specs/10-PLAN-Jules-Three-Phase-Execution.md`
- `docs/specs/11-DECISION-Phase2-9650-Session-Filter.md`
- `docs/specs/11-JOURNAL-Phase2-9650-Session-Filter.md`
- `docs/specs/12-DECISION-Phase3-Jules-Completion.md`
- `docs/specs/12-JOURNAL-Phase3-Jules-Completion.md`

## Live branch context

- Historical lineage branch: `chasing-jules-phase3`
- Decision status for Phase 3: OPEN pending manual testing and final upstream PR.
