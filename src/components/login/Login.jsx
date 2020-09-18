import React, { useState, useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../copyright/Copyright';

import Alerta from '../alert/Alerta'; 

//Context
import authContext from '../../context/authentication/authContext';
import alertaContext from '../../context/alert/alertContext';




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.pexels.com/photos/461824/pexels-photo-461824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    marginBottom: 50
  }
}));

export default function SignInSide(props) {

  const alertasContext = useContext(alertaContext);
  const { alerta, mostrarAlerta } = alertasContext;

  const authsContext = useContext(authContext);
  const { mensaje, autenticado, loginUser } = authsContext;

  //State para manejar cuando se muestra la alerta
  const [showalert, setshowalert] = useState();


  useEffect(() => {

    if(autenticado){
      
      props.history.push('/dashboard');
    }

    if(mensaje){
      mostrarAlerta(mensaje.title, mensaje.msg, mensaje.severity);
    }

    //Para manejar cuando se muestra la alerta
    if(alerta){
      setshowalert(<Alerta />)
    }else{
      setshowalert(null)
    }
  }, [mensaje, autenticado, props.history])

  const classes = useStyles();

  const [user, setUser] = useState({
    userName: "",
    userPass: ""
  })

  const { userName, userPass } = user;

  const onChance = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onLogin = e => {
    e.preventDefault();

    if(userName !== '' && userPass !== ''){

      try {
        loginUser(user);
      } catch (error) {
        mostrarAlerta('Error', 'Problema de conexión con el servidor', 'error');
      }
      
    }else{
      mostrarAlerta('Error', 'Ambos campos deben ser llenados', 'error')
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      
      {
      //si existe se muestra la alerta
      showalert
      }
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Box className={classes.title}>
            <Typography variant="h3" color="primary">
              Autos, partes y piezas
            </Typography>
          </Box>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Autenticación
          </Typography>
          <form className={classes.form} noValidate onSubmit={onLogin}>
            <TextField
              error={alerta ? true : false}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Usuario"
              name="userName"
              autoComplete="email"
              autoFocus
              value={userName}
              onChange={onChance}
            />
            <TextField
              error={alerta ? true : false}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="userPass"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={userPass}
              onChange={onChance}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
            {alerta ?
              <Alerta />
                :
              null
            }
            
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}