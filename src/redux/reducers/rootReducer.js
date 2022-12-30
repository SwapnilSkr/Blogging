import { combineReducers } from "redux";

import userAuthReducer from "./userAuthReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
    userAuth: userAuthReducer,
    alert: alertReducer,
});

export default rootReducer;