import React from 'react';

import logo from '../../assets/images/header/logo.png';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.header__logo}>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <nav className={classes.header__nav}>
          <ul>
            <li>
              <a href="/"> About App</a>
            </li>
            <li>
              <a href="/"> Sign In </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
