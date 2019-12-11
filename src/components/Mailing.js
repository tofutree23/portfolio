import React, { Component } from 'react';
import 'scss/Mailing.scss';

class Mailing extends Component {
  render() {
    return (
      <div className="mailing" display="flex">
        <form
          id="mailForm"
          method="POST"
          action="https://formspree.io/tofutree23@gmail.com"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <div className="button">
            <button id="btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Mailing;
