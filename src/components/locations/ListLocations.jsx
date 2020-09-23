import React, { useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Pagination from "@material-ui/lab/Pagination";
import Location from "./Location";
import { makeStyles } from "@material-ui/core/styles";

//Context
import locationContext from "../../context/locations/locationContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
  },
  lista: {
    listStyle: "none",
    breakInside: "avoid",
    overflow: "hidden",
  },
  ul: {
    columnCount: 2,
  },
}));

function ListLocations() {
  const classes = useStyles();

  const locationsContext = useContext(locationContext);
  const { locations, locationregistrada, getAllLocatios } = locationsContext;

  useEffect(() => {
    getAllLocatios();
  }, [locationregistrada]);

  return (
    <div>
      <Box boxShadow={2} p={2} height={570} bgcolor="#FFF">
        <TextField
          id="outlined-helperText"
          label="Buscar Ubicación"
          helperText="Escriba el nombre de la Ubicación a buscar"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Divider />
        <Box my={2}>
          <Typography variant="h5">Ubicaciones disponibles</Typography>
        </Box>
        <Box>
          <ul className={classes.ul}>
            {locations.map((location) => (
              <li className={classes.lista}>
                <Location key={location._id} location={location} />
              </li>
            ))}
          </ul>
        </Box>
        <Box display="flex" justifyContent="center">
          <Pagination count={locations.length / 10} />
        </Box>
      </Box>
    </div>
  );
}

export default ListLocations;
