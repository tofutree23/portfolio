import React, { Component } from 'react';
import AnalogClock from 'components/AnalogClock';
import 'scss/Portfolio.scss';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        {/* 아날로그 시계 컴포넌트를 이곳에서도 css로 제어할 수 있도록 클래스네임을 부여한다 */}
        <AnalogClock className="clock" />
        <h3 className="aboutclock">Current Local Time in Seoul</h3>
      </div>
    );
  }
}

export default Portfolio;
