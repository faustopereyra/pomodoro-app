import React, { useEffect } from 'react';

import { connect } from "react-redux"

import Clock from '../clock/clock.component';

import "./timer.style.scss"

const Timer = ({ actualTime }) => {

    useEffect(() => {
        setInterval(() => {
            actualTime -= 1000;
            //console.log(actualTime)
        }, 1000);
    });

    const seconds = actualTime / 1000;
    const minutes = seconds / 60;

    //const secondsDisplay = Math.floor(seconds % 60)
    //const minutesDisplay = Math.floor(minutes % 60)

    //console.log("timer: ", actualTime)



    return (
        <div className="timer-group">

            <div className="timer minute">
                <div className="hand"><span style={{ animationDuration: `${seconds}s` }} ></span></div>
                <div className="hand"><span style={{ animationDuration: `${seconds}s` }}></span></div>
            </div>
            <div className="timer second">
                <div className="hand"><span></span></div>
                <div className="hand"><span></span></div>
            </div>
            <div className="face">
                <h2>Motivational quote</h2>
                <Clock time={seconds} />
            </div>
        </div >
    );


};

const mapStateToProps = state => ({
    actualTime: state.timer.actualTime
});

export default connect(mapStateToProps)(Timer);
