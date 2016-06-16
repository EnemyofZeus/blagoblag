var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var blogControl = require('./controllers/blogControl.js');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname+'/views'));

app.post('/blog', blogControl.create);
app.get('/blog', blogControl.read);
app.get('/blog/:id', blogControl.readById);
app.put('/blog/:id', blogControl.update);
app.delete('/blog/:id', blogControl.delete);



if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));

} else {
  //If not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  var watcher = chokidar.watch('./server');
  watcher.on('ready', function(){
    watcher.on('all', function(){
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id){
        if(/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}

mongoose.connect("mongodb://localhost:27017blagoblag");
mongoose.connection.once('open', function(){
  console.log('Connected to your database.');
});

app.listen(9090, function(){
  console.log("The blagoblag is hot on 9090");
});
