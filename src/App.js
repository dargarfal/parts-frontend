import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Brands from './components/brands/Brands';
import Locations from './components/locations/Locations';
import AddCar from './components/cars/AddCar';
import ListCars from './components/cars/ListCars';
import Parts from './components/parts/Parts';
import Users from './components/users/Users';

//Provider
import AuthState from './context/authentication/authState';
import AlertState from './context/alert/alertState';

import { createMuiTheme,  ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[600],
    },
    secondary: {
      main: '#536dfe'
    },
  },
});



function App() {
  return (
   
    <ThemeProvider theme={theme}>
      <AuthState>
        <AlertState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/brands" component={Brands} />
              <Route exact path="/locations" component={Locations} />
              <Route exact path="/addcar" component={AddCar} />
              <Route exact path="/cars" component={ListCars} />
              <Route exact path="/parts" component={Parts} />
              <Route exact path="/users" component={Users} />
            </Switch>
          </Router>
        </AlertState>
      </AuthState>
    </ThemeProvider>
    
  );
}

export default App;
