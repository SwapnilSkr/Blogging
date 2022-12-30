import { SET_ALERT,REMOVE_ALERT } from "../constants/alert";

export const setAlert = ({msg, type}) => () => {
    return {
        type: SET_ALERT,
        payload: { msg, type },
    };
}

export const removeAlert = () => {
    return {
        type: REMOVE_ALERT,
    };
}

export const showAlert = ({msg, type}) => (dispatch) => {
    console.log(msg, type);
    dispatch(setAlert({msg, type}));
    setTimeout(() => dispatch(removeAlert()), 4000);
}