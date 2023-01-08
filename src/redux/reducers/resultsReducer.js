const initialState = {
    loading : false,
    blogs: null,
    error: ''
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_RESULT_REQUEST': {
            return {
                ...state,
                loading: true
            }
        }
        case 'SEARCH_RESULT_SUCCESS': {
            return {
                loading: false,
                tracks: action.tracks,
                artists: action.artists,
                error: ''
            }
        }
        case 'SEARCH_RESULT_FAILURE': {
            return {
                loading: false,
                tracks: [],
                artists: [],
                error: action.payload
            }
        }
        default: return state
    }
}

export default resultReducer