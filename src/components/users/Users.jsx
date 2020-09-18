import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Tooltip from '@material-ui/core/Tooltip';

//Components
import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";
import AddUser from "./AddUser";
import ListUser from "./ListUser";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
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

function Users() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuAppBar />
      <div className={classes.offset}></div>
      <Box display="flex" flexDirection="row">
        <Sidebar />

        <Box mt={3} ml={2} flexGrow={1}>
          <Box bgcolor="#FFF" mr={2} boxShadow={2}>
            <Box p={2}>
              <Typography variant="h4">Gestión de usuarios</Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={2}
            >
              <Box flex={0.6}>
                <TextField
                  id="outlined-helperText"
                  label="Buscar Usuario"
                  helperText="Escriba el nombre del usuario que desea buscar"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
              </Box>
              <Box ml={10}>
              <Tooltip title="Adicionar nuevo usuario"  arrow>
                <Fab color="primary" aria-label="add" onClick={handleOpen}>
                  <AddIcon />
                </Fab>
                </Tooltip>
              </Box>
            </Box>
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
              <AddUser />
            </Fade>
          </Modal>
          
          <Box my={2} mr={2} boxShadow={2}>
          <ListUser />
          </Box>
          
        </Box>
      </Box>
    </>
  );
}

export default Users;
