// var React = require('react');
// var ReactDOM = require('react-dom');

// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <div> Hello World </div>
//     )
//   }
// });

// ReactDOM.render(
//   <HelloWorld />,
//   document.getElementById('app')
// );

var USER_DATA = {
  name: 'Wung S',
  username: 'wung-s',
  image: 'https://avatars1.githubusercontent.com/u/5159585?v=3&s=466'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));