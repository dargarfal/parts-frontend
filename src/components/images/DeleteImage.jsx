import React, { Fragment, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Box } from "@material-ui/core";

//Context
import imageContext from "../../context/images/imageContext";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
  all: {
    backgroundColor: "primary",
  },
}));

function DeleteImage({ deleted, setDeleted, id }) {
  const classes = useStyles();

  const imagesContext = useContext(imageContext);
  const { deleteImage } = imagesContext;

  const handleClose = () => {
    setDeleted(false);
  };

  const onEliminarUbicacion = () => {
    deleteImage(id);
    setDeleted(false);
  };

  return (
    <div>
      <Snackbar
        className={classes.all}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={deleted}
      >
        <Alert onClose={handleClose} severity="error">
          <Box display="flex" alignItems="center">
            <Box>
              "¿Está seguro que desea eliminar esta imagen definitivamente?"
            </Box>
            <Box mx={2}>
              <Button
                aria-label="close"
                color="inherit"
                className={classes.close}
                onClick={onEliminarUbicacion}
                variant="contained"
                color="primary"
              >
                SI, Eliminar...
              </Button>
            </Box>
          </Box>
        </Alert>
      </Snackbar>
    </div>
  );
}

export default DeleteImage;
