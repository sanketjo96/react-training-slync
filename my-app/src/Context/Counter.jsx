import React, { useReducer } from "react";
import { initialState, reducer } from "../Reducers/Counter";

export const CounterContext = React.createContext();

export const CounterProvider = (props) => {
  const [newState, dispatch] = useReducer(reducer, initialState)
  return (
    <CounterContext.Provider value={{ count: newState.count, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  )
}