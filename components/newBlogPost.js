var React = require('react');

var NewBlogPost = React.createClass({
  getInitialState: function(){
    return{
      title:'',
      slug:'',
      description:'',
      body:''
    }
  },
  titleChange: function(e){
    this.setState({title:e.target.value})
  },
  slugChange: function(e){
    this.setState({slug:e.target.value})
  },
  descriptionChange: function(e){
    this.setState({description:e.target.value})
  },
  bodyChange: function(e){
    this.setState({body:e.target.value})
  },
  makePost:function(e){
    e.preventDefault();

    var post = {};
    post.title=this.state.title;
    post.slug=this.state.slug;
    post.description=this.state.description;
    post.author={name:"Kyle"};
    post.body=this.state.body;
    console.log(post);
    this.submitPost(post);
  },
  submitPost: function(post){
    $.ajax({
      url:'/blog',
      method:'POST',
      data: post,
      success: function(){
        console.log('The blog has been updated');
      }
    })
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.makePost}>
          Title:  <input type="text" onChange={this.titleChange}   value={this.state.title} className="blogTitle"/>
          Slug:  <input type="text" onChange={this.slugChange} value={this.state.slug} className="blogSlug"/>
          Desc:  <input type="text" onChange={this.descriptionChange} value={this.state.description} className="blogDescription"/><br/>
          <textarea rows='10' cols='40' onChange={this.bodyChange } value={this.state.body} className="blogBody"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = NewBlogPost;
