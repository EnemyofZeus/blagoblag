var React = require('react');
var Link = require('react-router').Link;

var NavBar = React.createClass({


  render: function(){
    return (
      <div>

      <nav className="navbar">
        <div className="home">
          <Link to='/'>
            <button className= "navBtn"> Home </button>
          </Link>
        </div>
        <div className="aboutMe">
          <Link to='/about'>
            <button className= "navBtn">About</button>
          </Link>
        </div>
      </nav>
      <div className='spacer'>

      </div>
    </div>
    )
  }
});

module.exports = NavBar;
