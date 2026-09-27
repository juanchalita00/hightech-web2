# HIGHTECH Web 2.0 — Runtime Execution Handoff v0.8.1

This handoff exists because the current build environment cannot resolve external npm hosts.

## What has been verified here

- Node 22 is available.
- All static HIGHTECH gates execute successfully.
- A structural TypeScript check passes across the source tree using temporary external-module stubs.
- The runtime QA harness itself has been exercised end-to-end against local staging and production fixtures.

These checks do **not** substitute for a real Next/React build.

## First command on a networked build machine

```bash
npm run runtime:probe
npm run runtime:bootstrap -- --install
```

The bootstrap performs, in order:

1. Node version check.
2. Dependency installation when `--install` is supplied.
3. Full static HIGHTECH gates.
4. Real `tsc --noEmit` using installed Next/React types.
5. `next build`.
6. Local `next start` in staging mode.
7. Runtime smoke suite.
8. HTTP contract suite.
9. Writes an evidence JSON under `docs/runtime-evidence/`.

## Important

The bootstrap deliberately does not mark Safari, iPhone, Android, Lighthouse, axe, rollback or monitoring as passed. Those require their own evidence.

No production release flags should be changed just because the bootstrap succeeds.
