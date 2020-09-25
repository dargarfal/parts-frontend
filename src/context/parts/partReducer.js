import {
  GUARDAR_PIEZA_EXITO,
  GUARDAR_PIEZA_ERROR,
  OBTENER_ALL_PIEZAS,
  OBTENER_PIEZAS_DE_COCHE,
  ACTUALIZAR_PIEZA,
  REINICIAR_PART,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GUARDAR_PIEZA_EXITO:
      return {
        ...state,
        mensaje: action.payload.alert,
        parts: [...state.parts, action.payload.newpart],
        partregistrada: true,
      };
    case GUARDAR_PIEZA_ERROR:
      return {
        ...state,
        mensaje: action.payload,
        partregistrada: false,
      };
    case OBTENER_PIEZAS_DE_COCHE:
      return {
        ...state,
        partsfilter: action.payload,
        partregistrada: false,
        mensaje: null,
      };
    case OBTENER_ALL_PIEZAS:
      return {
        ...state,
        parts: action.payload,
        partsfilter: [],
        partregistrada: false,
        mensaje: null,
        currentpart: null,
      };
    case ACTUALIZAR_PIEZA:
      return {
        ...state,
        parts: state.parts.map((part) =>
          part._id === action.payload.newpart._id
            ? action.payload.newpart
            : part
        ),
        mensaje: action.payload.alert,
        partregistrada: true,
      };
    case REINICIAR_PART:
      return {
        ...state,
        mensaje: null,
      };
    default:
      return state;
  }
};
