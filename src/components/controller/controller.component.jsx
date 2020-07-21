import React from "react";

import { connect } from "react-redux"
import { togglePause } from "../../redux/timer/timer.actions"

import Btn from "../btn/btn.component"

import "./controller.style.scss"

const Controller = ({ onWorkTime, onPause, togglePause }) => {

    const p = () => {
        togglePause()
    }

    return (
        <div className="controller-container">
            <Btn action={p} > {onPause ? "Start" : "Stop"} </Btn>
            <Btn action={p} > Skip </Btn>
        </div>

    )
}

const mapStateToProps = state => ({
    //onWorkTime: state.timer.onWorkTime,
    onPause: state.timer.onPause
});

const mapDispatchToProps = dispatch => ({
    //toggleAddNewNote: () => dispatch(toggleAddNewNote()),
    togglePause: () => dispatch(togglePause())
})

export default connect(mapStateToProps, mapDispatchToProps)(Controller);

//<OptionButton onClick={props.toggleAddNewNote} />