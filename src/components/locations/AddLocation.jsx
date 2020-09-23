import React, { useContext, useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";

import { toast } from "react-toastify";

//Context
import locationContext from "../../context/locations/locationContext";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function AddLocation() {
  const classes = useStyles();

  const locationsContext = useContext(locationContext);
  const { addNewLocation } = locationsContext;

  const [nameLocation, setNameLocation] = useState({
    nameLocation: "",
  });

  const onAddLocation = (e) => {
    e.preventDefault();
    if (nameLocation.nameLocation !== "") {
      addNewLocation(nameLocation);
      setNameLocation({ nameLocation: "" });
    } else {
      toast.error("El nombre la Ubicación es obligatorio");
    }
  };

  return (
    <div>
      <Box boxShadow={2} p={1} bgcolor="#FFF">
        <Typography variant="h4">Nueva Ubicación</Typography>

        <form className={classes.form} noValidate onSubmit={onAddLocation}>
          <TextField
            id="outlined-helperText"
            label="Ubicación"
            helperText="Agrege una nueva Ubicación"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name={nameLocation}
            onChange={(e) => setNameLocation({ nameLocation: e.target.value })}
            value={nameLocation.nameLocation}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<SaveIcon />}
          >
            Guardar nueva Ubicación
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default AddLocation;
