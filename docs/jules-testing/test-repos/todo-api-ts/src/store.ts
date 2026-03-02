export type Task = {
  id: string;
  title: string;
  done: boolean;
};

const db: Task[] = [
  { id: 't1', title: 'ship phase 3', done: false },
  { id: 't2', title: 'verify sse filter', done: true },
];

export function listTasks() {
  return db;
}

export function createTask(title: string) {
  const task = {
    id: `t${db.length + 1}`,
    title,
    done: false,
  };
  db.push(task);
  return task;
}

export function updateTask(id: string, patch: Partial<Pick<Task, 'title' | 'done'>>) {
  const task = db.find((t) => t.id === id);
  if (!task) return null;
  if (typeof patch.title === 'string') task.title = patch.title;
  if (typeof patch.done === 'boolean') task.done = patch.done;
  return task;
}

export function removeTask(id: string) {
  const idx = db.findIndex((t) => t.id === id);
  if (idx === -1) return false;
  db.splice(idx, 1);
  return true;
}
