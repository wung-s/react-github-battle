import React, { Component } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends  Component {
  constructor() {
    super();
    this.state = {
        username: ''
    }
  }
  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmitUser(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    console.log(this);
    const { playerOne } = this.props.routeParams;
    if(playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push(`/playerTwo/${username}`);
    }
  }

  render() {
    console.log(this);
    return (
      <Prompt
        onSubmitUser = {(event) => this.handleSubmitUser(event)}
        onUpdateUser = {(event) => this.handleUpdateUser(event)}
        header = {this.props.route.header}
        username = {this.state.username}
      />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PromptContainer;