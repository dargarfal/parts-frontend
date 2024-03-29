import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";

import carContext from "./carContext";
import carReducer from "./carReducer";

import {
  GUARDAR_CAR_EXITO,
  GUARDAR_CAR_ERROR,
  EDITAR_CAR,
  OBTENER_ALL_CAR,
  OBTENER_UN_CAR,
  FILTRAR_CAR_PLATE,
  FILTRAR_CAR_BRAND,
  FILTRAR_CAR_MODEL,
  FILTRAR_CAR_YEAR,
  FILTRAR_CAR_LOCATION
} from "../../types";

const CarState = (props) => {
  const initialState = {
    cars: [],
    mensaje: null,
    carregistrado: null,
    currentcar: null,
    carsfiltrados: []
  };

  const [state, dispatch] = useReducer(carReducer, initialState);

  //Functions

  //Add new car -------------------------------------
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

  //Get Alls Cars ---------------------------------------------------
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

  //Update an Car ---------------------------------------------------
  const updateCar = async (idcar, data) => {
    try {
      const reply = await clienteAxios.put(`/api/cars/${idcar}`, data);

      const alert = {
        title: "Exito",
        msg: "Coche actualizado",
        severity: "success",
      };

      dispatch({
        type: EDITAR_CAR,
        payload: {
          alert,
          updatecar: reply.data,
        },
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

  // Get an Car ---------------------------------------------------
  const getOneCar = async (idcar) => {
    try {
      const reply = await clienteAxios.get(`/api/cars/${idcar}`);

      dispatch({
        type: OBTENER_UN_CAR,
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

  const filtrarPlate = cadena => {

    dispatch({
      type: FILTRAR_CAR_PLATE,
      payload: cadena
    })
  }
  
  const filtrarBrand = idbrand => {

    dispatch({
      type:FILTRAR_CAR_BRAND,
      payload: idbrand
    })
  }

  const filtrarModel = model => {

    dispatch({
      type: FILTRAR_CAR_MODEL,
      payload: model
    })
  }

 

  const filtrarYear = year => {

    dispatch({
      type: FILTRAR_CAR_YEAR,
      payload: year
    })
  }

  const filtrarLocation = location => {

    dispatch({
      type: FILTRAR_CAR_LOCATION,
      payload: location
    })
  }



  return (
    <carContext.Provider
      value={{
        cars: state.cars,
        mensaje: state.mensaje,
        carregistrado: state.carregistrado,
        currentcar: state.currentcar,
        carsfiltrados: state.carsfiltrados,
        getAllCars,
        addNewCar,
        updateCar,
        getOneCar,
        filtrarPlate,
        filtrarBrand,
        filtrarModel,
        filtrarYear,
        filtrarLocation
      }}
    >
      {props.children}
    </carContext.Provider>
  );
};

export default CarState;
