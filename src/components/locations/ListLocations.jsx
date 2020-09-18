import React from 'react';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Pagination from '@material-ui/lab/Pagination';
import Location from './Location';
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

function ListLocations() {
  const classes = useStyles();

  return (
    <div>
    <Box boxShadow={2} p={2} height={570} bgcolor='#FFF'>
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
      <Typography variant="h5">
      Ubicaciones disponibles
      </Typography>
      
    </Box>
    <Box>
      <ul className={classes.ul}>
        <li className={classes.lista}>
        <Location 
          nameLocation="El Paso"
        />
         </li>
         <li className={classes.lista}>
        <Location 
          nameLocation="Santa Cruz"
        />
        </li>
        <li className={classes.lista}>
        <Location 
          nameLocation="Los Llanos"
        />
        </li>
        <li className={classes.lista}>
        <Location 
          nameLocation="Breña Alta"
        />
        </li>
        <li className={classes.lista}>
        <Location 
          nameLocation="Punta Gorda"
        />
        </li>
        <li className={classes.lista}>
        <Location 
          nameLocation="Garafia"
        />
        </li>
        <li className={classes.lista}>
        <Location 
          nameLocation="Santa Cruz"
        />
        </li>
        <li className={classes.lista}>
        <Location 
          nameLocation="Los Llanos"
        />
        </li>
        <li className={classes.lista}>
        <Location 
          nameLocation="Breña Alta"
        />
        </li>
        <li className={classes.lista}>
        <Location 
          nameLocation="Punta Gorda"
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

export default ListLocations
