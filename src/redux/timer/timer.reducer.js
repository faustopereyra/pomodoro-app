const INITIAL_STATE = {
    timerStage: "work",
    actualTime: 1500000,
    defaultWorkTime: 1500000,
    defaultRestTime: 300000
}

const timerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default timerReducer;