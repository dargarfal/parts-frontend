import React, { useContext } from "react";
import { Box, Tooltip } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Switch from "@material-ui/core/Switch";

//Conxtext
import brandContext from "../../context/brands/brandContext";
import locationContext from "../../context/locations/locationContext";

function Car({ car }) {
  const brandsContext = useContext(brandContext);
  const { brands } = brandsContext;

  const locationsContext = useContext(locationContext);
  const { locations } = locationsContext;

  const brand = brands.find((element) => element._id === car.brandCar);

  const location = locations.find((element) => (element._id = car.locationCar));

  return (
    <TableRow>
      <TableCell>{car.plateCar}</TableCell>
      <TableCell>
        <Avatar src={brand.logoBrand} />
      </TableCell>
      <TableCell>{brand.nameBrand}</TableCell>
      <TableCell>Passat</TableCell>

      <TableCell>{car.yearCar}</TableCell>
      <TableCell>{car.dateplateCar.slice(0, 10)}</TableCell>
      <TableCell>{car.chasisCar}</TableCell>
      <TableCell>{location.nameLocation}</TableCell>
      <TableCell>{car.registerdayCar.slice(0, 10)}</TableCell>
      <TableCell>
        <Box display="flex">
          <Box>
            <Switch
              checked={car.enabledCar ? true : false}
              color="primary"
              name="checked"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Box>
          <Box mx={1}>
            <Tooltip title="Editar coche" arrow>
              <IconButton
                edge="end"
                aria-label="delete"
                disabled={car.enabledCar ? false : true}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box mx={1}>
            <Tooltip title="Adicionar una pieza a este coche" arrow>
              <IconButton edge="end" aria-label="delete">
                <AddToPhotosIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box mx={1}>
            <Tooltip title="Ver detalles del coche" arrow>
              <IconButton edge="end" aria-label="delete">
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
}

export default Car;
