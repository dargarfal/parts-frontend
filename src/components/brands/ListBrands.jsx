import React from 'react';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Pagination from '@material-ui/lab/Pagination';
import Brand from './Brand';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
  },
  lista: {
    listStyle: "none",
    breakInside: "avoid",
    overflow: "hidden"
  },
  ul: {
    columnCount: 2
  }
}));

function ListBrands() {
  const classes = useStyles();

  return (
    <div>
    <Box boxShadow={2} p={2} height={570} bgcolor='#FFF'>
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
      <Typography variant="h5">
      Listado de marcas
      </Typography>
      
    </Box>
    <Box>
      <ul className={classes.ul}>
        <li className={classes.lista}>
        <Brand 
          nameBrand="Mercedes-Benz"
          logoBrand="https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png"
        />
        </li>
        <li className={classes.lista}>
        <Brand 
          nameBrand="Volkswagen"
          logoBrand="https://www.carlogos.org/logo/Volkswagen-logo-2019-1500x1500.png"
        />
        </li>
        <li className={classes.lista}>
        <Brand 
          nameBrand="Ford"
          logoBrand="https://www.carlogos.org/car-logos/ford-logo-2017.png"
        />
        </li>
        <li className={classes.lista}>
        <Brand 
          nameBrand="Alfa-Romeo"
          logoBrand="https://www.carlogos.org/logo/Alfa-Romeo-logo-2015-1920x1080.png"
        />
        </li>
        <li className={classes.lista}>
        <Brand 
          nameBrand="Opel"
          logoBrand="https://www.carlogos.org/logo/Opel-logo-2009-1920x1080.png"
        />
        </li>
        <li className={classes.lista}>
        <Brand 
          nameBrand="Renault"
          logoBrand="https://www.carlogos.org/logo/Renault-logo-2015-2048x2048.png"
        />
        </li>
        <li className={classes.lista}>
        <Brand 
          nameBrand="Peugeot"
          logoBrand="https://www.carlogos.org/logo/Peugeot-logo-2010-1920x1080.png"
        />
        </li>
        <li className={classes.lista}>
        <Brand 
          nameBrand="Citroen"
          logoBrand="https://www.carlogos.org/logo/Citroen-logo-2009-2048x2048.png"
        />
        </li>
        <li className={classes.lista}>
        <Brand 
          nameBrand="Fiat"
          logoBrand="https://www.carlogos.org/logo/Fiat-logo-2006-1920x1080.png"
        />
        </li>
        <li className={classes.lista}>
        <Brand 
          nameBrand="Skoda"
          logoBrand="https://www.carlogos.org/logo/Skoda-logo-2016-1920x1080.png"
        />
        </li>
        
        
        
      </ul>
    
    </Box>
    <Box display="flex" justifyContent="center">
       <Pagination count={10}  />
    </Box>
      
    </Box>
    </div>
  )
}

export default ListBrands
