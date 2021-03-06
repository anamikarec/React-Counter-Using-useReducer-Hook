import React from "react";

export const AppContext = React.createContext();

const initState = {
  counter: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case "decrement": {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    case "reset": {
      return {
        ...state,
        counter: 0
      };
    }
    default: {
      return state;
    }
  }
};

function AppContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContextProvider };
