import React from 'react';
import 'scss/Portfolio.scss';

const PopUpLayer = () => {
  return (
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
              <p className="contents-title">This is My Works. Enjoy! :)</p>
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
  );
};

export default PopUpLayer;
