import React, { useState } from 'react';

import NotificationsPortal from '../../Notification/NotificationsPortal';
import CloseIcon from '@mui/icons-material/Close';

import classes from './Error.module.scss';

const Error = ({ children }) => {
  const [showError, setShowError] = useState(true);

  const onCloseModalHandler = () => {
    setShowError(false);
  };

  return (
    showError && (
      <NotificationsPortal>
        <div className={classes.error}>
          <CloseIcon
            className={classes.error__closeIcon}
            onClick={onCloseModalHandler}
          />
          <h2 className={classes.error__message}>ERROR: {children}.</h2>
        </div>
      </NotificationsPortal>
    )
  );
};

export default Error;
