var PostModel = require("./../models/PostModel.js");

module.exports = {
  create: function(req, res, next){
    var post = new PostModel(req.body);
    post.save(function(err, result){
      if(err){
        res.send(err);
      } else {
          res.send(result);
      }
    });
  },
  read: function(req,res,next){
    PostModel
    .find()
    .exec(function(err,result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readById: function(req, res, next){
    PostModel.
    findById(req.params.id)
    .exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function(req, res, next){
    PostModel.
    findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  delete:function(req, res, next){
    PostModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    })
  }
};
