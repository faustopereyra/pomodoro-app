import React from "react";

import "./pomodoro_set_up.style.scss"

const PomodoroSetUp = (props) => {
    return (
        <div className="input-box">
            <div className="input-box--text"> {props.children} </div>
            <input type="number" className="input-box--input" />
        </div>
    )
}

export default PomodoroSetUp;