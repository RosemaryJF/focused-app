import React, { createContext, useContext } from "react";
import { useDayReducer } from './reducers'

const FocusContext = createContext();
const { Provider } = FocusContext;

const FocusProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useDayReducer({
    dayDate: '',
    crag: '',
    climb: '',
    focus: '',
    attempts: '',
    rests: '',
    beta: '',
    notes: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useFocusContext = () => {
  return useContext(FocusContext);
};

export { FocusProvider, useFocusContext };