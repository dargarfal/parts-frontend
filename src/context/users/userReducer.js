import { 
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  REINICIAR,
  ACTUALIZAR_USUARIO, 
  CAMBIAR_ESTADO, 
  OBTENER_USUARIOS,
  OBTENER_UN_USUARIO
 } from '../../types';

export default (state, action) => {
  switch(action.type){
    case ACTUALIZAR_USUARIO:
    case REGISTRO_EXITOSO:
      return{
        ...state,
        mensaje: action.payload,
        usuarioregistrado: true
      }
    case REGISTRO_ERROR:
      return{
        ...state,
        mensaje: action.payload,
        usuarioregistrado: false
      }
    case REINICIAR:
      return{
        ...state,
        mensaje: null,
        usuarioregistrado: false
      }  
    case OBTENER_USUARIOS:
      return {
        ...state,
        users: action.payload,
        mensaje: null,
        usuarioregistrado: false
      }
    case CAMBIAR_ESTADO:
      return {
        ...state,
        usuarioregistrado: true
      }
    case OBTENER_UN_USUARIO:
      return {
        ...state,
        currentuser: action.payload
      }  
    default:
      return state;
  }
}