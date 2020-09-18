import React, {useState, useEffect, useContext} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import alertaContext from '../../context/alert/alertContext';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Alerta() {

  const alertasContext = useContext(alertaContext);
  const { alerta } = alertasContext;

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    
    if(alerta !== null){
      
      setOpen(true);
    }
  },[alerta])


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
   
     <Snackbar 
      open={open} 
      autoHideDuration={2000} 
      onClose={handleClose}
      anchorOrigin={{vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={alerta.severity}>
        {alerta.msg}
        </Alert>
    </Snackbar>
    
  );
}
