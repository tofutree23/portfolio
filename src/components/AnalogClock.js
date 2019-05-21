import React, { Component } from 'react';
import 'scss/AnalogClock.scss';

class AnalogClock extends Component {
  componentDidMount = () => {
    const secondHand = document.querySelector('.sec-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const setDate = () => {
      const now = new Date();

      const sec = now.getSeconds();
      const secondDegree = (sec / 60) * 360 + 90;

      const min = now.getMinutes();
      const minuteDegree = (min / 60) * 360 + 90;

      const hour = now.getHours();
      const hourDegree = (hour / 12) * 360 + 90;

      secondHand.style.transform = `rotate(${secondDegree}deg)`;
      minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
      hourHand.style.transform = `rotate(${hourDegree}deg)`;

      console.log(
        `초 = ${sec}, 초도 = ${secondDegree}, 분도 = ${minuteDegree}, 시도 = ${hourDegree}`,
      );
    };

    setInterval(setDate, 1000);
  };
  render() {
    return (
      <div className="analogClock">
        <div className="clock">
          <div className="clock-faces">
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
