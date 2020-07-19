import React, { useEffect, useState } from "react";

import "./clock.style.scss";

const Clock = props => {

    let timer = props.time

    const [time, setTime] = useState(timer)

    //console.log(timer)

    useEffect(() => {
        setInterval(() => {
            setTime(timer -= 1)
            console.log("hola", timer)
        }, 1000);

        //return clearInterval(clock)
    }, []);

    const tick = () => {
        setTime(timer -= 1000)
        console.log("hola")
    }
    return (
        <p id="lazy">{`${Math.floor((time / 60) % 60)} : ${time % 60} `}</p>
    )
}

export default Clock


//const secondsDisplay = Math.floor(seconds % 60)
    //const minutesDisplay = Math.floor(minutes % 60)