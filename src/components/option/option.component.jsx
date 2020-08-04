import React from "react";

import PomodoroSetUp from "../pomodoro-set-up/pomodoro_set_up.component"

import "./option.style.scss"

const Option = ({ setOption }) => {
    return (
        <div className="option-bg">
            <div className="option-bg--blur" >
                <div className="close" onClick={() => setOption(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
                </div>
                <div className="option-bg--setup">
                    <PomodoroSetUp type="work" className="option-bg--setup__component"> Pomodoro Time</PomodoroSetUp>
                    <PomodoroSetUp type="rest" className="option-bg--setup__component"> Rest Time</PomodoroSetUp>
                </div>

            </div>
        </div>
    )
}

export default Option