import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const HelloWorldScehma = new Schema({
  value: String,
})

export default mongoose.model('HelloWorld', HelloWorldScehma)