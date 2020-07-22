import React from "react";

import "./clock.style.scss";

const Clock = ({ time }) => {

    const timeUI = Math.floor((time / 60) % 60);
    const clock = `${timeUI < 10 ? `0${timeUI}` : timeUI} : ${time % 60 < 10 ? `0${time % 60}` : time % 60} `
    document.title = `Pomodoro - ${clock}  `

    return (
        <p id="lazy">{clock}</p>
    )
}

export default Clock;