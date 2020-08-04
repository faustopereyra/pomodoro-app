export const toggleStage = () => ({
    type: "TOGGLE_STAGE",
})

export const togglePause = () => ({
    type: "TOGGLE_PAUSE"
})

export const setWorkTime = e => ({
    type: "SET_WORK_TIME",
    payload: e
})

export const setRestTime = e => ({
    type: "SET_Rest_TIME",
    payload: e
})