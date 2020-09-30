import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, IconButton, Divider, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { toast } from "react-toastify";

//Context
import carContext from "../../context/cars/carContext";
import imageContext from "../../context/images/imageContext";

import Image from "../images/Image";

const useStyles = makeStyles((theme) => ({
  ul: {
    columnCount: 2,
  },
  icon: {
    zIndex: 3,
    marginLeft: -100,
    marginTop: 10,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function DetailImagesCar() {
  const classes = useStyles();

  const carsContext = useContext(carContext);
  const { currentcar } = carsContext;

  const imagesContext = useContext(imageContext);
  const { mensajeimages, images } = imagesContext;

  useEffect(() => {
    if (mensajeimages) {
      switch (mensajeimages.severity) {
        case "error":
          toast.error(mensajeimages.msg);
          break;
        case "success":
          toast.success(mensajeimages.msg);
        default:
          break;
      }
    }
  }, [mensajeimages]);

  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <Box boxShadow={2} bgcolor="#FFF" my={2} p={2}>
          <Typography variant="h4">Images del coche</Typography>
          <Divider />
          <Box display="flex" flex={1} mt={2}>
            <ul className={classes.ul}>
              {images.map((image) => (
                <Image image={image} />
              ))}
            </ul>
          </Box>
        </Box>
      ) : null}
    </>
  );
}

export default DetailImagesCar;
