/* eslint-disable */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from './carousel.jsx';
import ErrorModal from './errorModal.jsx';
import LikeModal from './likeModal.jsx';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    height:100%;
    overflow:auto;
  }
`;

const StyleGlobal = styled.div`
  font-family: 'Cabin', Roboto, Arial, sans-serif;
  letter-spacing: -0.1px;
  color: rgb( 59, 65 , 68),
  width: 100%;
`;

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      similar: [],
      similarIndex: 0,
      newHomes: [],
      newIndex: 0,
      location: 'San Francisco',
      scroll: false,
      showError: false,
      showLike: false,
      likeLists: [{title: "Axolotl's first homes", color:"rgb(242, 196, 48)"}, {title: "Investment Properties", color: "rgb(5, 34, 134)"}, {title: "Dream Houses", color: "rgb(250, 140, 104)"}]
    };
    this.getSimilarHomes = this.getSimilarHomes.bind(this);
    this.getNewHomes = this.getNewHomes.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
    this._timeout = null;
    this.handleScrolling = this.handleScrolling.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleLikeModal = this.toggleLikeModal.bind(this);
  }

  componentDidMount() {
    this.getSimilarHomes();
    this.getNewHomes();
  }

  handleScrolling() {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    this._timeout = setTimeout(() => {
      this._timeout = null;
      this.setState({
        scroll: false,
      });
    }, 1000);
    if (!this.state.scrollStatus) {
      this.setState({
        scroll: true,
      });
    }
  }

  getSimilarHomes() {
    //api/similar?id=num between 5
    axios.get('/api/similar')
      .then((results) => {
        const values = results.data;
        this.setState({
          similar: values,
        });
      })
      .catch((err) => {
        console.log('getSimilarHomes ', err);
      });
  }

  getNewHomes() {
    axios.get('/api/new')
      .then((results) => {
        const values = results.data;
        this.setState({
          newHomes: values,
        });
      })
      .catch((err) => {
        console.log('getSimilarHomes ', err);
      });
  }

  toggleLike(id, bool) {
    axios.patch(`/api/homes?id=${id}`)
      .then(() => {
        this.getSimilarHomes();
        this.getNewHomes();
        if (!bool) {
          this.toggleLikeModal();
        }
      })
      .catch((err) => {
        console.log('could not like home ', err);
      });
  }

  changeIndex(num, carousel) {
    console.log(this.state.similarIndex);
    if (carousel === 'similar') {
      const index = this.state.similarIndex + num;

      this.setState({
        similarIndex: index,
      });
    } else {
      const index = this.state.newIndex + num;
      this.setState({
        newIndex: index,
      });
    }
  }

  toggleModal() {
    this.setState({
      showError: !this.state.showError,
    });
  }

  toggleLikeModal() {
    this.setState({
      showLike: !this.state.showLike,
    });
  }

  render() {
    const {
      similar, similarIndex, newHomes, newIndex, location, scroll, showError, showLike, likeLists
    } = this.state;
    return (
      <StyleGlobal>
        <GlobalStyle/>
        {showError ? <ErrorModal toggle={this.toggleModal} /> : ''}
        {showLike ? <LikeModal toggle={this.toggleLikeModal} lists={likeLists}/> : ''}
        <h1>Similar Homes You May Like</h1>
        <Carousel homes={similar} like={this.toggleLike} move={this.changeIndex} index={similarIndex} loc={location} scrolling={this.handleScrolling} scroll={scroll} id="similar" modal={this.toggleModal} />

        <h1>New Listings Nearby</h1>
        <Carousel homes={newHomes} like={this.toggleLike} move={this.changeIndex} index={newIndex} loc={location} scrolling={this.handleScrolling} scroll={scroll} modal={this.toggleModal} id="newHomes" />

      </StyleGlobal>
    );
  }
}

export default Container;
