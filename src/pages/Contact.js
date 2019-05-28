import React, { Component } from 'react';
import Mailing from 'components/Mailing';
import 'scss/Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className="contact-page" style={{ overflowX: 'hidden' }}>
        <div className="bout">
          <h2 className="about">Contact</h2>
        </div>
        <div className="rows">
          <Mailing />
        </div>
      </div>
    );
  }
}

export default Contact;
