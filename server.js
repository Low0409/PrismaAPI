const { PrismaClient } = require('@prisma/client');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
const prisma = new PrismaClient();

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.get('/', async (req, res) => {
    const posts = await prisma.posts.findMany();
    res.json(posts);
});

app.get('/posts/:id', async (req, res) => {
    const post = await prisma.posts.findUnique({
        where: {
            id: Number(req.params.id),
        },
    });
    res.json(post);
});

app.post('/posts', async (req, res) => {
    const { title, body } = req.body;
    const posts = await prisma.posts.create({
        data: {
            title,
            body,
        },
    });
    return res.json(posts);
});

app.put('/posts/:id', async (req, res) => {
    const id = Number(req.params.id);
    const { title, body } = req.body;
    const post = await prisma.posts.update({
        where: {
            id: Number(id),
        },
        data: {
            body,
            title,
        },
    });
    return res.json(post);
});

app.delete('/posts/:id', async (req, res) => {
    const id = Number(req.params.id);
    const post = await prisma.posts.delete({
        where: {
            id: Number(id),
        },
    });
    return res.json(post);
});
