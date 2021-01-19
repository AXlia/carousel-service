/* eslint-disable */
import React from 'react';
import Carousel from './carousel.jsx';
import axios from 'axios';
import styled from 'styled-components';

const StyleGlobal = styled.div`
  font-family: 'Cabin', Roboto, Arial, sans-serif;
  letter-spacing: -0.1px;
  color: rgb( 59, 65 , 68);
  border: 5px solid yellow;
`

const BoldText = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
`

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      homes: [],
      carouselIndex: 0
    };
    this.getSimilarHomes = this.getSimilarHomes.bind(this);
    this.moveSlides = this.moveSlides.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
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

  toggleLike(id) {
    axios.patch(`/api/homes?id=${id}`)
      .then( () => {
        this.getSimilarHomes();
      })
      .catch( (err) => {
        console.log('could not like home ', err)
      });
  }

  moveSlides(index) {
    this.setState({
      carouselIndex: index
    })
  }

  moveForward() {
    let index = this.state.carouselIndex;
    let len = this.state.homes.length - 1;

    if (index === len) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  moveBackward() {
    let index = this.state.carouselIndex;
    let len = this.state.homes.length;

    if (index < 1) {
      index = len;
    }

    --index;

    this.setState({
      carouselIndex: index
    });
  }

  render() {
    return (
      <StyleGlobal>
        <h1>Similar Homes You May Like</h1>
        <Carousel homes={this.state.homes} />
      </StyleGlobal>
    );
  }
}

export default Container;
