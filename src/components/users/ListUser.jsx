import React, { useContext, useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import User from "./User";

import userContext from "../../context/users/userContext";

function ListUser() {
  const usersContext = useContext(userContext);
  const { users, getAllUsers, usuarioregistrado } = usersContext;

  useEffect(() => {
    getAllUsers();
    //eslint-disable-next-line
  }, [usuarioregistrado]);

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
                  <TableCell>Habilitado</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <User key={user._id} user={user} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}

export default ListUser;
