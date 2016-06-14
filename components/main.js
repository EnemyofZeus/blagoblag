var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Link to='/'>
          <h2>Home</h2>
        </Link>
        <Link to='about'>
          <h2>About</h2>
        </Link>
        {this.props.children}

      </div>
    )
  }
});

module.exports = Main;
