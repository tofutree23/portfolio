import React, { Component } from 'react';
import 'scss/About.scss';

class About extends Component {
  render() {
    return (
      <div>
        <h2 className="about">About me</h2>

        <div className="pros">
          <i class="fas fa-tachometer-alt" id="fast" />
          <i class="fas fa-sync-alt" id="responsibility" />
          <i class="far fa-comments" id="communicate" />
          <i class="far fa-lightbulb" id="creative" />
        </div>
      </div>
    );
  }
}

export default About;
