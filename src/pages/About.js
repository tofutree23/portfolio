import React, { Component } from 'react';
import 'scss/About.scss';

class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <div>
          <h2 className="about">About me</h2>
        </div>
        <div className="pros">
          <div className="pro-content">
            <i className="fas fa-tachometer-alt" id="fast" />
            <p className="title">Fast</p>
            <p className="desc">
              Lorem Culpa ea commodo anim culpa et quis esse consequat nostrud.
              In aliquip aliqua adipisicing reprehenderit sunt reprehenderit qui
              non id anim magna ex. Tempor labore ea sit proident dolore aliquip
              in nostrud reprehenderit labore aute ullamco. Do elit cillum
              aliquip laboris nulla.
            </p>
          </div>
          <div className="pro-content">
            <i className="fas fa-sync-alt" id="responsibility" />
            <p className="title">Responsive</p>
            <p className="desc">
              Duis ullamco est dolore cillum irure nulla ex. Duis pariatur
              laborum labore culpa consequat ea. Lorem cillum eiusmod duis culpa
              proident culpa eiusmod dolor amet proident sit enim et.
            </p>
          </div>
          <div className="pro-content">
            <i className="far fa-comments" id="communicate" />
            <p className="title">Communicative</p>
            <p className="desc">
              Mollit ullamco cupidatat eu pariatur dolor. In deserunt qui labore
              quis sint quis esse commodo officia. Reprehenderit magna ipsum
              pariatur officia. Cupidatat ex nisi excepteur sint enim dolore
              enim velit sint ut do qui.
            </p>
          </div>
          <div className="pro-content">
            <i className="far fa-lightbulb" id="creative" />
            <p className="title">Creative</p>
            <p className="desc">
              Amet consequat dolor tempor ea. Amet adipisicing elit consequat et
              qui. Exercitation do non amet fugiat excepteur consequat id mollit
              id cupidatat est sint. Excepteur consequat et irure proident
              consequat aute voluptate enim est magna. Fugiat sunt minim ullamco
              ut velit ut sunt eiusmod proident anim magna excepteur.
            </p>
          </div>
        </div>
        <div className="skills">
          <i className="fab fa-html5" />
          <div className="bar">
            <hr className="base-bar" />
            <hr className="percent-bar html" />
          </div>
          <i className="fab fa-css3" />
          <div className="bar">
            <hr className="base-bar" />
            <hr className="percent-bar css" />
          </div>
          <i className="fab fa-js-square" />
          <div className="bar">
            <hr className="base-bar" />
            <hr className="percent-bar js" />
          </div>
          <i className="fab fa-react" />
          <div>
            <hr className="base-bar" />
            <hr className="percent-bar react" />
          </div>
          <i className="fab fa-aws" />
          <div>
            <hr className="base-bar" />
            <hr className="percent-bar aws" />
          </div>
          <i className="fab fa-node" />
          <div>
            <hr className="base-bar" />
            <hr className="percent-bar node" />
          </div>
          <img
            className="fab fa-ps"
            src="https://img.icons8.com/metro/52/000000/adobe-photoshop.png"
          />
          <div>
            <hr className="base-bar" />
            <hr className="percent-bar" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
