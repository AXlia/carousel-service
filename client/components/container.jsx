import React from 'react';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      homes: [],
      newHomes: []
    };
  }

  render() {
    return (
      <div>
        <h1>The two carousels will go here</h1>
        <p>The second carousel is for homes with only the new tage </p>
      </div>
    );
  }
}

export default Container;
