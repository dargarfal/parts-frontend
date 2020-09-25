import React, { useContext, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import InputAdornment from "@material-ui/core/InputAdornment";

import { toast } from "react-toastify";

//Components
import HeaderCar from "./HeaderCar";
import Spinner from "../spinner/Spinner";

//Context
import carContext from "../../context/cars/carContext";
import brandContext from "../../context/brands/brandContext";
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

function GeneralData({ setStep }) {
  const classes = useStyles();

  //Car Context
  const carsContext = useContext(carContext);
  const { carregistrado, addNewCar } = carsContext;

  //Brand Context
  const brandsContext = useContext(brandContext);
  const {
    currentbrand,
    brands,
    marcaregistrada,
    getOneBrand,
    getAllBrands,
  } = brandsContext;

  //Location Context
  const locationsContext = useContext(locationContext);
  const { locations, locationregistrada, getAllLocations } = locationsContext;

  useEffect(() => {
    getAllBrands();
    getAllLocations();

    if (carregistrado) {
      setStep(1);
    }
  }, [carregistrado]);

  const [newcar, setNewCar] = useState({
    brandCar: "",
    modelCar: "",
    yearCar: "",
    plateCar: "",
    dateplateCar: "",
    chasisCar: "",
    registerdayCar: "",
    locationCar: "",
    priceCar: "",
  });

  const {
    brandCar,
    modelCar,
    yearCar,
    plateCar,
    dateplateCar,
    chasisCar,
    registerdayCar,
    locationCar,
    priceCar,
  } = newcar;

  const onChange = (e) => {
    setNewCar({
      ...newcar,
      [e.target.name]: e.target.value,
    });
  };

  const onBlur = (e) => {
    getOneBrand(e.target.value);
  };

  const [show, setShow] = useState(false);

  const onAddNewCar = (e) => {
    e.preventDefault();

    if (
      brandCar !== "" &&
      modelCar !== "" &&
      yearCar !== "" &&
      plateCar !== "" &&
      dateplateCar !== "" &&
      chasisCar !== "" &&
      registerdayCar !== "" &&
      locationCar !== ""
    ) {
      addNewCar(newcar);
      /* setStep(1);
       if(carregistrado){
          setShow(true)

          setTimeout(() => {
            setShow(false);
            
          }, 2000)
        }*/
    } else {
      toast.error("Todos los campos deben ser llenados");
    }
  };

  return (
    <div>
      {show ? (
        <Spinner />
      ) : (
        <Box className={classes.container} my={2} mx={2} flex={1} boxShadow={2}>
          <HeaderCar
            titulo="Datos generales del coche"
            marca={currentbrand ? currentbrand.logoBrand : null}
          />
          <form onSubmit={onAddNewCar}>
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
                  onChange={onChange}
                  onBlur={onBlur}
                  value={brandCar}
                  name="brandCar"
                  margin="normal"
                >
                  {brands.map((brand) => (
                    <MenuItem value={brand._id}>{brand.nameBrand}</MenuItem>
                  ))}
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
                  onChange={onChange}
                  value={modelCar}
                  name="modelCar"
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
                  onChange={onChange}
                  value={yearCar}
                  name="yearCar"
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
                  onChange={onChange}
                  value={priceCar}
                  name="priceCar"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">€</InputAdornment>
                    ),
                  }}
                ></TextField>
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
                  onChange={onChange}
                  value={plateCar}
                  name="plateCar"
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
                  onChange={onChange}
                  value={dateplateCar}
                  name="dateplateCar"
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
                  onChange={onChange}
                  value={chasisCar}
                  name="chasisCar"
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
                  onChange={onChange}
                  value={registerdayCar}
                  name="registerdayCar"
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
      )}
    </div>
  );
}

export default GeneralData;
