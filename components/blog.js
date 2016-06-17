var React = require('react');
var NewBlogPost = require('./newBlogPost.js');

var Blog = React.createClass({
  getInitialState: function(){
    return {showForm: false}
  },
  newPost: function(){
    if(this.state.showForm){
      this.setState({showForm:false});
    } else{
      this.setState({showForm:true});
    }
  },
  render: function(){
    return(
      <div>
        <h1>Here is where the actual blogging will occur.</h1>
        <h2 onClick={this.newPost}>Because seriously, why would I put this on the front page</h2>
        {this.state.showForm ? <NewBlogPost /> : null}
      </div>
    )
  }
});

module.exports = Blog;
