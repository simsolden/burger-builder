import React from 'react';
import classes from './DrawerToggle.module.css';
import PropTypes from 'prop-types';

const drawerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.open}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

drawerToggle.propTypes = {
  open: PropTypes.func.isRequired,
};

export default drawerToggle;
