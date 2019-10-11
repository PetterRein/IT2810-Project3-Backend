#!/usr/bin/env node
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`server running on port ${port}`));
module.exports = app