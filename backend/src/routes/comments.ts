import { Router } from 'express';
import type { Request, Response } from 'express';
// lightweight in-memory store for demo
const router = Router();
const comments: Array<{ id: string; name: string; message: string; createdAt: string }> = [];

router.get('/', (_req: Request, res: Response) => {
  res.json(comments.slice(-50));
});

router.post('/', (req: Request, res: Response) => {
  const { name, message } = req.body as { name?: string; message?: string };
  if (!name || !message) return res.status(400).json({ error: 'name and message required' });
  const c = { id: String(Date.now()), name, message, createdAt: new Date().toISOString() };
  comments.push(c);
  res.status(201).json(c);
});

export default router;
