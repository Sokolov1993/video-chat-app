import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from '../UI/Backdrop';

const NotificationsPortal = ({ children }) => {
  return (
    children && (
      <Fragment>
        {ReactDOM.createPortal(children, document.getElementById('modal'))}
        {ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById('backdrop')
        )}
      </Fragment>
    )
  );
};

export default NotificationsPortal;
