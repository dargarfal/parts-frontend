import React from 'react';
import { Box, Tooltip } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

function Car() {
  return (
    
       <TableRow>
      <TableCell>7856YHP</TableCell>
      <TableCell>
        <Avatar src="https://www.carlogos.org/logo/Volkswagen-logo-2019-1500x1500.png" />
      </TableCell>
      <TableCell>Volkswagen</TableCell>
      <TableCell>Passat</TableCell>
      
      <TableCell>2010</TableCell>
      <TableCell>10/21/2010</TableCell>
      <TableCell>RTSSDEED566522526</TableCell>
      <TableCell>El Paso</TableCell>
      <TableCell>09/19/2020</TableCell>
      <TableCell>
        <Box display="flex">
          <Box mx={1}>
          <Tooltip title="Editar coche" arrow>
            <IconButton edge="end" aria-label="delete">
              <EditIcon />
            </IconButton>
            </Tooltip>
          </Box>
         
          <Box mx={1}>
          <Tooltip title="Adicionar una pieza a este coche" arrow>
            <IconButton edge="end" aria-label="delete">
              <AddToPhotosIcon/>
            </IconButton>
            </Tooltip>
          </Box>
          
          <Box mx={1}>
          <Tooltip title="Ver detalles del coche" arrow>
            <IconButton edge="end" aria-label="delete">
              <VisibilityIcon/>
            </IconButton>
            </Tooltip>
          </Box>
          
        </Box>
      </TableCell>
    </TableRow>
   
  )
}

export default Car
