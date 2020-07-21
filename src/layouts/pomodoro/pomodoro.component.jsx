import React, { useEffect, useState } from "react";

import useInterval from "../../functions/use-interval.hook"

import { connect } from "react-redux"

import Timer from "../../components/timer/timer.component"
import Controller from "../../components/controller/controller.component"

const Pomodoro = ({ onWorkTime, onPause, actualTime, defaultRestTime, defaultWorkTime }) => {

    const [count, setCount] = useState(actualTime);

    useInterval(() => {

        if (count == 0) {
            if (onWorkTime) {
                setCount(defaultWorkTime)
            }
            else {
                setCount(defaultRestTime)
            }
        }

        setCount(count - 1)

    }, !onPause ? 1000 : null);



    return (
        <div>
            <Timer time={count} />
            <Controller />
        </div>
    )
}

const mapStateToProps = state => ({
    onWorkTime: state.timer.onWorkTime,
    onPause: state.timer.onPause,
    actualTime: state.timer.actualTime,
    defaultWorkTime: state.timer.defaultWorkTime,
    defaultRestTime: state.timer.defaultRestTime,

});


export default connect(mapStateToProps)(Pomodoro);