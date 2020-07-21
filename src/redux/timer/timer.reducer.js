const INITIAL_STATE = {
    timerStage: "work",
    onPause: true,
    onWorkTime: true,
    actualTime: 1500,
    defaultWorkTime: 1500,
    defaultRestTime: 300
}

const timerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOGGLE_STAGE":
            return {
                ...state,
                onWorkTime: !state.onWorkTime
            }
        case "TOGGLE_PAUSE":
            return {
                ...state,
                onPause: !state.onPause
            }
        case "SET_ACTUAL_TIME":
            return {
                ...state,
                actualTime: action.payload
            }
        default:
            return state;
    }
}

export default timerReducer;