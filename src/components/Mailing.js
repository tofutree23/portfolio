import React, { Component } from 'react';
import 'scss/Mailing.scss';
import axios from 'axios';

class Mailing extends Component {
  render() {
    return (
      <div className="mailing">
        <form
          id="mailForm"
          method="POST"
          action="https://formspree.io/tofutree23@gmail.com"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required />
          <div className="button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Mailing;
