import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";

import saleContext from "./saleContext";
import saleReducer from "./saleReducer";

import {
  REALIZAR_VENTA,
  REALIZAR_VENTA_ERROR,
  REINICIAR_SALE,
  OBTENER_ALL_VENTAS
} from "../../types";

const SaleState = (props) => {
  const initialState = {
    sales: [],
    mensajesales: null,
  };

  const [state, dispatch] = useReducer(saleReducer, initialState);

  //Funtions
  // Add new sale ----------------------------------------------------------
  const addNewSale = async (newsale) => {
    try {
      const reply = await clienteAxios.post("/api/sales", newsale);

      const alert = {
        title: "Exito",
        msg: "Venta realizada",
        severity: "success",
      };

      dispatch({
        type: REALIZAR_VENTA,
        payload: {
          alert,
          newsale: reply.data,
        },
      });

      setTimeout(() => {
        dispatch({
          type: REINICIAR_SALE,
        });
      }, 1000);
    } catch (error) {
      let alert;

      if (error.response.status === 406) {
        alert = {
          title: "Error",
          msg: error.response.data.errors[0].msg,
          severity: "error",
        };
      } else {
        alert = {
          title: "Error",
          msg: error.response.data.msg,
          severity: "error",
        };
      }

      dispatch({
        type: REALIZAR_VENTA_ERROR,
        payload: alert
      });
    }
  };

  // Get all sales -------------------------------------------------
  const getAllSales = async () => {

    try {

      const reply = await clienteAxios.get('/api/sales');

      dispatch({
        type: OBTENER_ALL_VENTAS,
        payload: reply.data
      })
      
    } catch (error) {
     const alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };
    

    dispatch({
      type: REALIZAR_VENTA_ERROR,
      payload: alert
    });
    }
  }

  return (
    <saleContext.Provider
      value={{
        sales: state.sales,
        mensajesales: state.mensajesales,
        addNewSale,
        getAllSales
      }}
    >
      {props.children}
    </saleContext.Provider>
  );
};

export default SaleState;
