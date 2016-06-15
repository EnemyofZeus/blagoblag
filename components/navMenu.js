var React = require('react');
var Link = require('react-router').Link;

var NavBar = React.createClass({


  render: function(){
    return (
      <div>

      <nav className="navbar">
        <div className="navLeft">
          <Link to='/'>
            <button className= "navBtn"> Home </button>
          </Link>
          <Link to='/blog'>
            <button className="navBtn">Blog</button>
          </Link>
        </div>
        <div className="navRight">
          <Link to='/about'>
            <button className= "navBtn">About</button>
          </Link>
          <Link to='/projects'>
            <button className="navBtn">Projects</button>
          </Link>
          <Link to='/contact'>
            <button className="navBtn">Contact</button>
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
