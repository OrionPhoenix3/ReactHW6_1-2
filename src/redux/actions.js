import { ADD_FILM, FETCHED_FILM, HIDE_LOADER, SHOW_LOADER } from "./types";

export function addFilm(film) {
    return {
        type: ADD_FILM,
        payload: film,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function fetchFilm() {
    return async (dispatch) => {
        dispatch(showLoader())
        const response = await fetch("https://my.api.mockaroo.com/cinema.json?key=778301b0")
        .catch(err => 
            console.log(err))
            dispatch(hideLoader()
        );
        if (response.ok) {
            const json = await response.json()
            dispatch(hideLoader());
            dispatch({type: FETCHED_FILM, payload: json})
        }  else {
            dispatch(hideLoader());
            console.log('Error!')
    }
}
}