import React, { useState } from "react";

import useInterval from "../../functions/use-interval.hook"

import { connect } from "react-redux"

import Timer from "../../components/timer/timer.component"
import Controller from "../../components/controller/controller.component"

import { toggleStage } from "../../redux/timer/timer.actions"

import background from "../../functions/background.function"

import "./pomodoro.style.scss"

const Pomodoro = ({ onWorkTime, onPause, defaultRestTime, defaultWorkTime, toggleStage, setOption }) => {

    const [count, setCount] = useState(defaultWorkTime);

    useInterval(() => {

        if (count === 0) {
            if (!onWorkTime) {
                setCount(defaultWorkTime)
            }
            else {
                setCount(defaultRestTime)
            }
            toggleStage();
        }
        else {
            setCount(count - 1)
        }
    }, !onPause ? 1000 : null);

    const trigger = () => {
        if (!onWorkTime) {
            setCount(defaultWorkTime)
        }
        else {
            setCount(defaultRestTime)
        }
    }


    return (
        <div style={onPause ? background.blue : onWorkTime ? background.red : background.green}>
            <div onClick={() => setOption(true)} className="set-up"  >
                <label className="set-up__button">
                    <span className="set-up__icon">&nbsp;</span>
                </label>
            </div>
            <div className="pomodoro" >
                <Timer time={count} stageChange={count === 0 || onWorkTime} />
                <Controller trigger={trigger} />
            </div>
        </div>

    )
}


const mapStateToProps = state => ({
    onWorkTime: state.timer.onWorkTime,
    onPause: state.timer.onPause,
    defaultWorkTime: state.timer.defaultWorkTime,
    defaultRestTime: state.timer.defaultRestTime,

});

const mapDispatchToProps = dispatch => ({
    toggleStage: () => dispatch(toggleStage())
})


export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro);