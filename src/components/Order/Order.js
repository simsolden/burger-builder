import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
  const ingredients = Object.keys(props.ingredients).map((ingredient, i) => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px',
        }}
        key={ingredient + i}
      >
        {ingredient} ({props.ingredients[ingredient]})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredients}</p>

      <p>
        Price: <strong>{props.price} €</strong>
      </p>
    </div>
  );
};

export default order;
