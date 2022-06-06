import { CATEGORIES_ACTION_TYPES } from './categories.types';

export const CATEGORIES_INITIAL_SATTE = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_SATTE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
