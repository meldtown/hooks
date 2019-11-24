import React from "react";
import {TodoType} from "../types";

export const Todo = ({text, completed}) => (
  <div>
    <p>{text}</p>
    <p>{completed ? 'Done' : 'Open'}</p>
  </div>
);

Todo.propTypes = {
  todo: TodoType
};
