import React, { useReducer } from "react";

import showerContext from "./showerContext";
import showerReducer from "./showerReducer";

import {
  MOSTRAR_OCULTAR
} from "../../types";

const ShowerState = (props) => {
  const initialState = {
    shower: false
  };

  const [state, dispatch] = useReducer(showerReducer, initialState);

  //Funtions.

  //Set shower
  const setShowerSiderbar = () => {

    dispatch({
      type: MOSTRAR_OCULTAR
    })
  }



  return (
    <showerContext.Provider
      value={{
        shower: state.shower,
        setShowerSiderbar
      }}
    >
      {props.children}
    </showerContext.Provider>
  );
};

export default ShowerState;

