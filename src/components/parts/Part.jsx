import React from "react";
import {Box, Tooltip } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EuroIcon from '@material-ui/icons/Euro';



function Part() {

  
  return (
    <TableRow>
      <TableCell>Compresor</TableCell>
      <TableCell>XYI-2569-KO8</TableCell>
      <TableCell>7895HZO</TableCell>
      <TableCell>
        <Avatar src="https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png" />
      </TableCell>
      <TableCell>Mercedes-Benz</TableCell>
      <TableCell>A4</TableCell>
      <TableCell>2012</TableCell>
      <TableCell>80</TableCell>
      <TableCell>Buena</TableCell>
      <TableCell>
        <Box display="flex">
          <Box mx={1}>
          <Tooltip title="Editar pieza" arrow>
            <IconButton edge="end" aria-label="delete">
              <EditIcon />
            </IconButton>
            </Tooltip>
          </Box>
          <Box mx={1}>
          <Tooltip title="Eliminar pieza" arrow>
            <IconButton edge="end" aria-label="delete" >
              <DeleteIcon />
            </IconButton>
            </Tooltip>
          </Box>
          <Box mx={1}>
          <Tooltip title="Vender pieza" arrow>
            <IconButton edge="end" aria-label="delete">
              <EuroIcon color="secondary"/>
            </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
}

export default Part;
