import express from 'express';
import app from './src/app.js';
import env from './src/config/env.js';

const PORT = env.port;


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
} );