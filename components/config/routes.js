var React = require('react'),
    ReactDom = require('react-dom'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    Router = ReactRouter.Router,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;

var Main = require('./../main.js'),
    Home = require('./../home.js'),
    About = require('./../about.js'),
    Contact = require('./../contact.js'),
    Projects = require('./../projects.js');

ReactDom.render(
  <Router history = {hashHistory}>
    <Route path = '/' component={Main}>
      <IndexRoute component={Home} />
      <Route path = '/about' component={About} />
      <Route path = '/contact' component={Contact} />
      <Route path = '/projects' component={Projects} />

    </Route>
  </Router>,
  document.getElementById('app')
);
