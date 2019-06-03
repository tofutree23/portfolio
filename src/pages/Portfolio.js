import React, { Component } from 'react';
import AnalogClock from 'components/AnalogClock';
import 'scss/Portfolio.scss';

const webClick = () => {
  const dagabae = document.querySelector('.dagabae');
  const wetube = document.querySelector('.wetube');
  const closeBtn = document.querySelector('.btn-layerClose');
  const poppop = document.querySelector('.dim-layer');

  const video = document.querySelector('video');

  const openPop = layer => {
    poppop.style.display = 'block';
    const imgSrc = layer.getElementsByTagName('img')[0].src;
    const imgTitle = poppop.getElementsByClassName('contents-title')[0];
    const desc = poppop.getElementsByClassName('contents-desc')[0];

    if (layer.className.indexOf('wetube') !== -1) {
      video.style.display = 'none';
      const imgTag = poppop.getElementsByTagName('img')[0];
      imgTag.style.display = 'block';
      imgTitle.innerHTML = 'Wetube';
      desc.innerHTML = `
      <h1 id="description">Wetube는 NomadCoder의 강의를 들으면서 유튜브의 클론으로 만들어 본 작품입니다.</h1>
      <br/>
      <p id="usedSkill">사용된 기술</p>
      <li id="skills">JavaScript(ES6)</li>
      <li id="skills">Node.js</li>
      <li id="skills">Webpack</li>
      <li id="skills">PUG</li>
      <li id="skills">SASS</li>
      <li id="skills">AWS</li>
      <li id="skills">Babel</li>
      <br/>
      <p id="usedSkill">구현된 기능</p>
      <li id="skills">회원가입</li>
      <li id="skills">로그인(E-mail, Github)</li>
      <li id="skills">영상 업로드</li>
      <li id="skills">영상 재생</li>
      <li id="skills">댓글 달기</li>
      <li id="skills">비디오 검색</li>
      <li id="skills">회원 페이지</li>
      <br/>
      <p id="usedSkill">소스 보기</p>
      <button id="git-button"><a href="https://github.com/tofutree23/wetube" target="_blank"><span><i class="fab fa-github"></i></span>Github</a></button>
      `;
      poppop.getElementsByTagName('img')[0].alt = 'Wetube';
      poppop.getElementsByTagName('img')[0].src = imgSrc;
    } else {
      imgTitle.innerHTML = 'Dagabae';
      video.style.display = 'block';
      video.src =
        'https://wetube-2.s3.ap-northeast-2.amazonaws.com/video/c6c40062ad9829744236aff4b2ae8e55';
      video.controls = 'true';
      video.alt = 'Dagabae';
      desc.innerHTML = `
      <h1 id="description">PHP를 통해서 만들어본 작품입니다. 윈도우즈 가상머신에 LAMP를 올려 제작되었으며, 서버를 비롯한 웹의 전반적인 구동 원리를 이해하고자 했습니다.</h1>
      <br/>
      <p id="usedSkill">사용된 기술</p>
      <li id="skills">Linux(CentOS)</li>
      <li id="skills">Apache</li>
      <li id="skills">MySQL</li>
      <li id="skills">PHP</li>
      <li id="skills">HTML</li>
      <li id="skills">CSS</li>
      <li id="skills">BootStrap</li>
      <br/>
      <p id="usedSkill">구현된 기능</p>
      <li id="skills">회원가입</li>
      <li id="skills">로그인(세션을 통해 30일간 유지) / 로그아웃</li>
      <li id="skills">게시글 등록, 댓글 등록, 대댓글 등록, 댓글 삭제, 수정</li>
      <li id="skills">회원정보수정</li>
      <li id="skills">관리자 페이지(상품 등록, 상품 수정, 상품 삭제, 게시판 관리 등)</li>
      <li id="skills">상품결제</li>
      <li id="skills">장바구니</li>
      <br/>
      <p id="usedSkill">소스 보기</p>
      <button id="git-button"><a href="https://github.com/tofutree23/dagabae" target="_blank"><span><i class="fab fa-github"></i></span>Github</a></button>
      `;
      poppop.getElementsByTagName('img')[0].style.display = 'none';
    }
  };

  closeBtn.addEventListener('click', () => {
    poppop.style.display = 'none';
  });

  dagabae.addEventListener('click', openPop.bind(this, dagabae));
  wetube.addEventListener('click', openPop.bind(this, wetube));
};

class Portfolio extends Component {
  componentDidMount = () => {
    webClick();
  };

  render() {
    return (
      <div className="portfolio">
        <h2 className="pofol">Works</h2>
        <div className="section">
          <section className="section content dagabae">
            <img
              src="https://raw.githubusercontent.com/tofutree23/Resources/master/img/thumb/da.PNG"
              alt="dagabae, the shopping mall of coffee with tea"
            />
          </section>
          <section className="section content wetube">
            <img
              src="https://raw.githubusercontent.com/tofutree23/Resources/master/img/thumb/we.PNG"
              alt="we-tube, the most popular streaming service youtube's clone"
            />
          </section>
          <section
            className="section content clock-section"
            alt="Analog Clock with Vanilla JS"
          >
            {/* 아날로그 시계 컴포넌트를 이곳에서도 css로 제어할 수 있도록 클래스네임을 부여한다 */}
            <AnalogClock className="clock" />
          </section>
          {/* 팝업창 띄우는 곳 */}
          <section className="dim-layer">
            {/* 어두운 배경 div */}
            <div className="dimBg" />
            {/* 레이어 팝업 */}
            <div className="pop-layer">
              <div className="pop-container">
                <div className="contents">
                  <a
                    className="imgA"
                    href="http://13.124.203.193:3000/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="http://www.bloter.net/wp-content/uploads/2019/01/google-logo-1-800x450.jpg"
                      alt="Lorem"
                      className="innerImg"
                    />
                  </a>
                  <video
                    type="video/mp4"
                    width="100%"
                    height="auto"
                    playsInline
                    autoPlay
                    muted
                  />
                  <div>
                    <p className="contents-title">
                      This is My Works. Enjoy! :)
                    </p>
                    <div className="contents-desc">
                      하나 둘 셋 넷
                      <ul>
                        <li>This is</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="btn-r">
                  <button className="btn-layerClose">Close</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Portfolio;
