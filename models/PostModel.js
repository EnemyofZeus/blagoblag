var mongoose = require('mongoose');
var Author = require('./AuthorModel.js');
var postSchema = new mongoose.Schema({
  title: {type:String, required: true},
  slug: {type:String, required: true},
  description: {type: String, required: true},
  author: Author,
  body: {type: String, required: true},
  time: {type: Date, default:Date.now}
});

module.exports = mongoose.model('Post', postSchema);
