import React, { useEffect, useState } from "react";

import { connect } from "react-redux"

import useInterval from "../../functions/use-interval.hook"

import "./clock.style.scss";

const Clock = ({ time }) => {

    return (
        <p id="lazy">{`${Math.floor((time / 60) % 60)} : ${time % 60} `}</p>
    )
}

const mapStateToProps = state => ({
    //onWorkTime: state.timer.onWorkTime,
    //onPause: state.timer.onPause
});

export default connect(mapStateToProps)(Clock)

/*
//let timer = props.time

    //const [time, setTime] = useState(timer)

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        //setInterval
        return clearInterval()
    }, [props.onPause]);

    const tick = () => {
        //props.onPause ? console.log("hola") : console.log("chau")
        //pp()
        console.log("hola", props.onPause);
        setTime(timer -= 1)
    }

    const pp = () => {
        //console.log(props.onPause)

    }


    //console.log("hola", props.onPause)*/