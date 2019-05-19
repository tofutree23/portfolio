import React, { Component } from 'react';
import "scss/AnalogClock.scss";

class AnalogClock extends Component {
    render() {
        return (
            <div className="analogClock">
                <div className="clock">
                    <div className="clock-faces"> 
                        <div className="hand hour-hand"></div>
                        <div className="hand min-hand"></div>
                        <div className="hand sec-hand"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnalogClock;