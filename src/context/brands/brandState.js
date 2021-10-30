import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";

import brandContext from "./brandContext";
import brandReducer from "./brandReducer";

import {
  OBTENER_MARCAS,
  GUARDAR_MARCA_EXITO,
  GUARDAR_MARCA_ERROR,
  EDITAR_MARCA,
  OBTENER_UNA_MARCA,
  REINICIAR_MARCA,
  BUSCAR_MARCA
} from "../../types";

const BrandState = (props) => {
  const initialState = {
    brands: [],
    mensaje: null,
    marcaregistrada: null,
    currentbrand: null,
    marcasfiltradas: []
  };

  const [state, dispatch] = useReducer(brandReducer, initialState);

  //Functions

  //Add new brand -------------------------------------------------
  const addNewBrand = async (brand) => {
    try {
      const reply = await clienteAxios.post("/api/brands", brand);

      const alert = {
        title: "Exito",
        msg: "Nueva Marca adicionada",
        severity: "success",
      };

      dispatch({
        type: GUARDAR_MARCA_EXITO,
        payload: {
          alert,
          newbrand: reply.data,
        },
      });

      setTimeout(() => {
        dispatch({
          type: REINICIAR_MARCA,
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
        type: GUARDAR_MARCA_ERROR,
        payload: alert,
      });
    }
  };

  //Get alls brands
  const getAllBrands = async () => {
    try {
      const reply = await clienteAxios.get("/api/brands");

      dispatch({
        type: OBTENER_MARCAS,
        payload: reply.data,
      });
    } catch (error) {
      const alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };

      dispatch({
        type: GUARDAR_MARCA_ERROR,
        payload: alert,
      });
    }
  };

  //Update Brand
  const updateBrand = async (id, newbrand) => {
    try {
      const reply = await clienteAxios.put(`/api/brands/${id}`, newbrand);

      const alert = {
        title: "Exito",
        msg: "Marca actualizada",
        severity: "success",
      };

      dispatch({
        type: EDITAR_MARCA,
        payload: {
          alert,
          updatebrand: reply.data,
        },
      });

      setTimeout(() => {
        dispatch({
          type: REINICIAR_MARCA,
        });
      }, 1000);
    } catch (error) {
      const alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };

      dispatch({
        type: GUARDAR_MARCA_ERROR,
        payload: alert,
      });
    }
  };

  //Get an brand
  const getOneBrand = async (id) => {
    try {
      const reply = await clienteAxios.get(`/api/brands/${id}`);

      dispatch({
        type: OBTENER_UNA_MARCA,
        payload: reply.data,
      });
    } catch (error) {
      const alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };

      dispatch({
        type: GUARDAR_MARCA_ERROR,
        payload: alert,
      });
    }
  };

  const filtrarBusqueda = cadena => {

    dispatch({
      type: BUSCAR_MARCA,
      payload: cadena
    })

  }

  return (
    <brandContext.Provider
      value={{
        mensaje: state.mensaje,
        brands: state.brands,
        marcaregistrada: state.marcaregistrada,
        currentbrand: state.currentbrand,
        marcasfiltradas: state.marcasfiltradas,
        addNewBrand,
        getAllBrands,
        updateBrand,
        getOneBrand,
        filtrarBusqueda
      }}
    >
      {props.children}
    </brandContext.Provider>
  );
};

export default BrandState;
