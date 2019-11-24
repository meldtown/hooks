import {
  FETCH_TODOS,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS
} from "../constants";

const defaultState = {
  loading: false,
  error: null,
  data: []
};

export const todos = (state = defaultState, {type, data, error}) => {
  switch (type) {
    case FETCH_TODOS:
      return {...state, loading: true}
    case FETCH_TODOS_SUCCESS:
      return {
        data,
        error: null,
        loading: false
      }
    case FETCH_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        error
      }
    default:
      return state;
  }
};
