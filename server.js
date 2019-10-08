#!/usr/bin/env node
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`server running on port ${port}`));
module.exports = app