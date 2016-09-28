import React, { Component } from 'react';
import Results from '../components/Results';
import { battle } from '../utils/githubHelpers';

class ResultsContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      scores: []
    }
  }
  async componentDidMount() {
    console.log('ResultsContainer');
    console.log(this.props.location.state.playersInfo);
    try {
       const scores = await battle(this.props.location.state.playersInfo);
       this.setState({
          scores: scores,
          isLoading: false
        })
    } catch(error) {
      console.log('Error in ResultsContainer', error);
    }
  }
  render() {
    return (
      <Results
        isLoading = {this.state.isLoading}
        scores = {this.state.scores}
        playersInfo = {this.props.location.state.playersInfo}
      />
    )
  }
}

export default ResultsContainer;