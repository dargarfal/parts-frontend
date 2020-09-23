import { act } from "react-dom/test-utils";
import {
  GUARDAR_LOCATION_EXITO,
  GUARDAR_LOCATION_ERROR,
  EDITAR_LOCATION,
  OBTENER_LOCATIONS,
  ELIMINAR_UBICACION,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case EDITAR_LOCATION:
    case GUARDAR_LOCATION_EXITO:
      return {
        ...state,
        mensaje: action.payload,
        locationregistrada: true,
      };
    case GUARDAR_LOCATION_ERROR:
      return {
        ...state,
        mensaje: action.payload,
        locationregistrada: false,
      };
    case OBTENER_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        mensaje: null,
        locationregistrada: null,
      };
    case ELIMINAR_UBICACION:
      return {
        ...state,
        mensaje: action.payload,
        locationregistrada: true,
      };
    default:
      return state;
  }
};
