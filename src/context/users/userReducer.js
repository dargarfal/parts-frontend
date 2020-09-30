import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  REINICIAR,
  ACTUALIZAR_USUARIO,
  CAMBIAR_ESTADO,
  OBTENER_USUARIOS,
  OBTENER_UN_USUARIO,
  CAMBIAR_CONTRASENA
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      return {
        ...state,
        mensaje: action.payload.alert,
        users: [...state.users, action.payload.newuser],
      };
    case REGISTRO_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };
    case CAMBIAR_ESTADO:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case CAMBIAR_CONTRASENA:  
    case ACTUALIZAR_USUARIO:
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload.updateuser._id
            ? action.payload.updateuser
            : user
        ),
        mensaje: action.payload.alert,
      };
    case REINICIAR:
      return {
        ...state,
        mensaje: null,
      };
    case OBTENER_USUARIOS:
      return {
        ...state,
        users: action.payload,
        mensaje: null,
      };
    case OBTENER_UN_USUARIO:
      return {
        ...state,
        currentuser: action.payload,
      };
    default:
      return state;
  }
};
