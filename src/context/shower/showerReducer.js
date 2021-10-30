import {
  MOSTRAR_OCULTAR
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case MOSTRAR_OCULTAR:
      return {
        ...state,
        shower: !state.shower
      }
   
    default:
      return state;
  }
};
