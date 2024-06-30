import React from 'react';
import { FC, useState, useEffect } from 'react';
import classes from './LogIn.module.scss';

const LogIn: React.FC = () => {
  return (
    <div className={classes.content}>
      <h1 className={classes.contentHeader}>Chose login option</h1>
      <div className={classes.contentButtons}>
        <button>Login by google</button>
        <button>Login by e-mail</button>
        <button>Signin with e-mail</button>
      </div>
    </div>
  );
}

export default LogIn;