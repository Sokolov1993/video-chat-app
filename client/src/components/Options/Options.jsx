import React, { useContext, useState, Fragment } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../../socketContext/socketContext';

import AssignmentIcon from '@mui/icons-material/Assignment';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import classes from './Options.module.scss';

const Options = () => {
  const [idToCall, setIdToCall] = useState('');

  const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
    useContext(SocketContext);

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
        <Button
          className="button--secondary"
          onClick={leaveCall}
          type="button"
          startIcon={<PhoneDisabledIcon />}
        >
          Hang Up
        </Button>
      );
    } else {
      return (
        <Button
          className="button--primary"
          onClick={() => callUser(idToCall)}
          type="button"
          startIcon={<PhoneIcon />}
        >
          CALL
        </Button>
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
          <Input
            id="name"
            inputName="name"
            placeholder="Enter your name"
            value={name}
            onChangeHandler={onInputNameHandler}
            className="input"
            label="Name"
          />
          <CopyToClipboard text={me}>
            <Button className="button--primary" startIcon={<AssignmentIcon />}>
              COPY YOUR ID
            </Button>
          </CopyToClipboard>
        </div>
        <div className={classes.form__id}>
          <h2>Make a Call</h2>
          <Input
            id="id"
            inputName="id"
            placeholder="ID"
            value={idToCall}
            onChangeHandler={onInputIdHandler}
            className="input"
            label="Unique counterparty identifier"
          />
          {buttonDynamic()}
        </div>
      </form>
    </Fragment>
  );
};

export default Options;
