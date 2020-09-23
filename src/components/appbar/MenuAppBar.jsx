import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

//Context
import authContext from "../../context/authentication/authContext";
import { Box, IconButton, Tooltip } from "@material-ui/core";

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
    flexGrow: 1,
  },
  usercontainer: {
    flexGrow: 1,
  },
  role: {
    textTransform: "uppercase",
    fontSize: 22,
  },
  button: {
    backgroundColor: "#e53935"
  }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();

  const authsContext = useContext(authContext);
  const { autenticado, usuario, cerrarSesion } = authsContext;

  const onCloseSesion = () => {
    cerrarSesion();

    if(!autenticado){
      props.history.push('/login');
    }
    
  }

 

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Box display="flex" alignItems="center" justifyContent="space-between" flex="1">
          <Box display="flex" alignItems="center">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography variant="h4">
              Partes y Piezas
            </Typography>
          </Box>
          </Box>
          <Box display="flex">
           <Box display="flex" flexDirection="column">
            <Typography variant="h6" align="right">
              {usuario.userName}
            </Typography>
            <Typography variant="body2" >
              {usuario.userRole}
            </Typography>
            </Box>

            <Box mx={1}>
            <Tooltip title="Cerrar sesión" arrow>
              <IconButton color="inherit" className={classes.button} onClick={onCloseSesion}>
                <PowerSettingsNewIcon />
              </IconButton>
            </Tooltip>
            </Box>
           
            </Box>
            </Box> 
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
