import { combineReducers } from "redux";

import userAuthReducer from "./userAuthReducer";
import alertReducer from "./alertReducer";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
    userAuth: userAuthReducer,
    alert: alertReducer,
    blog: blogReducer,
});

export default rootReducer;