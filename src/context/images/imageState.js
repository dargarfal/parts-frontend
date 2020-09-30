import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";

import imageReducer from "./imageReducer";
import imageContext from "./imageContext";

import {
  OBTENER_IMAGES_CAR,
  ELIMINAR_IMAGE,
  ERROR_IMAGES,
  REINICIAR_IMAGES,
} from "../../types";

const ImageState = (props) => {
  const initialState = {
    images: [],
    mensajeimages: null,
  };

  const [state, dispatch] = useReducer(imageReducer, initialState);

  //Funtions
  //Get all images -------------------------------------------
  const getAllImages = async (idcar) => {
    try {
      const reply = await clienteAxios.get(`/api/images/car/${idcar}`);

      dispatch({
        type: OBTENER_IMAGES_CAR,
        payload: reply.data,
      });
    } catch (error) {
      alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };

      dispatch({
        type: ERROR_IMAGES,
        payload: alert,
      });
    }
  };

  //Restar images
  const restartImages = () => {
    dispatch({
      type: REINICIAR_IMAGES,
    });
  };

  //Delete image
  const deleteImage = async (idimage) => {
    try {
      const reply = await clienteAxios.delete(`/api/images/${idimage}`);

      const alert = {
        title: "Exito",
        msg: "Imagen eliminada",
        severity: "success",
      };

      dispatch({
        type: ELIMINAR_IMAGE,
        payload: {
          alert,
          deletedimage: reply.data,
        },
      });
    } catch (error) {
      const alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      };

      dispatch({
        type: ERROR_IMAGES,
        payload: alert,
      });
    }
  };

  return (
    <imageContext.Provider
      value={{
        images: state.images,
        mensajeimages: state.mensajeimages,
        getAllImages,
        restartImages,
        deleteImage,
      }}
    >
      {props.children}
    </imageContext.Provider>
  );
};

export default ImageState;
