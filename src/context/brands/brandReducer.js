import {
  OBTENER_MARCAS,
  GUARDAR_MARCA_EXITO,
  GUARDAR_MARCA_ERROR,
  EDITAR_MARCA,
  OBTENER_UNA_MARCA,
  REINICIAR_MARCA,
  BUSCAR_MARCA
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GUARDAR_MARCA_EXITO:
      return {
        ...state,
        mensaje: action.payload.alert,
        brands: [...state.brands, action.payload.newbrand],
        marcaregistrada: true,
        marcasfiltradas: []
      };
    case GUARDAR_MARCA_ERROR:
      return {
        ...state,
        mensaje: action.payload,
        marcaregistrada: false,
      };
    case EDITAR_MARCA:
      return {
        ...state,
        brands: state.brands.map((brand) =>
          brand._id === action.payload.updatebrand._id
            ? action.payload.updatebrand
            : brand
        ),
        mensaje: action.payload.alert,
        marcasfiltradas: []
      };
    case OBTENER_MARCAS:
      return {
        ...state,
        brands: action.payload,
        mensaje: null,
        marcaregistrada: null,
        marcasfiltradas: action.payload
      };
    case OBTENER_UNA_MARCA:
      return {
        ...state,
        currentbrand: action.payload,
      };
    case REINICIAR_MARCA:
      return {
        ...state,
        mensaje: null
      };
    case BUSCAR_MARCA:
      return {
        ...state,
        marcasfiltradas: state.brands.filter(bran => (
          bran.nameBrand.toUpperCase().indexOf(action.payload.toUpperCase()) > -1
        ))
      }  

    default:
      return state;
  }
};
