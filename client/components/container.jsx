/* eslint-disable */
import React from 'react';
import Carousel from './carousel.jsx';
import axios from 'axios';
import styled from 'styled-components';

const StyleGlobal = styled.div`
  font-family: 'Cabin', Roboto, Arial, sans-serif;
  letter-spacing: -0.1px;
  color: rgb( 59, 65 , 68);
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
      similar: [],
      similarIndex: 0,
      newHomes: [],
      newIndex:0,
      location: 'San Francisco',
      scroll: false
    };
    this.getSimilarHomes = this.getSimilarHomes.bind(this);
    this.getNewHomes = this.getNewHomes.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
    this._timeout = null;
    this.handleScrolling = this.handleScrolling.bind(this);

  }

  componentDidMount() {
    this.getSimilarHomes();
    this.getNewHomes();
  }

  getSimilarHomes() {
    axios.get('/api/similar')
      .then( (results) => {
        let values = results.data;
        this.setState({
          similar: values
        });
      })
      .catch( (err) => {
        console.log('getSimilarHomes ', err);
      });
  }

  getNewHomes() {
    axios.get('/api/new')
      .then( (results) => {
        let values = results.data;
        this.setState({
          newHomes: values
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
        this.getNewHomes();
      })
      .catch( (err) => {
        console.log('could not like home ', err)
      });
  }

  changeIndex(num, carousel) {
    console.log(this.state.similarIndex);
    if (carousel === "similar") {
      let index = this.state.similarIndex + num;

      this.setState({
        similarIndex: index
      });
    } else {
      let index = this.state.newIndex + num;
      this.setState({
        newIndex: index
      });
    }
  }

  handleScrolling() {
    if(this._timeout){ //if there is already a timeout in process cancel it
      clearTimeout(this._timeout);
     }
     this._timeout = setTimeout(() => {
       this._timeout = null;
       this.setState({
         scroll: false
       });
     },1000);
     if(!this.state.scrollStatus) {
       this.setState({
         scroll: true
       });
     }
  }

  render() {
    let {similar, similarIndex, newHomes, newIndex, location,scroll} = this.state;
    return (
      <StyleGlobal>
        <h1>{this.state.carouselIndex}</h1>
        <h1>Similar Homes You May Like</h1>
        <Carousel homes={similar} like={this.toggleLike} move={this.changeIndex} index={similarIndex} loc={location} scrolling={this.handleScrolling} scroll={scroll} id="similar"/>
        <h1>New Listings Nearby</h1>
        <Carousel homes={newHomes} like={this.toggleLike} move={this.changeIndex} index={newIndex} loc={location}  scrolling={this.handleScrolling} scroll={scroll} id="newHomes"/>
      </StyleGlobal>
    );
  }
}

export default Container;
