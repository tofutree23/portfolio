import React, { Component } from 'react';
import 'scss/Mailing.scss';
class Mailing extends Component {
  render() {
    return (
      <div>
        <form action="https://formspree.io/tofutree23@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your email" />
          <textarea name="message" placeholder="Your message" />
          <div class="button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Mailing;
