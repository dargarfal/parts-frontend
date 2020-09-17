import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';

//Context
import authContext from '../../context/authentication/authContext';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  usuario: {
    flexGrow: 1
  },
  usercontainer: {
    flexGrow: 1
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);

  const authsContext = useContext(authContext);
  const { autenticado, usuario } = authsContext;
  

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Autos, partes y piezas
          </Typography>
          {auth && (
            <div>
              <Grid container wrap="nowrap" spacing={2} className={classes.usercontainer}>
              <Grid item direction="column" className={classes.usuario}>
                <Typography variant="h6" align="right">
                  {/*usuario.userName*/} Usuario
                </Typography>
                <Typography  variant="body1" align="right">
                  {/*usuario.userRole*/} Role
                </Typography>
                <Typography  variant="body2" align="right">
                  Cerrar sesión
                </Typography>
              </Grid>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle fontSize="large"/>
              </IconButton>
              </Grid>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
