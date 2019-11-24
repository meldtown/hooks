import React, {useState} from "react";
import {number, oneOf, string} from 'prop-types';
import {
  Snackbar,
  SnackbarContent,
  IconButton
} from "@material-ui/core";

import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close'

import styles from './Notification.module.scss';
import {useStyles} from "./styles";

export const Notification = ({message, autoHideDuration}) => {
  const [isOpen, toggle] = useState(true);
  const classes = useStyles();
  const close = () => toggle(false);

  const messageContent = <div className={styles.message}>
    <div className="d-flex align-items-center">
      <ErrorIcon className="mr-10"/>
      {message}
    </div>
  </div>;

  const actionContent = <IconButton onClick={close} color="inherit">
    <CloseIcon/>
  </IconButton>;


  return <>
    <Snackbar
      open={isOpen}
      message={message}
      onClose={close}
      autoHideDuration={autoHideDuration}
    >
      <SnackbarContent
        className={classes.message}
        message={messageContent}
        action={actionContent}
      >
      </SnackbarContent>
    </Snackbar>
  </>
}

Notification.defaultProps = {
  type: 'success',
  autoHideDuration: 5000
}

Notification.propTypes = {
  message: string.isRequired,
  type: oneOf(['success', 'warning', 'error']),
  autoHideDuration: number
}
