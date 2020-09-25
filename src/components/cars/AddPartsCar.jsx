import React, { useState, useEffect, useContext } from "react";
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
//import ListPartsFilter from "../parts/ListPartsFilter";
import ListParts from "../parts/ListParts";

import { Link } from "react-router-dom";

import { toast } from "react-toastify";

//Context
import partContext from "../../context/parts/partContext";
//Context
import carContext from "../../context/cars/carContext";

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
  },
}));

function AddPartsCar(props) {
  const classes = useStyles();

  //Car Context
  const carsContext = useContext(carContext);
  const { currentcar } = carsContext;

  const partsContext = useContext(partContext);
  const { mensaje, partregistrada, parts } = partsContext;

  useEffect(() => {
    if (mensaje) {
      switch (mensaje.severity) {
        case "error":
          toast.error(mensaje.msg);
          break;
        case "success":
          toast.success(mensaje.msg);
        default:
          break;
      }
    }
  }, [mensaje, partregistrada]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClick = (props) => {
    toast.success("Coche guardado");
  };

  return (
    <div>
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
            <Link to="/cars" className={classes.link}>
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

        {parts.length !== 0 ? (
          <Box>
            <ListParts filtercar={currentcar._id} />
          </Box>
        ) : null}

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
            <AddPart
              idcar={currentcar ? currentcar._id : null}
              setOpen={setOpen}
            />
          </Fade>
        </Modal>
      </Box>
    </div>
  );
}

export default AddPartsCar;
