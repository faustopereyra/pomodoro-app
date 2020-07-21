const INITIAL_STATE = {
    onPause: true,
    onWorkTime: true,
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
        default:
            return state;
    }
}

export default timerReducer;