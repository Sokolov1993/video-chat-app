import React, { Fragment, useContext } from 'react';

import { SocketContext } from '../../socketContext/socketContext';

import classes from './VideoPlayer.module.scss';

const VideoPlayer = () => {
  const { myVideo, userVideo, name, callAccepted, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <Fragment>
      {/* Our video */}
      {stream && (
        <section className={classes.video}>
          <h2>{name || 'Name'}</h2>
          <video playsInline muted ref={myVideo} autoPlay />
        </section>
      )}
      {/* User`s video */}
      {callAccepted && !callEnded && (
        <section className={classes.video}>
          <h2>{call.callerName || 'Name'}</h2>
          <video playsInline ref={userVideo} autoPlay />
        </section>
      )}
    </Fragment>
  );
};

export default VideoPlayer;
