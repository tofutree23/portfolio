import React, { Component } from 'react';
import AnalogClock from 'components/AnalogClock';
import 'scss/Portfolio.scss';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        {/* 아날로그 시계 컴포넌트를 이곳에서도 css로 제어할 수 있도록 클래스네임을 부여한다 */}
        <h4 className="aboutclock">Current Local Time in Seoul</h4>
        <AnalogClock className="clock" />
        <h2 className="pofol">Portfolio</h2>
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
        </div>
      </div>
    );
  }
}

export default Portfolio;
