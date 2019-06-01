import React, { Component } from 'react';
import 'scss/About.scss';

const scrollEvent = () => {
  if (window.scrollY > 700) {
    document.getElementsByClassName('html')[0].style.width = '33vw';
    document.getElementsByClassName('css')[0].style.width = '30vw';
    document.getElementsByClassName('js')[0].style.width = '28vw';
    document.getElementsByClassName('php')[0].style.width = '33vw';
    document.getElementsByClassName('react')[0].style.width = '18vw';
    document.getElementsByClassName('aws')[0].style.width = '19vw';
    document.getElementsByClassName('node')[0].style.width = '15vw';
    document.getElementsByClassName('photoshop')[0].style.width = '32vw';
    document.getElementsByClassName('firebase')[0].style.width = '20vw';
  } else {
    document.getElementsByClassName('html')[0].style.width = '0';
    document.getElementsByClassName('css')[0].style.width = '0';
    document.getElementsByClassName('js')[0].style.width = '0';
    document.getElementsByClassName('php')[0].style.width = '0';
    document.getElementsByClassName('react')[0].style.width = '0';
    document.getElementsByClassName('aws')[0].style.width = '0';
    document.getElementsByClassName('node')[0].style.width = '0';
    document.getElementsByClassName('photoshop')[0].style.width = '0';
    document.getElementsByClassName('firebase')[0].style.width = '0';
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
              하루가 멀다하고 새로운 기술이 쏟아져나오는 프론트엔드 개발
              분야에서, 빠른 습득력은 꼭 필요한 덕목이죠. 하지만 빠름이 단순히
              속도만을 의미하는 것은 아닐겁니다. 속도만을 중시해서 대충 배우는
              건 안하느니만 못하죠. 전 중요한 부분과 상대적으로 덜 중요한 부분을
              나누어서 학습할 수 있는 능력이 있다고 생각합니다. 저는 불과 반년
              전까지만 해도 프로그래밍의 P자도 몰랐던 생초보였거든요. 놀랍게도
              지금까지의 학습은, 맨 처음 2개월을 제외하면 모두 독학으로
              이루어졌답니다.
            </p>
          </div>
          <div className="pro-content">
            <i className="far fa-lightbulb" id="creative" />
            <p className="title">Creative</p>
            <p className="desc">
              저는 프로그래밍을 하기 전, 광고 기획사에서 일을 한 적이 있습니다.
              그곳에서 주로 담당한 업무는 광고를 기획하고, 카피를 쓰는
              일이었는데요, 이런 창의력이 UI/UX를 개발하는 데에 있어서도 충분히
              발휘될 수 있으리라고 믿습니다. 중요한 건, 저는 이러한 쪽으로
              머리를 쓰는 걸 매우 즐긴답니다 :)
            </p>
          </div>
          <div className="pro-content">
            <i className="far fa-comments" id="communicate" />
            <p className="title">Communicative</p>
            <p className="desc">
              지난 직장에서 맡았던 AE라는 직무는 고객과 직접적으로
              커뮤니케이션을 하는 직무입니다. 당연히 실무진과 고객과의
              이해관계를 조율해야하는 일이 비일비재했죠. 고객의 요구를 어느 정도
              수용하면서도 실무진이 불편하지 않도록 균형을 잡는 건 쉬운 일이
              아닙니다. 개발과정에서 기획자와 디자이너, 개발자의 의견충돌은
              불가피한 일일겁니다. 그중에서 특히 개발자는 불통이라는 이미지가
              있는 것 같아요. 저는 저의 경험을 살려, 타 직무와도 소통하는
              개발자가 될 수 있을 것 같습니다.
            </p>
          </div>
          <div className="pro-content">
            <i className="fas fa-sync-alt" id="responsibility" />
            <p className="title">Responsive</p>
            <p className="desc">
              업무를 하다보면 뜻밖의 상황이 언제나 생깁니다. 그건 막으려야 막을
              수도 없고 피하려야 피할 수도 없는 경우가 다반사죠. 뜻밖의 상황에서
              능동적으로 대처할 줄 안다는 것은 중요해요. 콜센터에서 알바를 하던
              대학 시절이 있었습니다. 콜센터만큼 돌발상황이 자주, 또 격하게
              발생하는 직종도 잘 없어요. 그리고 그런 대부분의 경우에서 상담사는
              기민하게 상황을 판단하고 능동적으로 대응해야하죠. 그리고 저는
              대부분의 경우에 유연한 대응으로 상황을 가급적 좋은 쪽으로 이끌어
              냈습니다.
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
            <i className="fab fa-php" />
            <span className="bar-name">PHP</span>
          </div>
          <div className="bar">
            <section className="base-bar" />
            <section className="percent-bar php" />
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
            <img
              style={{
                filter: 'grayscale(100%) brightness(15%)',
              }}
              className="fab fa-firebase"
              src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png?hl=ko"
              alt="firebase"
            />
            <span className="bar-name">Firebase</span>
          </div>
          <div className="bar">
            <section className="base-bar" />
            <section className="percent-bar firebase" />
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
