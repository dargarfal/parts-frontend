import React, { useState} from 'react';
import Box from "@material-ui/core/Box";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Typography, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import EditLocation from './EditLocation';
import DeleteLocation from './DeleteLocation';


function Location({nameLocation}) {

  const [edit, setEdit] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const onClickEdit = () => {
    setEdit(true);
  }
  //al Componente EditBrand se debe pasar tambien el id de la marca que estoy editando

  const onClickDelete = () => {
    setDeleted(true);
  }
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
        <Tooltip title="Editar ubicación" arrow>
        <IconButton edge="end" aria-label="edit" onClick={onClickEdit}>
          <EditIcon />
        </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar ubicación" arrow>
        <IconButton edge="end" aria-label="delete" onClick={onClickDelete}>
          <DeleteIcon />
        </IconButton>
        </Tooltip>
        
        </Box>
      </Box>
      <EditLocation
        edit={edit}
        setEdit={setEdit}
      />
      <DeleteLocation 
        deleted={deleted}
        setDeleted={setDeleted}
      />
      
    </div>
  )
}

export default Location
