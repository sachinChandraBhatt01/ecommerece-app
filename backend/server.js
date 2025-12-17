import express from 'express';
import app from './src/app.js';
import env from './src/config/env.js';
import connectDb from "./src/db/db.js";

const PORT = env.port;

// connectDb().then(app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// }))

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
});