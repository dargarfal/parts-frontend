import { Divider, Box, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import React from 'react'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 100,
    height: 100
  }
}));

function HeaderCar({titulo, marca}) {
  const classes = useStyles();
  return (
    <>
    <Box display="flex" justifyContent="space-between" my={2}>
      <Box>
        <Typography variant="h5">{titulo}</Typography>
      </Box>
      <Box>
        <Avatar className={classes.avatar}>Marca</Avatar>
      </Box>
    
    </Box>
    <Divider />
  </>
  )
}

export default HeaderCar
