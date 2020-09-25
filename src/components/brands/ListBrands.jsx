import React, { useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Pagination from "@material-ui/lab/Pagination";
import Brand from "./Brand";
import { makeStyles } from "@material-ui/core/styles";

import brandContext from "../../context/brands/brandContext";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 800,
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

function ListBrands() {
  const classes = useStyles();

  const brandsContext = useContext(brandContext);
  const { brands } = brandsContext;

  return (
    <div>
      <Box boxShadow={2} p={2} height={570} bgcolor="#FFF">
        <TextField
          id="outlined-helperText"
          label="Buscar Marca"
          helperText="Escriba el nombre de la marca para buscar"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Divider />
        <Box my={2}>
          <Typography variant="h5">Listado de marcas</Typography>
        </Box>
        <Box>
          <ul className={classes.ul}>
            {brands.map((brand) => (
              <li className={classes.lista}>
                <Brand key={brand._id} brand={brand} />
              </li>
            ))}
          </ul>
        </Box>
        <Box display="flex" justifyContent="center">
          <Pagination count={brands.length / 10} />
        </Box>
      </Box>
    </div>
  );
}

export default ListBrands;
