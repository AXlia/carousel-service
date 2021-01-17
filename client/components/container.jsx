/* eslint-disable */
import React from 'react';
import Carousel from './carousel.jsx';
import axios from 'axios';
import styled from 'styled-components';

const StyleGlobal = styled.div`
  font-family: Roboto, Arial, sans-serif;
  letter-spacing: -0.1px;
  color: rgb( 59, 65 , 68);
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;;
`

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
      <StyleGlobal>
        <h1>The two carousels will go here</h1>
        <Carousel homes={this.state.homes} />
      </StyleGlobal>
    );
  }
}

export default Container;
