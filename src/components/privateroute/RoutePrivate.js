import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../../context/authentication/authContext";

const RoutePrivate = ({ component: Component, ...props }) => {
  const authsContext = useContext(authContext);
  const { autenticado, cargado, usuarioAutenticado } = authsContext;

  useEffect(() => {
    usuarioAutenticado();

    //eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !autenticado && !cargado ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default RoutePrivate;
