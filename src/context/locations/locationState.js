import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";

import locationContext from "./locationContext";
import locationReducer from "./locationReducer";

import {
  GUARDAR_LOCATION_EXITO,
  GUARDAR_LOCATION_ERROR,
  EDITAR_LOCATION,
  OBTENER_LOCATIONS,
  ELIMINAR_UBICACION,
  REINICIAR_LOCATION,
  BUSCAR_LOCATION
} from "../../types";

const LocationState = (props) => {
  const initialState = {
    locations: [],
    mensaje: null,
    locationregistrada: null,
    locationfiltrada: []
  };

  const [state, dispatch] = useReducer(locationReducer, initialState);

  //Functions
  //Add new location
  const addNewLocation = async (newlocation) => {
    try {
      const reply = await clienteAxios.post("/api/locations", newlocation);

      const alert = {
        title: "Exito",
        msg: "Ubicación guardada",
        severity: "success",
      };

      dispatch({
        type: GUARDAR_LOCATION_EXITO,
        payload: {
          alert,
          newlocation: reply.data,
        },
      });

      setTimeout(() => {
        dispatch({
          type: REINICIAR_LOCATION,
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
        type: GUARDAR_LOCATION_ERROR,
        payload: alert,
      });
    }
  };

  //Get all locations
  const getAllLocations = async () => {
    try {
      const reply = await clienteAxios.get("/api/locations");

      dispatch({
        type: OBTENER_LOCATIONS,
        payload: reply.data,
      });
    } catch (error) {
      const alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };

      dispatch({
        type: GUARDAR_LOCATION_ERROR,
        payload: alert,
      });
    }
  };

  //Update an location
  const updateLocation = async (id, newlocation) => {
    try {
      const reply = await clienteAxios.put(`/api/locations/${id}`, newlocation);

      console.log(reply.data);
      const alert = {
        title: "Exito",
        msg: "Ubicación actualizada",
        severity: "success",
      };

      dispatch({
        type: EDITAR_LOCATION,
        payload: {
          alert,
          updatelocation: reply.data,
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
        type: GUARDAR_LOCATION_ERROR,
        payload: alert,
      });
    }
  };

  //Delete location
  const deleteLocation = async (id) => {
    try {
      const reply = await clienteAxios.delete(`/api/locations/${id}`);

      const alert = {
        title: "Exito",
        msg: reply.data.msg,
        severity: "success",
      };

      dispatch({
        type: ELIMINAR_UBICACION,
        payload: {
          alert,
          locationid: id,
        },
      });

      setTimeout(() => {
        dispatch({
          type: REINICIAR_LOCATION,
        });
      }, 1000);
    } catch (error) {
      const alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };

      dispatch({
        type: GUARDAR_LOCATION_ERROR,
        payload: alert,
      });
    }
  };

  const filtrarBusqueda = cadena => {

    dispatch({
      type: BUSCAR_LOCATION,
      payload: cadena
    })

  }

  return (
    <locationContext.Provider
      value={{
        locations: state.locations,
        mensaje: state.mensaje,
        locationregistrada: state.locationregistrada,
        locationfiltrada: state.locationfiltrada,
        addNewLocation,
        getAllLocations,
        updateLocation,
        deleteLocation,
        filtrarBusqueda
      }}
    >
      {props.children}
    </locationContext.Provider>
  );
};

export default LocationState;
