import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


//Components
import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";
import GeneralData from "./GeneralData";
import UploadImages from './UploadImages';
import AddPartsCar from './AddPartsCar';


const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

function AddCar() {
  const classes = useStyles();

  const [step, setStep] = useState(0);
  let componentshow;
  console.log(step);

  switch (step) {
    case 0:
      componentshow = <GeneralData setStep={setStep}/>;
      break;
    case 1:
      componentshow = <UploadImages setStep={setStep}/>;
      break;
    case 2:
      componentshow = <AddPartsCar />;
      break;
    default:
      break;
  }

  return (
    <>
      <MenuAppBar />
      <div className={classes.offset}></div>
      <Box display="flex" >
        <Sidebar />
        <Box display="flex" flexDirection="column" flex={1} my={2}>
        <Box mt={3} flex={1} p={2} bgcolor="#FFF" mx={2} boxShadow={2}>
          <Box display="flex">
            <Box>
              <Typography variant="h4">Agregar Coche</Typography>
            </Box>
            <Box flex={1}>
              <Stepper activeStep={step} alternativeLabel>
                <Step>
                  <StepLabel >Guardando Datos General</StepLabel>
                </Step>
                <Step>
                  <StepLabel >Subiendo imagenes</StepLabel>
                </Step>
                <Step>
                  <StepLabel >Agregando piezas al coche</StepLabel>
                </Step>
              </Stepper>
            </Box>
          </Box>
          
        </Box>
        {componentshow}
        </Box>
        
      </Box>
    </>
  );
}

export default AddCar;
