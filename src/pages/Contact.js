import React, { Component } from 'react';
import Mailing from 'components/Mailing';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>If you wanna hire me, plz contact here</h2>
        <Mailing />
      </div>
    );
  }
}

export default Contact;
