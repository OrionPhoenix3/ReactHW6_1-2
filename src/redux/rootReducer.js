import {combineReducers} from "redux";
import {filmsReducer} from "./filmsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    films: filmsReducer,
    app: appReducer,
})