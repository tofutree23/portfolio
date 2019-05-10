import React, { Component } from 'react';
import 'scss/Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2 className="hello">Hello, I'm Jonghyung.</h2>
        <p className="desc">I wanna be a front-end-web-developer.</p>
        <p className="desc">
          If you want to know me more, please click the button below.
        </p>
        <div className="details">
          <button className="detailBtn">Wanna know me?</button>
        </div>
      </div>
    );
  }
}

export default Home;
