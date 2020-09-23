import React, { useState, useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

//Components
import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";
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
                <Tooltip title="Adicionar nuevo usuario" arrow>
                  <Link to="/adduser">
                    <Fab color="primary" aria-label="add">
                      <AddIcon />
                    </Fab>
                  </Link>
                </Tooltip>
              </Box>
            </Box>
          </Box>

          <Box my={2} mr={2} boxShadow={2}>
            <ListUser />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Users;
