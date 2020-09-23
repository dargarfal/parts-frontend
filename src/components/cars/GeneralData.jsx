import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import InputAdornment from '@material-ui/core/InputAdornment';

import HeaderCar from './HeaderCar';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  container: {
    backgroundColor: "#FFF",
    padding: 16,
  },
}));

function GeneralData({setStep}) {
  const classes = useStyles();

const onSubmit = e  => {
  e.preventDefault();
  setStep(1);
} 
  return (
    <div>
      <Box className={classes.container} my={2} mx={2} flex={1} boxShadow={2}>
       <HeaderCar 
        titulo="Datos generales del coche"
       />
       <form onSubmit={onSubmit}>
        <Box
          display="flex"
          mt={2}
          alignContent="center"
          justifyContent="space-between"
        >
          <Box>
            <TextField
              id="outlined-select-currency"
              select
              label="Marca"
              helperText="Seleccione la marca del coche"
              variant="outlined"
              fullWidth
              size="small"
              
              margin="normal"
            >
              <MenuItem>administrador</MenuItem>
              <MenuItem>usuario</MenuItem>
            </TextField>
          </Box>
          <Box>
            <TextField
              id="outlined-helperText"
              label="Modelo"
              helperText="¿Cuál es el modelo del auto?"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              
            />
          </Box>
          <Box>
            <TextField
              id="outlined-helperText"
              type="number"
              label="Año"
              helperText="Inserte el año de fabricación del coche"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              
            />
          </Box>
          <Box>
            <TextField
              id="outlined-helperText"
              type="number"
              label="Costo"
              helperText="Defina el costo del auto"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>,
              }}
              
            >
              
            </TextField>
          </Box>
        </Box>
        <Box
          display="flex"
          alignContent="center"
          justifyContent="space-between"
        >
          <Box>
            <TextField
              id="outlined-helperText"
              label="Matrícula"
              helperText="Inserte el número de matrícula del coche"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              
            />
          </Box>
          <Box>
            <TextField
              id="date"
              label="Fecha de matrícula"
              type="date"
              margin="normal"
              size="small"
              helperText="Seleccione la fecha de la matrícula del coche"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Box>
          <Box>
            <TextField
              id="outlined-helperText"
              label="Número de chasi"
              helperText="Inserte el número de chasi del coche"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              
            />
          </Box>
          <Box>
            <TextField
              id="outlined-select-currency"
              select
              label="Ubicación"
              helperText="Seleccione la ubicación del coche"
              variant="outlined"
              fullWidth
              size="small"
              
              margin="normal"
            >
              <MenuItem>administrador</MenuItem>
              <MenuItem>usuario</MenuItem>
            </TextField>
          </Box>
        </Box>
        <Box
          display="flex"
          alignContent="center"
          justifyContent="space-between"
        >
          <Box>
            <TextField
              id="date"
              label="Fecha de registro"
              type="date"
              margin="normal"
              size="small"
              helperText="Seleccione la decha de registro del coche"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
            >
              Guardar Datos Generales
            </Button>
            </Box>
          </Box>
        </Box>
        </form>
      </Box>
    </div>
  );
}

export default GeneralData;
