import React, { Fragment } from 'react';

import classes from './Input.module.scss';

const Input = ({
  id,
  inputName,
  placeholder,
  value,
  onChangeHandler,
  className,
}) => {
  return (
    <Fragment>
      <label htmlFor={id}>Name</label>
      <input
        type="text"
        name={inputName}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        className={classes[className]}
      />
    </Fragment>
  );
};

export default Input;
