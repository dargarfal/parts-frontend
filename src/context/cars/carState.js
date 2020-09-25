import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";

import carContext from "./carContext";
import carReducer from "./carReducer";

import {
  GUARDAR_CAR_EXITO,
  GUARDAR_CAR_ERROR,
  EDITAR_CAR,
  OBTENER_ALL_CAR,
} from "../../types";

const CarState = (props) => {
  const initialState = {
    cars: [],
    mensaje: null,
    carregistrado: null,
    currentcar: null,
  };

  const [state, dispatch] = useReducer(carReducer, initialState);

  //Functions
  const addNewCar = async (newcar) => {
    try {
      const reply = await clienteAxios.post("/api/cars", newcar);

      const alert = {
        title: "Exito",
        msg: "Datos generales guardados",
        severity: "success",
      };

      dispatch({
        type: GUARDAR_CAR_EXITO,
        payload: {
          alert,
          car: reply.data,
        },
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
        type: GUARDAR_CAR_ERROR,
        payload: alert,
      });
    }
  };

  //Get Alls Cars
  const getAllCars = async () => {
    try {
      const reply = await clienteAxios.get("/api/cars");

      dispatch({
        type: OBTENER_ALL_CAR,
        payload: reply.data,
      });
    } catch (error) {
      alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };
    }

    dispatch({
      type: GUARDAR_CAR_ERROR,
      payload: alert,
    });
  };

  return (
    <carContext.Provider
      value={{
        cars: state.cars,
        mensaje: state.mensaje,
        carregistrado: state.carregistrado,
        currentcar: state.currentcar,
        getAllCars,
        addNewCar,
      }}
    >
      {props.children}
    </carContext.Provider>
  );
};

export default CarState;
