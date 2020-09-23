import {
  OBTENER_MARCAS,
  GUARDAR_MARCA_EXITO,
  GUARDAR_MARCA_ERROR,
  EDITAR_MARCA,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case EDITAR_MARCA:
    case GUARDAR_MARCA_EXITO:
      return {
        ...state,
        mensaje: action.payload,
        marcaregistrada: true,
      };
    case GUARDAR_MARCA_ERROR:
      return {
        ...state,
        mensaje: action.payload,
        marcaregistrada: false,
      };
    case OBTENER_MARCAS:
      return {
        ...state,
        brands: action.payload,
        mensaje: null,
        marcaregistrada: null,
      };

    default:
      return state;
  }
};
