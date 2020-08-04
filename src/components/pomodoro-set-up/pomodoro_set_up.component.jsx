import React from "react";

import { connect } from "react-redux"

import { setRestTime, setWorkTime, toggleStage } from "../../redux/timer/timer.actions"

import "./pomodoro_set_up.style.scss"

const PomodoroSetUp = (props) => {
    const eventHander = e => {
        props.type == "work" ? props.setWorkTime(e) : props.setRestTime(e);
        props.toggleStage()
    }
    return (
        <div className="input-box">
            <div className="input-box--text"> {props.children} </div>
            <input type="number" className="input-box--input" onBlur={(e) => eventHander(e.target.value * 60)} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleStage: () => dispatch(toggleStage()),
    setRestTime: (e) => dispatch(setRestTime(e)),
    setWorkTime: (e) => dispatch(setWorkTime(e))
})

export default connect(null, mapDispatchToProps)(PomodoroSetUp);