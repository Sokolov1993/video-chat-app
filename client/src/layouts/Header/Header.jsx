import React from 'react';

import logo from '../../assets/images/header/logo.png';
import Navigation from './Navigation/Navigation';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.header__logo}>
          <a href="/" aria-label="Link to the home page">
            <img src={logo} alt="" />
          </a>
        </div>
        <Navigation navClassName="header__nav" />
      </div>
    </header>
  );
};

export default Header;
