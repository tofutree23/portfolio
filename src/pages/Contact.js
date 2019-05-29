import React, { Component } from 'react';
import Mailing from 'components/Mailing';
import DashBoard from 'components/DashBoard';
import 'scss/Contact.scss';

class Contact extends Component {
  componentDidMount = () => {
    const email = document.getElementById('sendMail');
    const board = document.getElementById('board');
    const mailing = document.getElementsByClassName('mailing');
    const dashBoard = document.getElementsByClassName('dashBoard');

    email.addEventListener('click', () => {
      mailing[0].style.display = 'flex';
      dashBoard[0].style.display = 'none';
    });

    board.addEventListener('click', () => {
      mailing[0].style.display = 'none';
      dashBoard[0].style.display = 'block';
    });
  };
  render() {
    return (
      <div className="contact-page" style={{ overflowX: 'hidden' }}>
        <div className="bout">
          <h2 className="contact">Contact</h2>
        </div>
        <div className="selection">
          <button className="ct-btn" id="board">
            <img
              src="https://img.icons8.com/ios/50/000000/billboard-filled.png"
              alt="board"
            />
          </button>
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
        </div>
        <div className="rows">
          <DashBoard />
          <Mailing />
        </div>
      </div>
    );
  }
}

export default Contact;
