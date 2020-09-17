import React from 'react'
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";


//Components
import MenuAppBar from '../appbar/MenuAppBar';
import Sidebar from '../sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar
}));



function Locations() {
  const classes = useStyles();

  return (
    <>
    <MenuAppBar />
    <div className={classes.offset}></div>
    <Box display="flex" flexDirection="row">
           
    <Sidebar />
    
    <Box mt={3} ml={2} border={2} flex={1}>
      Desde Locations
    </Box>
    
    </Box>
    </>
  )
}

export default Locations
