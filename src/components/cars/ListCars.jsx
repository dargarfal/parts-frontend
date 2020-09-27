import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, TextField } from "@material-ui/core";

import { toast } from "react-toastify";

//Components
import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";
import AllCars from "./AllCars";

//Context
import carContext from "../../context/cars/carContext";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

function ListCars() {
  const classes = useStyles();

  const carsContext = useContext(carContext);
  const { mensaje } = carsContext;

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
