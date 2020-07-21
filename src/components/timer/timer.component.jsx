import React, { useEffect } from 'react';

import { connect } from "react-redux"

import Clock from '../clock/clock.component';

import "./timer.style.scss"

const Timer = ({ actualTime, onPause, time }) => {

    const animationDuration = {
        animationDuration: `${onPause ? 0 : actualTime}s`
    }

    return (
        <div className="timer-group">

            <div className="timer minute">
                <div className="hand"><span style={animationDuration} ></span></div>
                <div className="hand"><span style={animationDuration}></span></div>
            </div>
            <div className="timer second">
                <div className="hand"><span></span></div>
                <div className="hand"><span></span></div>
            </div>
            <div className="face">
                <h2>Motivational quote</h2>
                <Clock time={time} />
            </div>
        </div >
    );
};

const mapStateToProps = state => ({
    actualTime: state.timer.actualTime,
    onPause: state.timer.onPause
});

export default connect(mapStateToProps)(Timer);
