import React from 'react';
import Box from "@material-ui/core/Box";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


function Location({nameLocation}) {
  return (
    <div>
      <Box display="flex" boxShadow={2} my={1} flex={1} justifyContent="space-between">
        <Box display="flex" alignItems="center" ml={2}>
          <LocationOnIcon />
        </Box>
        <Box ml={1} display="flex" alignItems="center">
          <Typography>
          {nameLocation}
          </Typography>
          
        </Box>
        <Box mx={1} display="flex" >
        <IconButton edge="end" aria-label="delete">
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
        
        </Box>
      </Box>
      
    </div>
  )
}

export default Location
