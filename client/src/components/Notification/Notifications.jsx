import React, { useContext } from 'react';

import { SocketContext } from '../../socketContext/socketContext';
import NotificationsPortal from './NotificationsPortal';
import Button from '../UI/Button/Button';

import classes from './Notifications.module.scss';

const Notifications = () => {
  const { answerCall, call, callAccepted, leaveCall } =
    useContext(SocketContext);

  return (
    <NotificationsPortal>
      {call.isRecivedCall && !callAccepted && (
        <div className={classes.notification}>
          <h2>{call.callerName} is calling: </h2>
          <Button className="button--primary" onClick={answerCall}>
            ACCEPT
          </Button>
          <Button className="button--secondary" onClick={leaveCall}>
            DECLINE
          </Button>
        </div>
      )}
    </NotificationsPortal>
  );
};

export default Notifications;
