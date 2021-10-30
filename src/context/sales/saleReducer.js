import {
  REALIZAR_VENTA,
  REALIZAR_VENTA_ERROR,
  REINICIAR_SALE,
  OBTENER_ALL_VENTAS
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REALIZAR_VENTA:
      return {
        ...state,
        mensajesales: action.payload.alert,
        sales: [...state.sales, action.payload.newsale],
      };
    case REALIZAR_VENTA_ERROR:
      return {
        ...state,
        mensajesales: null,
        sales: [],
      };
    case REINICIAR_SALE:
      return {
        ...state,
        mensajesales: null,
      };
    case OBTENER_ALL_VENTAS:
      return {
        ...state,
        sales: action.payload,
        mensajesales: null
      }  

    default:
      return state;
  }
};
