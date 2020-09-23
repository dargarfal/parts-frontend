import React, { Fragment, useState} from "react";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';
import { Box } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
  all: {
    backgroundColor: 'primary'
  }
}));


function DeleteLocation({deleted, setDeleted}) {
  const classes = useStyles();

  /*const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    
    setDeleted(false);
    alert('cerrado sin accion')
  };*/

  const handleClose = () => {
    setDeleted(false);
   
  }

  const onEliminarUbicacion = () => {
   
    //aqui se llama al context para eliminar
    setDeleted(false)
    
  }

  return (
    <div>
      
      
      <Snackbar
        className={classes.all}
        anchorOrigin={{vertical: "top", horizontal: "center" }}
        open={deleted}
        
        action={
          <Fragment>
            <Button color="#000" size="small" onClick={onEliminarUbicacion}>
              SI, Eliminar...
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Fragment>
        }
      >
        <Alert onClose={handleClose} severity="error">
          <Box display="flex" alignItems="center">
          <Box>
        "¿Está seguro que desea eliminar la Ubicación definitivamente?"
        </Box>
        <Box mx={2}>
        <Button
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
              variant="contained"
              color="primary"
            >
              SI, Eliminar...
            </Button>
            </Box>
            </Box>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default DeleteLocation;
