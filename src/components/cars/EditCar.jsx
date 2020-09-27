import React, { useContext, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import InputAdornment from "@material-ui/core/InputAdornment";

import { toast } from "react-toastify";

//Context
import carContext from "../../context/cars/carContext";
import locationContext from "../../context/locations/locationContext";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  container: {
    backgroundColor: "#FFF",
    padding: 16,
  },
}));

function EditCar({ car, brand, location, setOpencar }) {
  const classes = useStyles();

  //Car Context
  const carsContext = useContext(carContext);
  const { updateCar } = carsContext;

  //Location Context
  const locationsContext = useContext(locationContext);
  const { locations } = locationsContext;

  const [newcar, setNewCar] = useState({
    modelCar: car.modelCar,
    yearCar: car.yearCar,
    plateCar: car.plateCar,
    dateplateCar: car.dateplateCar,
    chasisCar: car.chasisCar,
    locationCar: location._id,
  });

  const {
    modelCar,
    yearCar,
    plateCar,
    dateplateCar,
    chasisCar,
    locationCar,
  } = newcar;

  const onChange = (e) => {
    setNewCar({
      ...newcar,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdateCar = e => {
    e.preventDefault();

    if(modelCar === car.modelCar &&
      yearCar === car.yearCar &&
      plateCar === car.plateCar &&
      dateplateCar === car.dateplateCar &&
      chasisCar === car.chasisCar &&
      locationCar === location._id){
        toast.error('No se registraron cambios. Datos iguales')
      }else{
        updateCar(car._id, newcar);
        setOpencar(false);
      }
  };

  return (
    <div>
      <Box className={classes.container} my={2} mx={2} flex={1} boxShadow={2}>

        <Box ml={1} my={1} >
          <Typography variant="h5">
            Actualizar datos del coche
          </Typography>
        </Box>
        <form onSubmit={onUpdateCar}>
          <Box display="flex" justifyContent="space-between">
            <Box mx={1}>
              <TextField
                id="outlined-select-currency"
                label="Marca"
                helperText="Marca del coche"
                variant="outlined"
                fullWidth
                size="small"
                disabled={true}
                value={brand.nameBrand}
                margin="normal"
              />
            </Box>
            <Box mx={1}>
              <TextField
                id="outlined-helperText"
                label="Modelo"
                helperText="Defina el nuevo modelo del coche"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                onChange={onChange}
                value={modelCar}
                name="modelCar"
              />
            </Box>
            <Box mx={1}>
              <TextField
                id="outlined-helperText"
                type="number"
                label="Año"
                helperText="Inserte el año de fabricación del coche"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                onChange={onChange}
                value={yearCar}
                name="yearCar"
              />
            </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
            <Box flex={0.48} mx={1}>
              <TextField
                id="outlined-helperText"
                label="Matrícula"
                helperText="Inserte el nuevo número de matrícula"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                onChange={onChange}
                value={plateCar}
                name="plateCar"
              />
            </Box>
            <Box flex={0.48} mx={1}>
              <TextField
                
                id="date"
                label={dateplateCar.slice(0, 10)}
                type="date"
                fullWidth
                margin="normal"
                size="small"
                helperText="Seleccione la nueva fecha de la matrícula"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={onChange}
                value={dateplateCar}
                name="dateplateCar"
              />
            </Box>
            </Box>
            <Box mx={1}>
              <TextField
                id="outlined-helperText"
                label="Defina nuevo número de chasi"
                helperText="Inserte el número de chasi del coche"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                onChange={onChange}
                value={chasisCar}
                name="chasisCar"
              />
            </Box>
            <Box mx={1}>
              <TextField
                id="outlined-select-currency"
                select
                label="Ubicación"
                helperText="Defina el nuevo número de matrícula"
                variant="outlined"
                fullWidth
                size="small"
                onChange={onChange}
                value={locationCar}
                name="locationCar"
                margin="normal"
                
              >
                {locations.map((location) => (
                  <MenuItem value={location._id}>
                    {location.nameLocation}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          
          
            <Box flex={1} my={2} >
              <Box mx={1}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<SaveIcon />}
                >
                  Actualizar Datos del coche
                </Button>
              </Box>
            
          </Box>
        </form>
      </Box>
    </div>
  );
}

export default EditCar;
