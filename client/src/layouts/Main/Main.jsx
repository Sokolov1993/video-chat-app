import React from 'react';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Options from '../../components/Options/Options';
import Notifications from '../../components/Notification/Notifications';

import classes from './Main.module.scss';

const Main = () => {
  return (
    <main className={classes.main}>
      <section className={classes.wrapper}>
        <div className={classes.main__videoPlayer}>
          <VideoPlayer />
        </div>
        <Options />
        <Notifications />
      </section>
    </main>
  );
};

export default Main;
