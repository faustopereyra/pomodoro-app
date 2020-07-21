import React from "react";

import "./clock.style.scss";

const Clock = ({ time }) => {

    const timeUI = Math.floor((time / 60) % 60)

    return (
        <p id="lazy">{`${timeUI < 10 ? `0${timeUI}` : timeUI} : ${time % 60 < 10 ? `0${time % 60}` : time % 60} `}</p>
    )
}

export default Clock;