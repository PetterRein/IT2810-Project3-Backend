#!/usr/bin/env node
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import expressGraphQL from 'express-graphql';
import schema from './schema'
import Movie from './models/Movie'
const fs = require('fs');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))

mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb://localhost:27017/project3", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

function loadMovies() {
  const movies = JSON.parse(fs.readFileSync(__dirname + '/movies.json', 'utf8'))['results'];
  movies.forEach(function(movie) {
    //console.log(movie['popularity'])
    const newMovie = new Movie({
      _id: new mongoose.Types.ObjectId(),
      title: movie['title'], 
      popularity: movie['popularity'],
      vote_average: movie['vote_average'],
      poster_path: movie['poster_path'],
      original_language: movie['original_language'],
      genre_ids: movie['genre_ids'],
      release_date: movie['release_date'],
      overview: movie['overview'],
    })
    newMovie.save()
  });
};

//loadMovies()

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`server running on port ${port}`));
module.exports = app