import React, { Component } from 'react';
import Mailing from 'components/Mailing';
import 'scss/Contact.scss';

class Contact extends Component {
  componentDidMount = () => {};
  render() {
    return (
      <div className="contact-page" style={{ overflowX: 'hidden' }}>
        <div className="bout">
          <h2 className="contact">Contact</h2>
        </div>
        <div className="selection">
          <button className="ct-btn" id="sendMail">
            <img
              src="https://img.icons8.com/material/48/000000/email.png"
              alt="email"
            />
          </button>
          <button className="ct-btn" id="board">
            <img
              src="https://img.icons8.com/ios/50/000000/billboard-filled.png"
              alt="board"
            />
          </button>
          <button className="ct-btn" id="github">
            <img
              src="https://img.icons8.com/windows/64/000000/github.png"
              alt="github"
            />
          </button>
        </div>
        <div className="rows">
          <Mailing />
        </div>
      </div>
    );
  }
}

export default Contact;
