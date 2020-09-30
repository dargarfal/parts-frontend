import React, { useContext, useEffect } from "react";
import { Avatar, Box, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Context
import carContext from "../../context/cars/carContext";
import authContext from "../../context/authentication/authContext";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 300,
    height: 170,
  },
  bold: {
    fontWeight: "bolder",
  },
}));

function DetailGeneralDataCar() {
  const classes = useStyles();

  const carsContext = useContext(carContext);
  const { currentcar } = carsContext;

  const authsContext = useContext(authContext);
  const { usuario } = authsContext;

  useEffect(() => {}, []);

  return (
    <Box boxShadow={2} bgcolor="#FFF" my={2} p={2}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Box>
            <Typography variant="h3">
              Matrícula: {currentcar.plateCar}
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="h5">
              Modelo:{" "}
              <span className={classes.bold}>
                {currentcar.brandCar.nameBrand}
              </span>
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="h5">
              Modelo:{" "}
              <span className={classes.bold}>{currentcar.modelCar}</span>
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="h5">
              Año: <span className={classes.bold}>{currentcar.yearCar}</span>
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="h5">
              Ubicación:{" "}
              <span className={classes.bold}>
                {currentcar.locationCar.nameLocation}
              </span>
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="h5">
              Chasi:{" "}
              <span className={classes.bold}>{currentcar.chasisCar}</span>
            </Typography>
          </Box>

          <Box my={2}>
            <Typography variant="h5">
              F. Matriculación:{" "}
              <span className={classes.bold}>
                {currentcar.dateplateCar.slice(0, 10)}
              </span>
            </Typography>
          </Box>
          <Box my={2}>
            <Typography variant="h5">
              F. Alta:{" "}
              <span className={classes.bold}>
                {currentcar.registerdayCar.slice(0, 10)}
              </span>
            </Typography>
          </Box>
        </Box>

        <Box>
          {usuario.userRole === "administrador" ? (
            <Box>
              <Typography variant="h4" color="primary">
                Costo: €{" "}
                <span className={classes.bold}>{currentcar.priceCar}</span>
              </Typography>
            </Box>
          ) : null}

          <Box>
            <Typography variant="h4" color="secondary">
              Ventas: €{" "}
              <span className={classes.bold}>{currentcar.currentsaleCar}</span>
            </Typography>
          </Box>
          <Divider />
          {usuario.userRole === "administrador" ? (
            <Box>
              <Typography variant="h4">
                Beneficio: €{" "}
                <span className={classes.bold}>
                  {currentcar.currentsaleCar - currentcar.priceCar}
                </span>
              </Typography>
            </Box>
          ) : null}
        </Box>

        <Box>
          <img
            className={classes.avatar}
            variant="square"
            src={currentcar.brandCar.logoBrand}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DetailGeneralDataCar;
