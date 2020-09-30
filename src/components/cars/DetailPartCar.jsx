import React, { useState, useContext, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

import { toast } from "react-toastify";

//Context
import carContext from "../../context/cars/carContext";
import partContext from "../../context/parts/partContext";

//Components
import AddPart from "../../components/parts/AddPart";
import ListParts from "../../components/parts/ListParts";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
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

function DetailPartsCar() {
  const classes = useStyles();

  const carsContext = useContext(carContext);
  const { currentcar } = carsContext;

  const partsContext = useContext(partContext);
  const { mensaje } = partsContext;

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
  }, [mensaje]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box boxShadow={2} bgcolor="#FFF" mt={2} p={2}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h4"></Typography>
        </Box>

        <Box my={1} mx={2}>
          <Tooltip title="Adicionar pieza" arrow>
            <Fab color="primary" aria-label="add" onClick={handleOpen}>
              <AddIcon />
            </Fab>
          </Tooltip>
        </Box>
      </Box>

      <Box>
        <ListParts filtercar={currentcar._id} />
      </Box>

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
  );
}

export default DetailPartsCar;
