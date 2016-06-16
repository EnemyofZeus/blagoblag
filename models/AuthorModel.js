var mongoose = require('mongoose');

var authorSchema = new mongoose.Schema ({
  name:{type:String, required:true},
  image: {type:String}
});

module.exports = ('Author', authorSchema );
