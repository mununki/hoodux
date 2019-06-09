import React, { createContext, useContext, useReducer } from "react";

const HooduxContext = createContext(undefined);

export const useHooduxProvider = (reducer, initState) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const HooduxProvider = ({ children }) => (
    <HooduxContext.Provider value={{ state, dispatch }}>
      {children}
    </HooduxContext.Provider>
  );

  return { HooduxProvider };
};

export const useHoodux = () => {
  const { state, dispatch } = useContext(HooduxContext);

  return { state, dispatch };
};
