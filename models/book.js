const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {type: String},
  image: {type: [String] },
  link: {type: String, required: true},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Book;