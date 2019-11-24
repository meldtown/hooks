import {FETCH_TODOS, FETCH_TODOS_ERROR, FETCH_TODOS_SUCCESS} from "../constants";
import {fetchTodos} from "../client";

export const getTodos = () => async dispatch => {
  dispatch({type: FETCH_TODOS});

  try {
    const {data: todos} = await fetchTodos();

    dispatch({type: FETCH_TODOS_SUCCESS, todos});

    return Promise.resolve(todos);
  } catch (error) {
    dispatch({type: FETCH_TODOS_ERROR, error});

    return Promise.reject(error);
  }
};
