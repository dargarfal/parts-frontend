import React, { useReducer } from 'react';
import alertaContext from "./alertContext";
import alertaReducer from "./alertReducer";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types"; 

const AlertaState = (props) => {

  const initialState = {
    alerta: null
  };

  const [state, dispatch] = useReducer(alertaReducer, initialState)

  //Funciones
  const mostrarAlerta = (title, msg, severity) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        title,
        msg,
        severity        
      }
    });

    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA
      })
    }, 2000)

  }

  return  (
    <alertaContext.Provider
      value={{
        alerta: state.alerta,
        mostrarAlerta
      }}
    >
      {props.children}
    </alertaContext.Provider>
  );
};

export default AlertaState;