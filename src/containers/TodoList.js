import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TodoType} from "../types";
import {getTodos} from "../actions";

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(TodoType),
    loading: PropTypes.bool,
    error: PropTypes.oneOf([PropTypes.instanceOf(Error), null])
  }

  render() {
    return <ul>
        <li>Todo will be here</li>
        <li>Todo will be here</li>
        <li>Todo will be here</li>
        <li>Todo will be here</li>
    </ul>
  }
};

export default connect(
  ({todos}) => {
    const {data, loading, error} = todos;

    return {todos: data, loading, error}
  },
  dispatch => ({
    getTodos: () => dispatch(getTodos())
  })
)(TodoList);
