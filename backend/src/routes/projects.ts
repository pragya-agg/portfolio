import { Router } from 'express';
import type { Request, Response } from 'express';

const router = Router();

// sample in-memory projects for demo; replace with DB in production
const projects = [
  { id: '1', name: 'DevPlay', description: 'This portfolio playground', tags: ['react','node','three'] },
  { id: '2', name: 'TinyCalc', description: 'A calculator mini-app demo', tags: ['js','wasm'] },
];

router.get('/', (_req: Request, res: Response) => {
  res.json({ projects });
});

router.get('/:id', (req: Request, res: Response) => {
  const p = projects.find((p) => p.id === req.params.id);
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
});

export default router;
