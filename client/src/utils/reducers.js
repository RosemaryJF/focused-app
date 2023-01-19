import { useReducer } from 'react';
import {
  ADD_TO_DAY,
  UPDATE_DAY,
  CLEAR_DAY,
  DELETE_DAY,
  ADD_DAY,
  // TOGGLE_THEME
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  // const newDarkTheme = !state.darkTheme;
  switch (action.type) {
    // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
    case ADD_TO_DAY:
      return {
        ...state,
        dayOpen: true,
        day: [...state.day, action.climb],
      };

    case ADD_DAY:
      return {
        ...state,
        days: [...state.days, action.payload]
      };

    case UPDATE_DAY:
      return {
        ...state,
        day: [...action.day],
      };

    case CLEAR_DAY:
      return {
        ...state,
        dayOpen: false,
        day: [],
      };

    case DELETE_DAY:
      return {
        ...state,
        days: [...state.days].filter(
          (day) => day._id !== action.payload
        )
      };

    default:
      return state;
  }
};

export function useDayReducer(initialState) {
  return useReducer(reducer, initialState);
};
