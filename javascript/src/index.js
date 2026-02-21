const express = require('express');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// Health check
app.get('/health', (_req, res) => {
    res.json({
        status: 'ok',
        service: 'IDS339-DevOps-JavaScript',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
    });
});

// Greet
app.get('/api/greet/:name', (req, res) => {
    const { name } = req.params;
    res.json({
        message: `Hello, ${name}! Welcome to IDS339 DevOps.`,
        timestamp: new Date().toISOString(),
    });
});

// In-memory items
const items = [
    { id: 1, name: 'Item Alpha' },
    { id: 2, name: 'Item Beta' },
];

app.get('/api/items', (_req, res) => {
    res.json({ data: items, count: items.length });
});

app.post('/api/items', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'name is required' });
    }
    const newItem = { id: items.length + 1, name };
    items.push(newItem);
    return res.status(201).json(newItem);
});

app.listen(PORT, () => {
    console.log(`[IDS339-JS] Server running on http://localhost:${PORT}`);
});

module.exports = app;
