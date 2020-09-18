import React, {useState, useContext, useEffect} from 'react'
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";


//Components
import MenuAppBar from '../appbar/MenuAppBar';
import Sidebar from '../sidebar/Sidebar';
import Alerta from '../alert/Alerta';
import alertaContext from '../../context/alert/alertContext';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar
}));



function Dashboard() {
  const classes = useStyles();

  const alertasContext = useContext(alertaContext);
  const { alerta } = alertasContext;

  //State para manejar cuando se muestra la alerta
  const [showalert, setshowalert] = useState();

  useEffect(() => {
    //Para manejar cuando se muestra la alerta
    if(alerta){
      setshowalert(<Alerta />)
    }else{
      setshowalert(null)
    }

  }, [])
  return (
    <>
    {
      //si existe se muestra la alerta
      showalert
    }
    <MenuAppBar />
    <div className={classes.offset}></div>
    <Box display="flex" flexDirection="row">
           
    <Sidebar />
    
    <Box mt={3} ml={2} border={2} flex={1}>
      Desde Dashboard
    </Box>
    
    </Box>
    </>
  )
}

export default Dashboard
