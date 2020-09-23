import React, { useContext, useEffect} from 'react'
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

//Components
import MenuAppBar from '../appbar/MenuAppBar';
import Sidebar from '../sidebar/Sidebar';
import AddBrand from './AddBrand';
import ListBrands from './ListBrands';

//Context
import brandContext from '../../context/brands/brandContext';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));


function Brands() {
  const classes = useStyles();

  const brandsContext = useContext(brandContext);
  const { mensaje, marcaregistrada} = brandsContext;

  useEffect(() => {
    if(mensaje){
      switch (mensaje.severity) {
        case 'error':
         toast.error(mensaje.msg);
          break;
        case 'success':
         toast.success(mensaje.msg);  
        default:
          break;
      }
    }

    
  }, [mensaje, marcaregistrada]);

  return (
    <>
    <MenuAppBar />
    <div className={classes.offset}></div>
   
    <Box display="flex" flexDirection="row">
    
    <Sidebar />
    

    <Box mt={3} ml={2} flexGrow={1}>
    <Grid container spacing={3} xs={12} > 
    <Grid item xs={5}>
      <AddBrand />
     </Grid> 
    <Grid item xs={7} >
      <ListBrands />
    </Grid>
      </Grid>      
      </Box>
    
   
    </Box>
    </>
  )
}

export default Brands
