import React, { useState, useEffect } from 'react';

import { connect } from "react-redux"

import Clock from '../clock/clock.component';

import "./timer.style.scss"

const Timer = ({ stageChange, onPause, time }) => {

    const [duration, setDuration] = useState(time);

    useEffect(() => {
        setDuration(time)
    }, [onPause, stageChange]);

    const animationDuration = {
        animationDuration: `${duration}s`
    }

    return (
        <div className="timer-group">

            <div className="timer minute">
                <div className={`${onPause ? "" : "hand"}`}><span style={animationDuration} ></span></div>
                <div className={`${onPause ? "" : "hand"}`}><span style={animationDuration}></span></div>
            </div>
            <div className="timer second">
                <div className={`${onPause ? "" : "hand"}`}><span></span></div>
                <div className={`${onPause ? "" : "hand"}`}><span></span></div>
            </div>
            <div className="face">
                <h2>Motivational quote</h2>
                <Clock time={time} />
            </div>
        </div >
    );
};

const mapStateToProps = state => ({
    onPause: state.timer.onPause
});

export default connect(mapStateToProps)(Timer);
