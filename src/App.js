import React, { useState } from 'react';

import Pomodoro from './layouts/pomodoro/pomodoro.component';

import "./main.scss"
import Option from './components/option/option.component';


function App() {

    const [option, setOption] = useState(false)
    return (
        <div>
            <Pomodoro setOption={setOption} />
            {option ?
                <Option setOption={setOption} /> :
                ""
            }

        </div>
    )
}

export default App;
