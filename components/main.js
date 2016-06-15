var React = require('react');
var Link = require('react-router').Link;

var NavMenu = require('./navMenu.js');
//var Drawer = require('./drawer.js');
var Main = React.createClass({
  render: function(){
    return (
      <div>
        <NavMenu />
        {this.props.children}

      </div>
    )
  }
});

module.exports = Main;
