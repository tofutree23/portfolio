import React, { Component } from 'react';
import 'scss/Portpop.scss';

class Portpop extends Component {
  render() {
    return (
      <div>
        <div className="dimBg" />
        <div className="pop-layer">
          <div className="pop-container">
            <div className="pop-conts">
              <p className="contents" />
              <div className="btn-r">
                {/* eslint-disable-next-line */}
                <button className="btn-layerClose">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portpop;
