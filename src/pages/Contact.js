import React, { Component } from 'react';
import Mailing from 'components/Mailing';

class Contact extends Component {
  render() {
    return (
      <div className="contact-page">
        <div className="bout">
          <h2 className="about">Contact</h2>
        </div>
        <Mailing />
      </div>
    );
  }
}

export default Contact;
