import React, { useEffect, useState } from "react";

import "./clock.style.scss";

const Clock = props => {

    let timer = props.time

    const [time, setTime] = useState(timer)

    useEffect(() => {
        setInterval(tick, 1000);

        return clearInterval
    }, []);

    const tick = () => {
        setTime(timer -= 1)
    }
    return (
        <p id="lazy">{`${Math.floor((time / 60) % 60)} : ${time % 60} `}</p>
    )
}

export default Clock
