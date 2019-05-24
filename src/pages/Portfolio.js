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
      const upperTag = poppop.getElementsByClassName('contents')[0].innerHTML;
      console.log(upperTag);
      const imgTag = poppop.getElementsByTagName('img')[0];
      imgTag.style.display = 'block';
      imgTitle.innerHTML = 'Wetube';
      desc.innerHTML =
        '<h1>Wetube는 세계 굴지의 동영상 스트리밍 서비스, Youtube를 클론해서 만들어보았습니다.</h1>';
      poppop.getElementsByTagName('img')[0].alt = 'Wetube';
      poppop.getElementsByTagName('img')[0].src = imgSrc;
    } else {
      imgTitle.innerHTML = 'Dagabae';
      video.style.display = 'block';
      video.src =
        'https://wetube-2.s3.ap-northeast-2.amazonaws.com/video/c6c40062ad9829744236aff4b2ae8e55';
      video.controls = 'true';
      video.alt = 'Dagabae';
      desc.innerHTML = '다가배에서 마음의 평화를 찾으세요';
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
                  {/* eslint-disable-next-line */}
                  <a
                    className="imgA"
                    href="http://13.124.203.193:3000/"
                    target="_blank"
                  >
                    <img
                      src="http://www.bloter.net/wp-content/uploads/2019/01/google-logo-1-800x450.jpg"
                      alt="Lorem"
                      className="innerImg"
                    />
                  </a>
                  <video />
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
                  {/* eslint-disable-next-line */}
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
