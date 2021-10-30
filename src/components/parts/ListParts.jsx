import React, { useState, useContext, useEffect } from "react";
import { Box, Typography, Button, Divider } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";

//Context
import partContext from "../../context/parts/partContext";

import Part from "./Part";

function ListParts({ filtercar }) {
  const partsContext = useContext(partContext);
  const { parts } = partsContext;

  const [filtred, setFiltred] = useState([]);

  const [page, setPage] = useState(1);
  const [printarray, setPrintArray] = useState([]);

  useEffect(() => {
    
    console.log(filtred);
    if (filtercar) {
      const fil = parts.filter((party) => party.ownercarPart === filtercar);
      setFiltred(fil);
      const final = page * 10;
      const inicio = final - 10;
      setPrintArray(fil.slice(inicio, final));
    } else {
      setFiltred(parts);
      const final = page * 10;
      const inicio = final - 10;
      setPrintArray(parts.slice(inicio, final));
    }
    //eslint-disable-next-line
    
    
  }, [parts, page]);

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    
    
  };

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
              {printarray.map((part) => (
                <Part key={part._id} part={part} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="center" mt={1}>
          <Pagination count={Math.ceil(filtred.length / 10)}  onChange={handleChangePage} />
        </Box>
      </Box>
    </div>
  );
}

export default ListParts;
