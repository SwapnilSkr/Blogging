import axios from '../../axios/axiosInstance'
export const searchRequest = () => {
    return {
        type: 'SEARCH_REQUEST',
    }
}

export const searchSuccess = (data) => {
    return {
        type: 'SEARCH_SUCCESS',
        payload: data
    }
}

export const searchFailure = (error) => {
    return {
        type: 'SEARCH_FAILURE',
        payload: error
    }
}

export const search =  (query) => {
    return async (dispatch) => {
        dispatch(searchRequest())
        await axios.get(`/blogs/search/${query}`).then(function (response) {
            console.log(response.data);
            dispatch(searchSuccess(response.data))
        }).catch(function (error) {
            console.error(error);
            dispatch(searchFailure('No results found'))
        });
    }
}


export const searchResultRequest = () => {
    return {
        type: 'SEARCH_RESULT_REQUEST',
    }
}

export const searchResultSuccess = (tracks,artists) => {
    return {
        type: 'SEARCH_RESULT_SUCCESS',
        tracks: tracks,
        artists: artists
    }
}

export const searchResultFailure = (error) => {
    return {
        type: 'SEARCH_RESULT_FAILURE',
        payload: error
    }
}

export const searchResult = (query) => {
    
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {term: query, locale: 'en-US', offset: '0', limit: '5'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_SHAZAM_API_KEY,
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };

        return (dispatch) => {
            dispatch(searchResultRequest())
            axios.request(options).then(function (response) {
                console.log(response.data);
                dispatch(searchResultSuccess(response.data.tracks?.hits.map(hit=>hit.track),response.data.artists?.hits.map(hit=>hit.artist)))
            }).catch(function (error) {
                console.error(error);
                dispatch(searchResultFailure('No results found'))
            });
        }
    }

