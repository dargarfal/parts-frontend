import React, {useState, useEffect, useContext} from "react";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import DoneAllIcon from "@material-ui/icons/DoneAll";

import HeaderCar from "./HeaderCar";
import AddPart from "../parts/AddPart";

import { Link } from "react-router-dom";

//Alerta
import Alerta from '../alert/Alerta'; 
import alertaContext from '../../context/alert/alertContext';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  container: {
    backgroundColor: "#FFF",
    padding: 16,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  link: {
    textDecoration: "none",
    color: "#3e3e3e",
  }
}));

function AddPartsCar(props) {
  const classes = useStyles();

  //Alerta
  const alertasContext = useContext(alertaContext);
  const { alerta, mostrarAlerta } = alertasContext;
  //State para manejar cuando se muestra la alerta
  const [showalert, setshowalert] = useState();

  useEffect(() => {

    //Para manejar cuando se muestra la alerta
    if(alerta){
      setshowalert(<Alerta />)
    }else{
      setshowalert(null)
    }
   
  }, [alerta])

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClick = (props) => {
    mostrarAlerta("Exito", "Choche guardado con exito", "success");
  };

  return (
    <div>
      {
      //si existe se muestra la alerta
      showalert
      }
      <Box className={classes.container} my={2} mx={2} flex={1} boxShadow={2}>
        <HeaderCar titulo="Agregando piezas al coche" />

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box my={2}>
            <Tooltip title="Adicionar pieza" arrow>
              <Fab color="primary" aria-label="add" onClick={handleOpen}>
                <AddIcon />
              </Fab>
            </Tooltip>
          </Box>
          <Box>
          <Link to="/cars" className={classes.link} >
            <Button
              onClick={onClick}
              variant="contained"
              color="primary"
              endIcon={<DoneAllIcon />}
            >
              Listo, Terminar...
            </Button>
            </Link>
          </Box>
        </Box>

        <Box></Box>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <AddPart />
          </Fade>
        </Modal>
      </Box>
    </div>
  );
}

export default AddPartsCar;
