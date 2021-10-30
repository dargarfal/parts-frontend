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
        carsfiltrados: action.payload
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
    case FILTRAR_CAR_PLATE:
      return {
        ...state,
        carsfiltrados: state.cars.filter(car => (
          car.plateCar.toUpperCase().indexOf(action.payload.toUpperCase()) > -1
        ))
      }   
    case FILTRAR_CAR_BRAND:
      return {
        ...state,
        carsfiltrados: state.cars.filter(car => (car.brandCar === action.payload))
      }   
    case FILTRAR_CAR_MODEL:
      return {
        ...state,
        carsfiltrados: state.carsfiltrados.filter(car => (car.modelCar === action.payload))
      } 
      case FILTRAR_CAR_YEAR:
        return {
          ...state,
          carsfiltrados: state.carsfiltrados.filter(car => (car.yearCar === action.payload))
        }
        case FILTRAR_CAR_LOCATION:
          return {
            ...state,
            carsfiltrados: state.carsfiltrados.filter(car => (car.locationCar === action.payload))
          }        
    default:
      return state;
  }
};
