import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Brands from "./components/brands/Brands";
import Locations from "./components/locations/Locations";
import AddCar from "./components/cars/AddCar";
import ListCars from "./components/cars/ListCars";
import Parts from "./components/parts/Parts";
import Users from "./components/users/Users";
import AddUser from "./components/users/AddUser";

//Provider
import AuthState from "./context/authentication/authState";
import AlertState from "./context/alert/alertState";
import UserState from "./context/users/userState";
import BrandState from "./context/brands/brandState";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { green, blue } from "@material-ui/core/colors";

//Componente para la validadcion de accesos a los componentes (Ruta Privada)
import RoutePrivate from "./components/privateroute/RoutePrivate";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[800],
    },
    secondary: {
      main: green[700],
    },
  },
});

toast.configure({
  position: toast.POSITION.TOP_RIGHT,
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthState>
        <AlertState>
          <UserState>
            <BrandState>
              <Router>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <RoutePrivate exact path="/dashboard" component={Dashboard} />
                  <RoutePrivate exact path="/brands" component={Brands} />
                  <RoutePrivate exact path="/locations" component={Locations} />
                  <RoutePrivate exact path="/addcar" component={AddCar} />
                  <RoutePrivate exact path="/cars" component={ListCars} />
                  <RoutePrivate exact path="/parts" component={Parts} />
                  <RoutePrivate exact path="/users" component={Users} />
                  <RoutePrivate exact path="/adduser" component={AddUser} />
                </Switch>
              </Router>
            </BrandState>
          </UserState>
        </AlertState>
      </AuthState>
    </ThemeProvider>
  );
}

export default App;
