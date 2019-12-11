import React, { Component } from 'react';
import Mailing from 'components/Mailing';
import 'scss/Contact.scss';

class Contact extends Component {
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
          <button className="ct-btn" id="github">
            <a
              href="https://github.com/tofutree23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/windows/64/000000/github.png"
                alt="github"
              />
            </a>
          </button>
          <button className="ct-btn" id="blog">
            <a
              href="https://tofudev.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/50/000000/blogger-filled.png"
                alt="blogger"
              />
            </a>
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
