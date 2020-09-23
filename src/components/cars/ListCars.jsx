import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, TextField } from "@material-ui/core";

//Components
import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";
import AllCars from "./AllCars";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

function ListCars() {
  const classes = useStyles();

  return (
    <>
      <MenuAppBar />
      <div className={classes.offset}></div>
      <Box display="flex" flexDirection="row">
        <Sidebar />

        <Box mt={3} ml={2} flex={1} mr={2}>
          <Box bgcolor="#FFF" p={2} boxShadow={2}>
            <Typography variant="h4">Gestión de coches</Typography>
            <Box display="flex">
              <Box>
                <TextField
                  id="outlined-helperText"
                  label="Matrícula"
                  helperText="Escriba la matrícula del coche que desea buscar"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  size="small"
                />
              </Box>
            </Box>
          </Box>

          <Box>
            <AllCars />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ListCars;
