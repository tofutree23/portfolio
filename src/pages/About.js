import React, { Component } from 'react';
import 'scss/About.scss';

class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <h2 className="about">About me</h2>

        <div className="pros">
          <i class="fas fa-tachometer-alt" id="fast" />
          <i class="fas fa-sync-alt" id="responsibility" />
          <i class="far fa-comments" id="communicate" />
          <i class="far fa-lightbulb" id="creative" />
        </div>
        <div className="skills">
          <i class="fab fa-html5" />
          <i class="fab fa-css3" />
          <i class="fab fa-js-square" />
          <i class="fab fa-react" />
          <i class="fab fa-aws" />
          <i class="fab fa-node" />
        </div>
      </div>
    );
  }
}

export default About;
