import React from 'react';

import { connect } from "react-redux"

import "./timer.style.scss"

const Timer = ({ actualTime }) => {

    const seconds = actualTime / 1000;
    const minutes = seconds / 60;

    const secondsDisplay = seconds % 60
    const minutesDisplay = minutes % 60

    return (
        <div className="timer-group">

            <div className="timer minute">
                <div className="hand"><span style={{ "animation-duration": `${seconds}s` }} ></span></div>
                <div className="hand"><span style={{ "animation-duration": `${seconds}s` }}></span></div>
            </div>
            <div className="timer second">
                <div className="hand"><span></span></div>
                <div className="hand"><span></span></div>
            </div>
            <div className="face">
                <h2>Motivational quote</h2>
                <p id="lazy">{`${minutesDisplay} : ${secondsDisplay} `}</p>
            </div>
        </div >
    );


};

const mapStateToProps = state => ({
    actualTime: state.timer.actualTime
});

export default connect(mapStateToProps)(Timer);
