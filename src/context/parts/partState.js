import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";

import partContext from "./partContext";
import partReducer from "./partReducer";

import {
  GUARDAR_PIEZA_EXITO,
  GUARDAR_PIEZA_ERROR,
  OBTENER_ALL_PIEZAS,
  OBTENER_PIEZAS_DE_COCHE,
  ACTUALIZAR_PIEZA,
  REINICIAR_PART,
} from "../../types";

const PartState = (props) => {
  const initialState = {
    parts: [],
    mensaje: null,
    partgistrada: null,
    currentpart: null,
    partsfilter: [],
  };

  const [state, dispatch] = useReducer(partReducer, initialState);

  //Functions
  // Add new part ------------------------------------------
  const addNewPart = async (newpart) => {
    try {
      const reply = await clienteAxios.post("/api/parts", newpart);

      const alert = {
        title: "Exito",
        msg: "Pieza agregada",
        severity: "success",
      };

      dispatch({
        type: GUARDAR_PIEZA_EXITO,
        payload: {
          alert,
          newpart: reply.data,
        },
      });

      setTimeout(() => {
        dispatch({
          type: REINICIAR_PART,
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
        type: GUARDAR_PIEZA_ERROR,
        payload: alert,
      });
    }
  };

  //Get parts of car
  const getPartOfCar = async (idcar) => {
    try {
      const reply = await clienteAxios.get(`/api/parts/car/${idcar}`);
      console.log(reply.data);
      dispatch({
        type: OBTENER_PIEZAS_DE_COCHE,
        payload: reply.data,
      });
    } catch (error) {
      const alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };

      dispatch({
        type: GUARDAR_PIEZA_ERROR,
        payload: alert,
      });
    }
  };

  //Update part
  const updatePart = async (idpart, newpart) => {
    try {
      const reply = await clienteAxios.put(`/api/parts/${idpart}`, newpart);

      const alert = {
        title: "Exito",
        msg: "Pieza actualizada",
        severity: "success",
      };

      dispatch({
        type: ACTUALIZAR_PIEZA,
        payload: {
          alert,
          newpart: reply.data,
        },
      });

      setTimeout(() => {
        dispatch({
          type: REINICIAR_PART,
        });
      }, 1000);
    } catch (error) {
      const alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };

      dispatch({
        type: GUARDAR_PIEZA_ERROR,
        payload: alert,
      });
    }
  };

  //Get All parts
  const getAllParts = async () => {
    try {
      const reply = await clienteAxios.get("/api/parts");

      dispatch({
        type: OBTENER_ALL_PIEZAS,
        payload: reply.data,
      });
    } catch (error) {
      const alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };

      dispatch({
        type: GUARDAR_PIEZA_ERROR,
        payload: alert,
      });
    }
  };

  return (
    <partContext.Provider
      value={{
        parts: state.parts,
        mensaje: state.mensaje,
        partgistrada: state.partgistrada,
        currentpart: state.currentpart,
        partsfilter: state.partsfilter,
        addNewPart,
        getPartOfCar,
        getAllParts,
        updatePart,
      }}
    >
      {props.children}
    </partContext.Provider>
  );
};

export default PartState;
