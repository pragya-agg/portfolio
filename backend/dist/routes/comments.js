"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// lightweight in-memory store for demo
const router = (0, express_1.Router)();
const comments = [];
router.get('/', (_req, res) => {
    res.json(comments.slice(-50));
});
router.post('/', (req, res) => {
    const { name, message } = req.body;
    if (!name || !message)
        return res.status(400).json({ error: 'name and message required' });
    const c = { id: String(Date.now()), name, message, createdAt: new Date().toISOString() };
    comments.push(c);
    res.status(201).json(c);
});
exports.default = router;
//# sourceMappingURL=comments.js.map