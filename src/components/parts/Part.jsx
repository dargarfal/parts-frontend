import React from "react";
import Box from "@material-ui/core/Box";
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
            <IconButton edge="end" aria-label="delete">
              <EditIcon />
            </IconButton>
          </Box>
          <Box mx={1}>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Box mx={1}>
            <IconButton edge="end" aria-label="delete">
              <EuroIcon color="secondary"/>
            </IconButton>
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
}

export default Part;
