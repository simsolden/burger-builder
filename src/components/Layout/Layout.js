import React, { Fragment } from 'react';
//import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Fragment>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Fragment>
);

export default layout;
