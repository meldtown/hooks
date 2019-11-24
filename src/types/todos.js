import PropTypes from 'prop-types';

export const TodoType = PropTypes.shape({
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool
});
