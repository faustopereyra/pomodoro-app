import { combineReducers } from "redux";

import timerReducer from "./timer/timer.reducer"

export default combineReducers({
    timer: timerReducer
});