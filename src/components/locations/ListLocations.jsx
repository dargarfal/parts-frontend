import React, { useContext, useState, useEffect } from "react";
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
  const { locationfiltrada, filtrarBusqueda, locations } = locationsContext;

  const [page, setPage] = useState(1);
  const [printarray, setPrintArray] = useState([]);
  const [cantidad, setCantidad] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const final = page * 10;
    const inicio = final - 10;
      
    
      if(locationfiltrada.length === 0){
        setPrintArray(locations.slice(inicio, final));
         setCantidad(locations.length);
      }else{
        setPrintArray(locationfiltrada.slice(inicio, final));
         setCantidad(locationfiltrada.length);
      }
       
  }, [locationfiltrada, page, locations]);

  const onBuscar = (e) => {
    filtrarBusqueda(e.target.value);
  };

  return (
    <div>
      <Box boxShadow={2} p={2} height={600} bgcolor="#FFF">
        <TextField
          id="outlined-helperText"
          label="Buscar Ubicación"
          helperText="Escriba el nombre de la Ubicación a buscar"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={onBuscar}
        />
        <Divider />
        <Box my={2}>
          <Typography variant="h5">Ubicaciones disponibles</Typography>
        </Box>
        <Box>
          <ul className={classes.ul}>
            {printarray.map((location) => (
              <li className={classes.lista}>
                <Location key={location._id} location={location} />
              </li>
            ))}
          </ul>
        </Box>
        <Box display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(cantidad / 10)}
            onChange={handleChangePage}
          />
        </Box>
      </Box>
    </div>
  );
}

export default ListLocations;
