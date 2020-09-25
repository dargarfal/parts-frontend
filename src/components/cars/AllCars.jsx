import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//Context
import carContext from "../../context/cars/carContext";

import Car from "./Car";

function AllCars() {
  //Car Context
  const carsContext = useContext(carContext);
  const { cars, getAllCars } = carsContext;

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <div>
      <Box my={2} boxShadow={2} bgcolor="#FFF" p={2}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Listado de coches</Typography>

          <Box>
            <Link to="/addcar">
              <Tooltip title="Adicionar un nuevo coche" arrow>
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              </Tooltip>
            </Link>
          </Box>
        </Box>

        <Box>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Matrícula</TableCell>
                  <TableCell>Logo</TableCell>
                  <TableCell>Marca</TableCell>
                  <TableCell>Modelo</TableCell>
                  <TableCell>Año</TableCell>
                  <TableCell>F. matriculación</TableCell>
                  <TableCell>No. de Chasi</TableCell>
                  <TableCell>Ubicación</TableCell>
                  <TableCell>Alta en el sistema</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cars.map((car) => (
                  <Car key={car._id} car={car} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}

export default AllCars;
