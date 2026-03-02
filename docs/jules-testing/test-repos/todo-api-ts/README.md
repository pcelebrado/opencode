# todo-api-ts

Small TypeScript API sample for Jules coding tests.

## Current state

- In-memory task store
- Basic CRUD endpoints
- Missing validation and filtering behavior

## Jules implementation tasks

1. Add `GET /tasks?status=open|done` filtering.
2. Enforce non-empty `title` on create/update.
3. Return `404` when updating/deleting unknown ids.
4. Add tests for all new behavior.
