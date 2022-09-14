import React, { useContext, Fragment } from 'react';

import { SocketContext } from '../../socketContext/socketContext';
import NotificationsPortal from './NotificationsPortal';

import classes from './Notifications.module.scss';

const Notifications = () => {
  const { answerCall, call, callAccepted, leaveCall } =
    useContext(SocketContext);

  return (
    <NotificationsPortal>
      {call.isRecivedCall && !callAccepted && (
        <div className={classes.notification}>
          <h2>{call.callerName} is calling: </h2>
          <button className={classes.notification__button} onClick={answerCall}>
            ACCEPT
          </button>
          <button
            className={classes['notification__button--secondary']}
            onClick={leaveCall}
          >
            DECLINE
          </button>
        </div>
      )}
    </NotificationsPortal>
  );
};

export default Notifications;
