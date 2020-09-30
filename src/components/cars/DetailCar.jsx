import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//Components
import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";
import DetailGeneralDataCar from "./DetailGeneralDataCar";
import DetailPartsCar from "./DetailPartCar";
import DetailImagesCar from "./DetailImagesCar";

//Context
import carContext from "../../context/cars/carContext";
import imageContext from "../../context/images/imageContext";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

function DetailCar({ match }) {
  const classes = useStyles();

  const carsContext = useContext(carContext);
  const { currentcar, getOneCar } = carsContext;

  const imagesContext = useContext(imageContext);
  const { getAllImages, restartImages } = imagesContext;

  useEffect(() => {
    getOneCar(match.params.id);
    restartImages();

    setTimeout(() => {
      setComponent(<DetailGeneralDataCar />);
    }, 100);
  }, []);

  const [value, setValue] = useState(0);
  const [component, setComponent] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        setComponent(<DetailGeneralDataCar />);
        break;
      case 1:
        getAllImages(currentcar._id);
        setComponent(<DetailImagesCar />);
        break;
      case 2:
        setComponent(<DetailPartsCar />);
      default:
        break;
    }
  };

  return (
    <>
      <MenuAppBar />
      <div className={classes.offset}></div>
      <Box display="flex" flexDirection="row">
        <Sidebar />

        <Box mt={3} ml={2} flex={1} mr={2}>
          <Box bgcolor="#FFF" p={2} boxShadow={2}>
            <Typography variant="h4">Detalles del coche</Typography>
            <Box display="flex">
              <Box mt={1}>
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleChange}
                  aria-label="disabled tabs example"
                >
                  <Tab label="Datos generales" />
                  <Tab label="Imagenes" />
                  <Tab label="Partes y piezas" />
                </Tabs>
              </Box>
            </Box>
          </Box>
          {component}
        </Box>
      </Box>
    </>
  );
}

export default DetailCar;
