import { useReducer } from 'react';
import {
  ADD_TO_DAY,
  UPDATE_DAY,
  CLEAR_DAY,
  DELETE_DAY,
  TOGGLE_THEME
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
    case ADD_TO_DAY:
      return {
        ...state,
        dayOpen: true,
        day: [...state.day, action.climb],
      };

    case UPDATE_DAY:
      return {
        ...state,
        climb: [...action.climb],
      };

    case CLEAR_DAY:
      return {
        ...state,
        dayOpen: false,
        day: [],
      };

    case DELETE_DAY:
      return {
        days: [
          ...state.days.filter(day => day._id !== action.payload)
        ]
      };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useDayReducer(initialState) {
  return useReducer(reducer, initialState);
}

export const themeReducer = (state, { type }) => {
  const newDarkTheme = !state.darkTheme;
  switch (type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        darkTheme: newDarkTheme,
      };
    }
    default:
      return state;
  }
};

export function useThemeReducer(initialState) {
  return useReducer(themeReducer, initialState);
}