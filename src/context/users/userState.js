import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";

import userContext from "./userContext";
import userReducer from "./userReducer";

import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  REINICIAR,
  ACTUALIZAR_USUARIO,
  OBTENER_USUARIOS, 
  CAMBIAR_ESTADO,
  OBTENER_UN_USUARIO
} from "../../types";


const UserState = (props) => {
  const initialState = {
    users: [],
    currentuser: null,
    mensaje: null,
    usuarioregistrado: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  //Funtions.

  //Add new user
  const addNewUser = async (user) => {
    try {
      const reply = await clienteAxios.post("/api/users", user);

      const alert = {
        title: "Exito",
        msg: "Usuario insertado correctamente",
        severity: "success",
      };

        dispatch({
          type: REGISTRO_EXITOSO,
          payload: alert
        });

      setTimeout(() => {
        dispatch({
          type: REINICIAR
        });
      }, 3000);  
      

    } catch (error) {
      let alert;

      if (error.response.status === 406) {
        alert = {
          title: "Error",
          msg: error.response.data.errors[0].msg,
          severity: "error",
        };
      } else {
        alert = {
          title: "Error",
          msg: error.response.data.msg,
          severity: "error",
        };
      }

      console.log(alert);
      dispatch({
        type: REGISTRO_ERROR,
        payload: alert,
      });
    }
  };

  //Get all users
  const getAllUsers = async () => {

    try {
      const reply = await clienteAxios.get('/api/users');

      dispatch({
        type: OBTENER_USUARIOS,
        payload: reply.data
      })
    } catch (error) {

      alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      }; 

      dispatch({
        type: REGISTRO_ERROR,
        payload: alert,
      });
    }
  }

  //Update an user -------------------------------------------------------
  const updateUser = async (id, user) => {

    try {
      const reply = await clienteAxios.put(`/api/users/${id}`, user);

      console.log(reply);

      const alert = {
        title: "Exito",
        msg: "Usuario actualizado correctamente",
        severity: "success",
      };

        dispatch({
          type: ACTUALIZAR_USUARIO,
          payload: alert
        });

      setTimeout(() => {
        dispatch({
          type: REINICIAR
        });
      }, 3000);  


    } catch (error) {
      let alert;

      if (error.response.status === 406) {
        alert = {
          title: "Error",
          msg: error.response.data.errors[0].msg,
          severity: "error",
        };
      } else {
        alert = {
          title: "Error",
          msg: error.response.data.msg,
          severity: "error",
        };
      }

      dispatch({
        type: REGISTRO_ERROR,
        payload: alert
      });
    }
  }

  //Change user's status
  const changeStatusUser = async id => {
    
    try {

      await clienteAxios.put(`/api/users/enable/${id}`);

      dispatch({
        type: CAMBIAR_ESTADO
      })

    } catch (error) {
      alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      }; 
      
      dispatch({
        type: REGISTRO_ERROR,
        payload: alert,
      });
    }
  }

  //Get one user
  const getOneUser = async id => {
    
    try {
      const reply = await clienteAxios.get(`/api/users/${id}`);
      console.log(reply);

      dispatch({
        type: OBTENER_UN_USUARIO,
        payload: reply.data
      })

    } catch (error) {
      alert = {
        title: "Error",
        msg: error.response.data.msg,
        severity: "error",
      }; 
      
      dispatch({
        type: REGISTRO_ERROR,
        payload: alert,
      });
    }
  } 
  


  return (
    <userContext.Provider
      value={{
        users: state.users,
        mensaje: state.mensaje,
        usuarioregistrado: state.usuarioregistrado,
        currentuser: state.currentuser,
        changeStatusUser,
        getAllUsers,
        addNewUser,
        updateUser,
        getOneUser
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
