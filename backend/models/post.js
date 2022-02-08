const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, requied: true },
  content: { type: String, requied: true },
});

module.exports = mongoose.model("Post", postSchema);
