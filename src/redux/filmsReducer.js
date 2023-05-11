import {ADD_FILM, FETCHED_FILM} from "./types"

const initialState = {
    films:[],
    fetchedFilms: [],
}

export const filmsReducer = (state = initialState, action) => {
    if (action.type === FETCHED_FILM) {
        return {...state, fetchedFilms: action.payload}
    } else if (action.type === ADD_FILM){
        return {...state, films: [...state.films, action.payload]}
    } else {
        return state
    }       
}
