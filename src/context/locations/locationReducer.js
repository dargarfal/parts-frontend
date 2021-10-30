import { act } from "react-dom/test-utils";
import {
  GUARDAR_LOCATION_EXITO,
  GUARDAR_LOCATION_ERROR,
  EDITAR_LOCATION,
  OBTENER_LOCATIONS,
  ELIMINAR_UBICACION,
  REINICIAR_LOCATION,
  BUSCAR_LOCATION
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GUARDAR_LOCATION_EXITO:
      return {
        ...state,
        locations: [...state.locations, action.payload.newlocation],
        mensaje: action.payload.alert,
        locationregistrada: true,
        locationfiltrada: []
      };
    case GUARDAR_LOCATION_ERROR:
      return {
        ...state,
        mensaje: action.payload,
        locationregistrada: false,
      };
    case EDITAR_LOCATION:
      return {
        ...state,
        locations: state.locations.map((location) =>
          location._id === action.payload.updatelocation._id
            ? action.payload.updatelocation
            : location
        ),
        mensaje: action.payload.alert,
        locationfiltrada: []
      };
    case OBTENER_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        mensaje: null,
        locationregistrada: null,
        locationfiltrada: action.payload
      };
    case ELIMINAR_UBICACION:
      return {
        ...state,
        mensaje: action.payload.alert,
        locations: state.locations.filter(
          (location) => location._id !== action.payload.locationid
        ),
        locationfiltrada: []
      };
    case REINICIAR_LOCATION:
      return {
        ...state,
        mensaje: null,
      };
      case BUSCAR_LOCATION:
      return {
        ...state,
        locationfiltrada: state.locations.filter(location => (
          location.nameLocation.toUpperCase().indexOf(action.payload.toUpperCase()) > -1
        ))
      }  
    default:
      return state;
  }
};
