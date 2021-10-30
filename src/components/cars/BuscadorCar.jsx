import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Divider,
  Tooltip,
  Fab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import AutorenewIcon from "@material-ui/icons/Autorenew";

import brandContext from "../../context/brands/brandContext";
import locationContext from "../../context/locations/locationContext";
import carContext from "../../context/cars/carContext";

const useStyles = makeStyles((theme) => ({
  campo: {
    width: 150,
  },
  campo__matricula: {
    width: 200
  }
}));

function BuscadorCar() {
  const classes = useStyles();

  const brandsContext = useContext(brandContext);
  const { brands } = brandsContext;

  const locationsContext = useContext(locationContext);
  const { locations } = locationsContext;

  const carsContext = useContext(carContext);
  const {
    carsfiltrados,
    filtrarPlate,
    filtrarBrand,
    filtrarModel,
    filtrarYear,
    getAllCars,
    filtrarLocation
  } = carsContext;

  const [plateCar, setPlateCar] = useState();
  const [brandCar, setBrandCar] = useState();
  const [modelCar, setModelCar] = useState();
  const [yearCar, setYearCar] = useState();

  const [disablemodel, setDisableModel] = useState(true);
  const [disableyear, setDisableYear] = useState(true);

  const onClear = () => {
    getAllCars();
    setPlateCar("");
    setBrandCar("");
    setYearCar("");
    setModelCar("");
    setInputBrandCar("")
    setDisableModel(true);
    setDisableYear(true);
    
  };

  const onBuscarPlate = (e) => {
    setPlateCar(e.target.value);
    filtrarPlate(e.target.value);
  };

  const onBuscarBrand = (e) => {
    filtrarBrand(e.target.value);
    setDisableModel(false);
    
  };

  const onBuscarModel = (e) => {
    filtrarModel(e.target.value);
    setDisableYear(false);
  };

  const onBuscarYear = (e) => {
    filtrarYear(e.target.value);
  };

  const onBuscarLocation = (e) => {
    filtrarLocation(e.target.value);
  };

  const [inputbrandCar, setInputBrandCar] = useState("");

  
  return (
    <div>
      <Box display="flex">
        <Box mr={2}>
          <TextField
            className={classes.campo__matricula}
            id="outlined-helperText"
            label="Filtrar solo por Matrícula"
            variant="outlined"
            margin="normal"
            fullWidth
            neme="plateCar"
            value={plateCar}
            onChange={onBuscarPlate}
            size="small"
            disabled={!disablemodel}
          />
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box ml={2}>
          <TextField
            className={classes.campo}
            id="outlined-select-currency"
            select
            label="Marca"
            variant="outlined"
            fullWidth
            size="small"
            name="brandCar"
            margin="normal"
            onChange={onBuscarBrand}
            value={brandCar}
            
            inputValue={inputbrandCar}
          >
            
            {brands.map((brand) => (
              <MenuItem value={brand._id}>{brand.nameBrand}</MenuItem>
            ))}
          </TextField>
        </Box>

        <Box ml={2}>
          <TextField
            className={classes.campo}
            id="outlined-helperText"
            label="Modelo"
            select
            disabled={disablemodel}
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={onBuscarModel}
            value={modelCar}
            size="small"
            name="modelCar"
          >
            {carsfiltrados.map((car) => (
              <MenuItem value={car.modelCar}>{car.modelCar}</MenuItem>
            ))}
          </TextField>
        </Box>
        <Box mx={2}>
          <TextField
            className={classes.campo}
            id="outlined-helperText"
            type="number"
            label="Año"
            select
            disabled={disableyear}
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={onBuscarYear}
            value={yearCar}
            size="small"
            name="yearCar"
          >
            {carsfiltrados.map((car) => (
              <MenuItem value={car.yearCar}>{car.yearCar}</MenuItem>
            ))}
          </TextField>
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box mx={2}>
          <TextField
            className={classes.campo}
            id="outlined-select-currency"
            select
            label="Ubicación"
            variant="outlined"
            fullWidth
            size="small"
            name="locationCar"
            margin="normal"
            onClick={onBuscarLocation}
          >
            {locations.map((location) => (
              <MenuItem value={location._id}>{location.nameLocation}</MenuItem>
            ))}
          </TextField>
        </Box>

        <Divider orientation="vertical" flexItem />

        <Box ml={2} display="flex" alignItems="center">
          <Tooltip title="Reinicirar búsqueda" arrow>
            <Fab
              color="primary"
              aria-label="restart"
              size="small"
              onClick={onClear}
            >
              <AutorenewIcon />
            </Fab>
          </Tooltip>
        </Box>
      </Box>
    </div>
  );
}

export default BuscadorCar;
