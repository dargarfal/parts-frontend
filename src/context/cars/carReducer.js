import {
  GUARDAR_CAR_EXITO,
  GUARDAR_CAR_ERROR,
  EDITAR_CAR,
  OBTENER_ALL_CAR,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GUARDAR_CAR_EXITO:
      return {
        ...state,
        mensaje: action.payload.alert,
        currentcar: action.payload.car,
        cars: [...state.cars, action.payload.car],
        carregistrado: true,
      };
    case GUARDAR_CAR_ERROR:
      return {
        ...state,
        mensaje: action.payload,
        carregistrado: false,
      };
    case OBTENER_ALL_CAR:
      return {
        ...state,
        cars: action.payload,
        mensaje: null,
        carregistrado: null,
        currentcar: null,
      };
    default:
      return state;
  }
};
