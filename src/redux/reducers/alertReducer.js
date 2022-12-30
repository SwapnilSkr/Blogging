import { SET_ALERT, REMOVE_ALERT } from '../constants/alert';

const initialState = {
    msg: '',
    type: '',
    open: false,
};

export default function alertReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            console.log(payload);
            return {
                ...state,
                open:true,
                ...payload,
            };
        case REMOVE_ALERT:
            return {
                ...state,
                msg: '',
                type: '',
                open: false,
            };
        default:
            return state;
    }
}