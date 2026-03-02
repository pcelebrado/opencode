# Jules Prompt Tasks

Use this repo as a coding-agent exercise.

## Prompt seed

```text
Implement status filtering, validation, and proper 404 behavior in this API.
Add tests and keep changes minimal.
```

## Acceptance

- `GET /tasks?status=open` returns only `done=false`
- `GET /tasks?status=done` returns only `done=true`
- POST/PATCH reject empty titles with `400`
- PATCH unknown id returns `404`
- Tests cover success and failure paths
