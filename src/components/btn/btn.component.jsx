import React from "react";

import "./btn.style.scss"

const Btn = props => {
    return (
        <div className="btn" onClick={props.action}>
            {props.children}
        </div>

    )
}

export default Btn