import React, { useState, useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import BuildIcon from "@material-ui/icons/Build";

//Components
import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";
import LastCars from "./LastCars";
import LastSales from "./LastSales";
import Spinner from "../spinner/Spinner";
import Grow from "@material-ui/core/Grow";

//Context
import brandContext from "../../context/brands/brandContext";
import locationContext from "../../context/locations/locationContext";
import partContext from "../../context/parts/partContext";
import carContext from "../../context/cars/carContext";
import saleContext from "../../context/sales/saleContext";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  card__brands: {
    backgroundColor: "#1565c0",
    color: "#FFF",
    height: 200,
  },
  card__cars: {
    backgroundColor: "#388e3c",
    color: "#FFF",
    height: 200,
  },
  card__parts: {
    backgroundColor: "#ab47bc",
    color: "#FFF",
    height: 200,
  },
  logos: {
    fontSize: 80,
  },
}));

function Dashboard() {
  const classes = useStyles();

  const brandsContext = useContext(brandContext);
  const { brands, getAllBrands } = brandsContext;

  const locationsContext = useContext(locationContext);
  const { getAllLocations } = locationsContext;

  const partsContext = useContext(partContext);
  const { parts, getAllParts } = partsContext;

  const carsContext = useContext(carContext);
  const { cars, getAllCars } = carsContext;

  const salesContext = useContext(saleContext);
  const { getAllSales } = salesContext;

  const [show, setShow] = useState(false);

  useEffect(() => {
    getAllBrands();
    getAllLocations();
    getAllParts();
    getAllCars();
    getAllSales();

    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <>
      <MenuAppBar />
      <div className={classes.offset}></div>
      <Box display="flex" flexDirection="row">
        <Sidebar />

        <Box mt={3} mx={2} flex={1}>
          <Grid
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4}>
              <Grow in={true}>
                <Box
                  className={classes.card__brands}
                  display="flex"
                  p={2}
                  alignItems="center"
                >
                  <Box flex={0.5} textAlign="center">
                    <Box>
                      <BubbleChartIcon className={classes.logos} />
                    </Box>
                    <Box>
                      <Typography variant="h4">Marcas</Typography>
                    </Box>
                  </Box>
                  <Box flex={0.5} textAlign="center">
                    <Typography variant="h1">
                      {brands.length !== 0 ? brands.length : 0}
                    </Typography>
                  </Box>
                </Box>
              </Grow>
            </Grid>

            <Grid xs={12} sm={4}>
              <Grow item in={true}>
                <Box
                  className={classes.card__cars}
                  display="flex"
                  p={2}
                  alignItems="center"
                >
                  <Box flex={0.5} textAlign="center">
                    <Box>
                      <DriveEtaIcon className={classes.logos} />
                    </Box>
                    <Box>
                      <Typography variant="h4">Coches</Typography>
                    </Box>
                  </Box>
                  <Box flex={0.5} textAlign="center">
                    <Typography variant="h1">
                      {cars.length !== 0 ? cars.length : 0}
                    </Typography>
                  </Box>
                </Box>
              </Grow>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Grow in={true}>
                <Box
                  className={classes.card__parts}
                  display="flex"
                  p={2}
                  alignItems="center"
                >
                  <Box flex={0.5} textAlign="center">
                    <Box>
                      <BuildIcon className={classes.logos} />
                    </Box>
                    <Box>
                      <Typography variant="h4">Piezas</Typography>
                    </Box>
                  </Box>
                  <Box flex={0.5} textAlign="center">
                    <Typography variant="h1">
                      {parts.length !== 0 ? parts.length : 0}
                    </Typography>
                  </Box>
                </Box>
              </Grow>
            </Grid>
          </Grid>

          <Box mt={2}>
            <Grid
              container
              spacing={4}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6}>
                <Box boxShadow={2} p={2}>
                  <Box>
                    <Typography variant="h6">
                      Últimos coches registrados
                    </Typography>
                  </Box>
                  <Box mt={1}>{show ? <LastCars /> : <Spinner />}</Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box boxShadow={2} p={2}>
                  <Box>
                    <Typography variant="h6">Últimas ventas</Typography>
                  </Box>
                  <Box mt={1}>{show ? <LastSales /> : <Spinner />}</Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
