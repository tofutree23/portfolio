import React, { Component } from 'react';
import 'scss/About.scss';

const scrollEvent = () => {
  if (window.scrollY > 700) {
    document.getElementsByClassName('html')[0].style.width = '33vw';
    document.getElementsByClassName('css')[0].style.width = '30vw';
    document.getElementsByClassName('js')[0].style.width = '28vw';
    document.getElementsByClassName('react')[0].style.width = '18vw';
    document.getElementsByClassName('aws')[0].style.width = '19vw';
    document.getElementsByClassName('node')[0].style.width = '15vw';
    document.getElementsByClassName('photoshop')[0].style.width = '32vw';
  } else {
    document.getElementsByClassName('html')[0].style.width = '0';
    document.getElementsByClassName('css')[0].style.width = '0';
    document.getElementsByClassName('js')[0].style.width = '0';
    document.getElementsByClassName('react')[0].style.width = '0';
    document.getElementsByClassName('aws')[0].style.width = '0';
    document.getElementsByClassName('node')[0].style.width = '0';
    document.getElementsByClassName('photoshop')[0].style.width = '0';
  }
};

class About extends Component {
  componentDidMount = () => {
    window.addEventListener('scroll', scrollEvent);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', scrollEvent);
  };

  render() {
    return (
      <div className="aboutPage">
        <div className="bout">
          <h2 className="about">About me</h2>
        </div>
        <div className="pros">
          <div className="pro-content">
            <i className="fas fa-tachometer-alt" id="fast" />
            <p className="title">Fast</p>
            <p className="desc">
              처음 코딩을 시작한 것이 작년 10월입니다. Java를 통해서
              프로그래밍의 가장 기본적인 반복문과 조건문, 객체와 클래스의 개념을
              잡고 어플 '씀'에서 영감을 받아 바로 안드로이드 서비스를
              개발해보았습니다. 문득 웹서비스란 어떤 것일지 궁금해졌고 LAMP를
              통해 가장 기본적인 서버, 클라이언트 개념을 학습하게 되었습니다.
              웹개발에 큰 매력을 느껴 올해 2월부터 본격적으로 JavaScript를
              공부하기 시작, 지금에 이르렀습니다. 물론 지식의 깊이가 깊지는 않을
              수 있습니다. 하지만 비전공자로서 반년도 채 되지 않는 기간동안
              여기까지 해낼 수 있었다는 점이, 학습능력이 빠르다는 것을 보여주는
              증거라고 생각합니다. 어느 분야보다 빠르게 변화하는 프론트엔드 개발
              분야에서 빠른 습득력만큼 경쟁력있는 장점은 없다고 생각합니다.
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
        <div className="bout">
          <h2 className="stack">Skill Stacks</h2>
        </div>
        <div className="skills">
          <div className="logo">
            <i className="fab fa-html5" />
            <span className="bar-name">HTML</span>
          </div>
          <div className="bar">
            <section className="base-bar" />
            <section className="percent-bar html" />
          </div>
          <div className="logo">
            <i className="fab fa-css3" />
            <span className="bar-name">CSS</span>
          </div>
          <div className="bar">
            <section className="base-bar" />
            <section className="percent-bar css" />
          </div>
          <div className="logo">
            <i className="fab fa-js-square" />
            <span className="bar-name">JavaScript</span>
          </div>
          <div className="bar">
            <section className="base-bar" />
            <section className="percent-bar js" />
          </div>
          <div className="logo">
            <i className="fab fa-react" />
            <span className="bar-name">React</span>
          </div>
          <div className="bar">
            <section className="base-bar" />
            <section className="percent-bar react" />
          </div>
          <div className="logo">
            <i className="fab fa-aws" />
            <span className="bar-name">AWS</span>
          </div>
          <div className="bar">
            <section className="base-bar" />
            <section className="percent-bar aws" />
          </div>
          <div className="logo">
            <i className="fab fa-node" />
            <span className="bar-name">Node.JS</span>
          </div>
          <div className="bar">
            <section className="base-bar" />
            <section className="percent-bar node" />
          </div>
          <div className="logo">
            <img
              style={{ width: '52px' }}
              className="fab fa-ps"
              src="https://img.icons8.com/metro/52/000000/adobe-photoshop.png"
              alt="photoshop"
            />
            <span className="bar-name">Photoshop</span>
          </div>
          <div className="bar">
            <section className="base-bar" />
            <section className="percent-bar photoshop" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
