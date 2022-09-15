import React from 'react';

import classes from './Navigation.module.scss';

const Navigation = ({ navClassName }) => {
  return (
    <nav className={classes[navClassName]}>
      <ul>
        <li>
          <a href="/"> About App</a>
        </li>
        <li>
          <a href="/"> Sign In </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
