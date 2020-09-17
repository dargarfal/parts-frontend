import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import { 
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION
 } from '../../types';


const AuthContext = (props) => {

  const initialState = {
    token: localStorage.getItem('token'),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargado: false
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Functions
  const loginUser = async dataUser => {

    try {
     const reply =  await clienteAxios.post('/api/login', dataUser);

     dispatch({
       type: LOGIN_EXITOSO,
       payload: reply.data
     })

     usuarioAutenticado();

    } catch (error) {
      localStorage.removeItem('token');

      let alertaerror;
      
      if(error.response.status === 406){
          alertaerror = {
          msg: error.response.data.errores[0].msg,
          severity: 'error',
          title: 'Error'
        }
      }else{
          alertaerror = {
          msg: error.response.data.msg,
          severity: 'error',
          title: 'Error'
        }
      }    

      dispatch({
        type: LOGIN_ERROR,
        payload: alertaerror
      })
    }
  }

  //Obteniendo el usuario autenticado
  const usuarioAutenticado = async () => {
    
    const token = localStorage.getItem('token');
    
    if(token){
      tokenAuth(token);
    } 

      try {
        const usuarioAuth = await clienteAxios.get('api/login');

        dispatch({
          type: OBTENER_USUARIO,
          payload: usuarioAuth.data
        })
        
      } catch (error) {
        
        const alertaerror = {
              msg: error.response.data.msg,
              severity: 'error',
              title: 'Error'
        }  

        dispatch({
          type: LOGIN_ERROR,
          payload: alertaerror
        })
      }
    
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargado: state.cargado,
        loginUser
      }}
    >
      {props.children}
    </authContext.Provider>

  )


}

export default AuthContext;