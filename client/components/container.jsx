/* eslint-disable */
import React from 'react';
import Carousel from './carousel.jsx';
import axios from 'axios';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      homes: []
    };
    this.getSimilarHomes = this.getSimilarHomes.bind(this);
  }

  componentDidMount() {
    this.getSimilarHomes();
  }

  getSimilarHomes() {
    axios.get('/api/similar')
      .then( (results) => {
        let values = results.data;
        this.setState({
          homes: values
        });
      })
      .catch( (err) => {
        console.log('getSimilarHomes ', err);
      });
  }

  render() {
    return (
      <div>
        <h1>The two carousels will go here</h1>
        <Carousel homes={this.state.homes} />
      </div>
    );
  }
}

export default Container;
