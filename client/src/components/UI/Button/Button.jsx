import React from 'react';

import classes from './Button.module.scss';

const Button = ({ onClick, type, className, startIcon, children }) => {
  return (
    <button onClick={onClick} type={type} className={classes[className]}>
      <span>{startIcon}</span>
      {children}
    </button>
  );
};

export default Button;
