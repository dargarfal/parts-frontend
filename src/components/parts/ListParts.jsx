import React, { useState, useContext, useEffect } from "react";
import { Box, Typography, Button, Divider } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//Context
import partContext from "../../context/parts/partContext";

import Part from "./Part";

function ListParts({ filtercar }) {
  const partsContext = useContext(partContext);
  const { parts } = partsContext;

  const [filtred, setFiltred] = useState([]);

  useEffect(() => {
    if (filtercar) {
      const fil = parts.filter((party) => party.ownercarPart === filtercar);
      setFiltred(fil);
      console.log(fil);
    } else {
      setFiltred(parts);
    }
    //eslint-disable-next-line

    console.log(filtercar);
  }, [parts]);

  return (
    <div>
      <Box
        flex={1}
        bgcolor="#FFF"
        mt={2}
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h5">Listado de piezas</Typography>
      </Box>
      <Divider />
      <Box bgcolor="#FFF" boxShadow={2}>
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Código</TableCell>
                <TableCell>Matrícula</TableCell>
                <TableCell>Logo</TableCell>
                <TableCell>Marca</TableCell>
                <TableCell>Modelo</TableCell>
                <TableCell>Año</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtred.map((part) => (
                <Part key={part._id} part={part} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default ListParts;
