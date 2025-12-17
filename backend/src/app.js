import  env  from './config/env.js'
import express from 'express';
import path from 'path';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";

import { inngest, functions } from './config/inngest.js';

const app = express();

app.use(express.json());

const __dirname = path.resolve();

app.use(express.json());
app.use(clerkMiddleware()); // req.auth add auth object to request

app.use('/api/inngest', serve({client: inngest, functions}));

app.use('/api/v1', (req, res) => {
  res.json({ message: 'API is working' });
});


// make our app ready for a production deployment
if (env.environment === 'production') {
  app.use(express.static(path.join(__dirname, '../admin/dist')));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../admin/dist/index.html'));
  });

}


export default app;