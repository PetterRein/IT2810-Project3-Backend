#!/usr/bin/env node
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import expressGraphQL from 'express-graphql';
import schema from './schema'
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))

mongoose.connect("mongodb://localhost:27017/project3", {
  useNewUrlParser: true
});

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`server running on port ${port}`));
module.exports = app