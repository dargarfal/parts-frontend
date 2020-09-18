import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function ListUser() {
  return (
    <div>
      <Box bgcolor="#FFF" p={2}>
        <Typography variant="h5">Listado de usuarios</Typography>

        <Box mt={3}>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Usuario del sistema</TableCell>
                  <TableCell>Rol</TableCell>
                  <TableCell>Nombre completo</TableCell>
                  <TableCell>Correo electrónico</TableCell>
                  <TableCell>Fecha de alta</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>dargarfal</TableCell>
                  <TableCell>
                  <Avatar>
                      A
                    </Avatar>
                  </TableCell>
                  <TableCell>Ernesto D. García Falcón</TableCell>
                  <TableCell>dargarfal@gmail.com</TableCell>
                  <TableCell>11/09/2020 </TableCell>
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
                    </Box>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>dargarfal</TableCell>
                  <TableCell>
                    <Avatar>
                      U
                    </Avatar>
                  </TableCell>
                  <TableCell>Ernesto D. García Falcón</TableCell>
                  <TableCell>dargarfal@gmail.com</TableCell>
                  <TableCell>11/09/2020 </TableCell>
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
                    </Box>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}

export default ListUser;
