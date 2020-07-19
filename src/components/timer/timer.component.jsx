import React from 'react';

import "./timer.style.scss"

const Timer = () => {

    return (
        <div className="timer-group">

            <div className="timer minute">
                <div className="hand"><span style={{ "animation-duration": "10s" }} ></span></div>
                <div className="hand"><span style={{ "animation-duration": "10s" }}></span></div>
            </div>
            <div className="timer second">
                <div className="hand"><span></span></div>
                <div className="hand"><span></span></div>
            </div>
            <div className="face">
                <h2>Motivational quote</h2>
                <p id="lazy">00:00:00</p>
            </div>
        </div >
    );


};
export default Timer;
