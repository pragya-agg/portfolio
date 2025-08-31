"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// sample in-memory projects for demo; replace with DB in production
const projects = [
    { id: '1', name: 'DevPlay', description: 'This portfolio playground', tags: ['react', 'node', 'three'] },
    { id: '2', name: 'TinyCalc', description: 'A calculator mini-app demo', tags: ['js', 'wasm'] },
];
router.get('/', (_req, res) => {
    res.json({ projects });
});
router.get('/:id', (req, res) => {
    const p = projects.find((p) => p.id === req.params.id);
    if (!p)
        return res.status(404).json({ error: 'Not found' });
    res.json(p);
});
exports.default = router;
//# sourceMappingURL=projects.js.map