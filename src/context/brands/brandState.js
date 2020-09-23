import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";

import brandContext from "./brandContext";
import brandReducer from "./brandReducer";

import {
  OBTENER_MARCAS,
  GUARDAR_MARCA_EXITO,
  GUARDAR_MARCA_ERROR,
  EDITAR_MARCA,
  ACTUALIZAR_USUARIO,
} from "../../types";

const BrandState = (props) => {
  const initialState = {
    brands: [],
    mensaje: null,
    marcaregistrada: null,
  };

  const [state, dispatch] = useReducer(brandReducer, initialState);

  //Functions

  //Add new brand -------------------------------------------------
  const addNewBrand = async (brand) => {
    try {
      await clienteAxios.post("/api/brands", brand);

      const alert = {
        title: "Exito",
        msg: "Nueva Marca adicionada",
        severity: "success",
      };

      dispatch({
        type: GUARDAR_MARCA_EXITO,
        payload: alert,
      });
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
        msg: reply.data.msg,
        severity: "success",
      };

      dispatch({
        type: EDITAR_MARCA,
        payload: alert,
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

  return (
    <brandContext.Provider
      value={{
        mensaje: state.mensaje,
        brands: state.brands,
        marcaregistrada: state.marcaregistrada,
        addNewBrand,
        getAllBrands,
        updateBrand,
      }}
    >
      {props.children}
    </brandContext.Provider>
  );
};

export default BrandState;
