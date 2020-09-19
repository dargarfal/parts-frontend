import React from "react";
import { Box, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Components
import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";
import ListParts from "./ListParts";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

function Parts() {
  const classes = useStyles();

  return (
    <>
      <MenuAppBar />
      <div className={classes.offset}></div>
      <Box display="flex" flexDirection="row">
        <Sidebar />

        <Box mt={3} ml={2} flex={1} mr={2}>
        <Box  bgcolor="#FFF" p={2} boxShadow={2}>
          <Typography variant="h4">Gestión de piezas</Typography>
          <Box display="flex" >
          <Box>
            <TextField
              id="outlined-helperText"
              label="Nombre"
              helperText="Escriba el nombre de la pieza que desea buscar"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
            />
          </Box>
          <Box ml={4}>
            <TextField
              id="outlined-helperText"
              label="Código"
              helperText="Escriba el código de la pieza que desea buscar"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
            />
          </Box>
          </Box>
        </Box>
        <ListParts />
        </Box>
        
      </Box>
    </>
  );
}

export default Parts;
