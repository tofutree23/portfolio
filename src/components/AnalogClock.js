import React, { Component } from 'react';
import 'scss/AnalogClock.scss';

class AnalogClock extends Component {
  // 컴포넌트가 불러와졌을 때 해당 행동을 실행한다
  componentDidMount = () => {
    const secondHand = document.querySelector('.sec-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const setDate = () => {
      const now = new Date();

      const sec = now.getSeconds();
      const secondDegree = Math.floor((sec / 60) * 360 + 90);

      const min = now.getMinutes();
      const minuteDegree = Math.floor((min / 60) * 360 + 90);

      const hour = now.getHours();
      const hourDegree = Math.floor((hour / 12) * 360 + 90);

      secondHand.style.transform = `rotate(${secondDegree}deg)`;
      minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
      hourHand.style.transform = `rotate(${hourDegree}deg)`;
    };

    setInterval(setDate, 1000);
  };
  render() {
    return (
      <div className="analogClock">
        {/* 시계 동그란 부분 */}
        <div className="clock">
          {/* 시계 침이 돌아가는 부분.. 여긴 동그라미일 필요 없다 */}
          <div className="clock-faces">
            {/* 바늘은 반지름만큼을 차지한채로 빙글빙글 돌아다니므로 width는 50%를 주어야한다 */}
            <div className="hand hour-hand" />
            <div className="hand min-hand" />
            <div className="hand sec-hand" />
          </div>
        </div>
      </div>
    );
  }
}

export default AnalogClock;
