import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <NavLink to="/">
        <img src={burgerLogo} alt="MyBurger"></img>
      </NavLink>
    </div>
  );
};

export default logo;
