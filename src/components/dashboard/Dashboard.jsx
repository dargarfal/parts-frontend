import React, { useState, useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

//Components
import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";

//Context
import brandContext from "../../context/brands/brandContext";
import locationContext from "../../context/locations/locationContext";
import partContext from "../../context/parts/partContext";
import carContext from "../../context/cars/carContext";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

function Dashboard() {
  const classes = useStyles();

  const brandsContext = useContext(brandContext);
  const { getAllBrands } = brandsContext;

  const locationsContext = useContext(locationContext);
  const { getAllLocations } = locationsContext;

  const partsContext = useContext(partContext);
  const { getAllParts } = partsContext;

  const carsContext = useContext(carContext);
  const { getAllCars } = carsContext;

  useEffect(() => {
    getAllBrands();
    getAllLocations();
    getAllParts();
    getAllCars();
  }, []);
  return (
    <>
      <MenuAppBar />
      <div className={classes.offset}></div>
      <Box display="flex" flexDirection="row">
        <Sidebar />

        <Box mt={3} ml={2} border={2} flex={1}>
          Desde Dashboard
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
