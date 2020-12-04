import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.7,
  meat: 1.3,
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const removeIngredient = (state, action) => {
  const updatedIngredientRemoved = {
    [action.ingType]: state.ingredients[action.ingType] - 1,
  };
  const updatedIngredientsRemoved = updateObject(
    state.ingredients,
    updatedIngredientRemoved
  );
  const updatedStateRemoved = {
    ingredients: updatedIngredientsRemoved,
    totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingType],
  };
  return updateObject(state, updatedStateRemoved);
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingType]: state.ingredients[action.ingType] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: INGREDIENTS_PRICES[action.ingType] + state.totalPrice,
  };
  return updateObject(state, updatedState);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    totalPrice: 4,
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
    },
    error: false,
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);

    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);

    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);

    default:
      return state;
  }
};

export default reducer;
