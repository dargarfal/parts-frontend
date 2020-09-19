import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Part from "./Part";

import AddPart from "./AddPart";

const useStyles = makeStyles((theme) => ({
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
}));

function ListParts() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box
        flex={1}
        bgcolor="#FFF"
        mt={2}
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h5">Listado de piezas</Typography>

        <Box >
          <Tooltip title="Adicionar pieza" arrow>
            <Fab color="primary" aria-label="add" onClick={handleOpen}>
              <AddIcon />
            </Fab>
          </Tooltip>
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
            <AddPart />
          </Fade>
        </Modal>
      </Box>
      <Divider />
      <Box bgcolor="#FFF" boxShadow={2}>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Código</TableCell>
                <TableCell>Matrícula coche</TableCell>
                <TableCell>Logo</TableCell>
                <TableCell>Marca</TableCell>
                <TableCell>Modelo</TableCell>
                <TableCell>Año</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Part />
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default ListParts;
