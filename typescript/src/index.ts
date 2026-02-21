import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
    res.json({
        status: 'ok',
        service: 'IDS339-DevOps-TypeScript',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development',
    });
});

// Greet endpoint
app.get('/api/greet/:name', (req: Request, res: Response) => {
    const { name } = req.params;
    res.json({
        message: `Hello, ${name}! Welcome to IDS339 DevOps.`,
        timestamp: new Date().toISOString(),
    });
});

// Items CRUD dummy
const items: { id: number; name: string }[] = [
    { id: 1, name: 'Item Alpha' },
    { id: 2, name: 'Item Beta' },
];

app.get('/api/items', (_req: Request, res: Response) => {
    res.json({ data: items, count: items.length });
});

app.post('/api/items', (req: Request, res: Response) => {
    const { name } = req.body as { name: string };
    if (!name) {
        return res.status(400).json({ error: 'name is required' });
    }
    const newItem = { id: items.length + 1, name };
    items.push(newItem);
    return res.status(201).json(newItem);
});

app.listen(PORT, () => {
    console.log(`[IDS339-TS] Server running on http://localhost:${PORT}`);
});

export default app;
