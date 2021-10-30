import React, { useContext, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Pagination from "@material-ui/lab/Pagination";
import Brand from "./Brand";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

import brandContext from "../../context/brands/brandContext";

const useStyles = makeStyles((theme) => ({
  root: {},
  lista: {
    listStyle: "none",
    breakInside: "avoid",
    overflow: "hidden",
  },
  ul: {
    columnCount: 2,
  },
}));

function ListBrands() {
  const classes = useStyles();

  const brandsContext = useContext(brandContext);
  const { marcasfiltradas, brands, filtrarBusqueda } = brandsContext;

  const [page, setPage] = useState(1);
  const [printarray, setPrintArray] = useState([]);

  const [cantidad, setCantidad] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const final = page * 10;
    const inicio = final - 10;

    if (marcasfiltradas.length === 0) {
      setPrintArray(brands.slice(inicio, final));
      setCantidad(brands.length);
    } else {
      setPrintArray(marcasfiltradas.slice(inicio, final));
      setCantidad(marcasfiltradas.length);
    }
  }, [marcasfiltradas, page, brands]);

  const onBuscar = (e) => {
    filtrarBusqueda(e.target.value);
  };

  return (
    <Box boxShadow={2} p={2} height={600} bgcolor="#FFF">
      <TextField
        id="outlined-helperText"
        label="Buscar Marca"
        helperText="Escriba el nombre de la marca para buscar"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={onBuscar}
      />
      <Divider />
      <Box mt={2}>
        <Typography variant="h5">Listado de marcas</Typography>
      </Box>
      <Box>
        <ul className={classes.ul}>
          {printarray.map((brand) => (
            <Fade in={true}>
              <li className={classes.lista}>
                <Brand key={brand._id} brand={brand} />
              </li>
            </Fade>
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
  );
}

export default ListBrands;
