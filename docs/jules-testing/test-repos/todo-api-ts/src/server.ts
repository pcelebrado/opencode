import { createServer } from 'node:http';
import { createTask, listTasks, removeTask, updateTask } from './store';

const server = createServer(async (req, res) => {
  if (!req.url || !req.method) {
    res.writeHead(400).end();
    return;
  }

  if (req.url === '/tasks' && req.method === 'GET') {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(listTasks()));
    return;
  }

  if (req.url === '/tasks' && req.method === 'POST') {
    const body = await readBody(req);
    const task = createTask(body.title ?? '');
    res.writeHead(201, { 'content-type': 'application/json' });
    res.end(JSON.stringify(task));
    return;
  }

  const match = req.url.match(/^\/tasks\/(.+)$/);
  if (!match) {
    res.writeHead(404).end();
    return;
  }

  if (req.method === 'PATCH') {
    const body = await readBody(req);
    const task = updateTask(match[1], body);
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(task));
    return;
  }

  if (req.method === 'DELETE') {
    const ok = removeTask(match[1]);
    res.writeHead(ok ? 204 : 404).end();
    return;
  }

  res.writeHead(405).end();
});

function readBody(req: import('node:http').IncomingMessage): Promise<Record<string, unknown>> {
  return new Promise((resolve) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    req.on('end', () => {
      const text = Buffer.concat(chunks).toString('utf8');
      resolve(text ? JSON.parse(text) : {});
    });
  });
}

server.listen(3001);
