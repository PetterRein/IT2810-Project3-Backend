import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String, 
  popularity: Number,
  vote_average: Number,
  poster_path: String,
  original_language: String,
  genre_ids: Array,
  release_date: String,
  overview: String,
})

export default mongoose.model('Movie', MovieSchema);