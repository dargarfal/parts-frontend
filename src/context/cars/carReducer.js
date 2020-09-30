import {
  GUARDAR_CAR_EXITO,
  GUARDAR_CAR_ERROR,
  EDITAR_CAR,
  OBTENER_ALL_CAR,
  OBTENER_UN_CAR,
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
    case EDITAR_CAR:
      return {
        ...state,
        cars: state.cars.map((car) =>
          car._id === action.payload.updatecar._id
            ? action.payload.updatecar
            : car
        ),
        mensaje: action.payload.alert,
      };
    case OBTENER_UN_CAR:
      return {
        ...state,
        currentcar: action.payload,
      };
    default:
      return state;
  }
};
