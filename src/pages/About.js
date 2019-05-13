import React, { Component } from 'react';
import 'scss/About.scss';

class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <h2 className="about">About me</h2>

        <div className="pros">
          <i className="fas fa-tachometer-alt" id="fast" />
          <i className="fas fa-sync-alt" id="responsibility" />
          <i className="far fa-comments" id="communicate" />
          <i className="far fa-lightbulb" id="creative" />
        </div>
        <div className="skills">
          <i className="fab fa-html5" />
          <i className="fab fa-css3" />
          <i className="fab fa-js-square" />
          <i className="fab fa-react" />
          <i className="fab fa-aws" />
          <i className="fab fa-node" />
          <i className="fab fa-adobe" />
        </div>
      </div>
    );
  }
}

export default About;
