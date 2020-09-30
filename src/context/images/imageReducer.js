import {
  ELIMINAR_IMAGE,
  ERROR_IMAGES,
  OBTENER_IMAGES_CAR,
  REINICIAR_IMAGES,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ERROR_IMAGES:
      return {
        ...state,
        mensajeimages: action.payload,
      };
    case OBTENER_IMAGES_CAR:
      return {
        ...state,
        images: action.payload,
        mensajeimages: null,
      };
    case REINICIAR_IMAGES:
      return {
        ...state,
        images: [],
        mensajeimages: null,
      };
    case ELIMINAR_IMAGE:
      return {
        ...state,
        mensajeimages: action.payload.alert,
        images: state.images.filter(
          (img) => img._id !== action.payload.deletedimage._id
        ),
      };
    default:
      return state;
  }
};
