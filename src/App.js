import React from 'react';

import Pomodoro from './layouts/pomodoro/pomodoro.component';

import "./main.scss"

const favicon = document.getElementById("favicon");

//favicon.href = "http://faustopereyra.com/media/images/favicon.ico"

function App() {
    return (
        <Pomodoro />
    )
}

export default App;
