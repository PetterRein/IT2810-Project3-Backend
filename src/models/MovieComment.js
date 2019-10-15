import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieCommentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  movieid: Schema.Types.ObjectId,
  comment: String,
})

export default mongoose.model('MovieComment', MovieCommentSchema);