import {bool, number, shape, string} from 'prop-types';

export const TodoType = shape({
  id: number,
  text: string,
  completed: bool
});
