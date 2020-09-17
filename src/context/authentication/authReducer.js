import { 
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION
 } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case  LOGIN_EXITOSO:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        mensaje: null,
        cargado: true
      }
    case LOGIN_ERROR:
      return {
        ...state,
        mensaje: action.payload
      }
    case OBTENER_USUARIO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true,
        token: localStorage.getItem('token'),
        cargado: true
      }    
    default:
      return state;
  }


}