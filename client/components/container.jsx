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
    this.toggleLike = this.toggleLike.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
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

  changeIndex(num) {
    let index = num + this.state.carouselIndex;
    this.setState({
      carouselIndex: index
    });
  }


  render() {
    return (
      <StyleGlobal>
        <h1>{this.state.carouselIndex}</h1>
        <h1>Similar Homes You May Like</h1>
        <Carousel homes={this.state.homes} like={this.toggleLike} move={this.changeIndex} index={this.state.carouselIndex}/>
      </StyleGlobal>
    );
  }
}

export default Container;
