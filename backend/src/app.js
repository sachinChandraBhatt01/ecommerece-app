import express from 'express';

const app = express();

app.use(express.json());

app.use('/api/v1', (req, res) => {
  res.json({ message: 'API is working' });
});

export default app;