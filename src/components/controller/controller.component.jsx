import React from "react";

import { connect } from "react-redux"
import { togglePause, toggleStage } from "../../redux/timer/timer.actions"

import Btn from "../btn/btn.component"

import "./controller.style.scss"

const Controller = ({ onPause, togglePause, toggleStage, trigger }) => {

    const pauseToggle = () => {
        togglePause()
    }

    const stageToggle = () => {
        toggleStage();
        togglePause()
        trigger();
    }

    return (
        <div className="controller-container">
            <Btn action={pauseToggle} > {onPause ? "Start" : "Stop"} </Btn>
            <Btn action={stageToggle} > Skip </Btn>
        </div>

    )
}

const mapStateToProps = state => ({
    onPause: state.timer.onPause
});

const mapDispatchToProps = dispatch => ({
    togglePause: () => dispatch(togglePause()),
    toggleStage: () => dispatch(toggleStage())
})

export default connect(mapStateToProps, mapDispatchToProps)(Controller);