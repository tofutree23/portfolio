import React, { Component } from 'react';
import 'scss/About.scss';

class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <div>
          <h2 className="about">About me</h2>
        </div>
        <div className="pros">
          <div className="pros-row">
            <div className="pro-content">
              <i className="fas fa-tachometer-alt" id="fast" />
              <p className="title">Fast</p>
            </div>
            <div className="pro-content">
              <i className="fas fa-sync-alt" id="responsibility" />
              <p className="title">Responsive</p>
            </div>
          </div>
          <div className="pros-row">
            <div className="pro-content">
              <i className="far fa-comments" id="communicate" />
              <p className="title">Communicative</p>
            </div>
            <div className="pro-content">
              <i className="far fa-lightbulb" id="creative" />
              <p className="title">Creative</p>
            </div>
          </div>
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
