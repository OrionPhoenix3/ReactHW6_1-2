import {HIDE_LOADER, SHOW_LOADER} from "./types";

const initialValue = {
    loading: false,
}

export const appReducer = (state = initialValue, actions) => {
  switch (actions.type) {
      case SHOW_LOADER:
          return {...state, loading: true};
      case HIDE_LOADER:
          return {...state, loading: false};
      default:
          return state;
  }
}