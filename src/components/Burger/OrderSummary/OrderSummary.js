import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';
// import classes from '.module.css'

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}> {igKey} </span> :
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your order</h3>
      <p>A delicious burger to fill your fat stomach</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total price : {props.totalPrice.toFixed(2)}€</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.modalClosed}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.modalContinue}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
