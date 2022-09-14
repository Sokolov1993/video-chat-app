import React, { useContext, useState, Fragment } from 'react';

import AssignmentIcon from '@mui/icons-material/Assignment';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../../socketContext/socketContext';

import classes from './Options.module.scss';

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
    useContext(SocketContext);

  const [idToCall, setIdToCall] = useState('');

  const onInputNameHandler = (event) => {
    setName(event.target.value);
  };

  const onInputIdHandler = (event) => {
    setIdToCall(event.target.value);
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();
  };

  const buttonDynamic = () => {
    if (callAccepted && !callEnded) {
      return (
        <button className={classes['button--secondary']} onClick={leaveCall}>
          <span>
            <PhoneDisabledIcon />
          </span>
          Hang Up
        </button>
      );
    } else {
      return (
        <button
          onClick={() => callUser(idToCall)}
          className={classes['button--primary']}
        >
          <span>
            <PhoneIcon />
          </span>
          CALL
        </button>
      );
    }
  };

  return (
    <Fragment>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={onSubmitFormHandler}
      >
        <div className={classes.form__name}>
          <h2>Account Info</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={onInputNameHandler}
          />
          <CopyToClipboard text={me}>
            <button className={classes['button--primary']}>
              <span>
                <AssignmentIcon />
              </span>
              COPY YOUR ID
            </button>
          </CopyToClipboard>
        </div>
        <div className={classes.form__id}>
          <h2>Make a Call</h2>
          <label htmlFor="id">ID to Call</label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="ID"
            value={idToCall}
            onChange={onInputIdHandler}
          />
          {buttonDynamic()}
        </div>
      </form>
      {children}
    </Fragment>
  );
};

export default Options;
