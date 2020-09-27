import React, { useContext, useState, useEffect } from "react";
import { Box, Tooltip } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

//Components
import AddPart from "../../components/parts/AddPart";
import EditCar from "./EditCar";

//Context
import brandContext from "../../context/brands/brandContext";
import locationContext from "../../context/locations/locationContext";
import carContext from "../../context/cars/carContext";
import authContext from "../../context/authentication/authContext";

const useStyles = makeStyles((theme) => ({
  disable: {
    color: "#c62828",
  },
  finished: {
    color: "#757575",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Car({ car }) {
  const classes = useStyles();

  const brandsContext = useContext(brandContext);
  const { brands } = brandsContext;

  const locationsContext = useContext(locationContext);
  const { locations } = locationsContext;

  const carsContext = useContext(carContext);
  const { cars, updateCar } = carsContext;

  const authsContext = useContext(authContext);
  const { usuario } = authsContext;

  const brand = brands.find((element) => element._id === car.brandCar);

  const location = locations.find((element) => element._id === car.locationCar);

  const [disable, setDisable] = useState();

  useEffect(() => {
    if (car.finishedCar || !car.enabledCar) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [cars]);

  //Add Part --------------------------------------------

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Update Car------------------------------------------

  const [opencar, setOpencar] = useState(false);

  const handleOpencar = () => {
    setOpencar(true);
  };

  const handleClosecar = () => {
    setOpencar(false);
  };

  const onChangeStatusCar = () => {
    if (car.enabledCar) {
      updateCar(car._id, {
        enabledCar: false,
      });
    } else {
      updateCar(car._id, {
        enabledCar: true,
      });
    }
  };

  const onChangeFinishedCar = () => {
    if (car.finishedCar) {
      updateCar(car._id, {
        finishedCar: false,
      });
    } else {
      updateCar(car._id, {
        finishedCar: true,
      });
    }
  };

  return (
    <TableRow>
      <TableCell
        className={
          car.finishedCar
            ? classes.finished
            : !car.enabledCar
            ? classes.disable
            : null
        }
      >
        {car.plateCar}
      </TableCell>
      <TableCell>
        <Avatar src={brand.logoBrand} />
      </TableCell>
      <TableCell
        className={
          car.finishedCar
            ? classes.finished
            : !car.enabledCar
            ? classes.disable
            : null
        }
      >
        {brand.nameBrand}
      </TableCell>
      <TableCell
        className={
          car.finishedCar
            ? classes.finished
            : !car.enabledCar
            ? classes.disable
            : null
        }
      >
        {car.modelCar}
      </TableCell>

      <TableCell
        className={
          car.finishedCar
            ? classes.finished
            : !car.enabledCar
            ? classes.disable
            : null
        }
      >
        {car.yearCar}
      </TableCell>
      <TableCell
        className={
          car.finishedCar
            ? classes.finished
            : !car.enabledCar
            ? classes.disable
            : null
        }
      >
        {car.dateplateCar.slice(0, 10)}
      </TableCell>
      <TableCell
        className={
          car.finishedCar
            ? classes.finished
            : !car.enabledCar
            ? classes.disable
            : null
        }
      >
        {car.chasisCar}
      </TableCell>
      <TableCell
        className={
          car.finishedCar
            ? classes.finished
            : !car.enabledCar
            ? classes.disable
            : null
        }
      >
        {location.nameLocation}
      </TableCell>
      <TableCell
        className={
          car.finishedCar
            ? classes.finished
            : !car.enabledCar
            ? classes.disable
            : null
        }
      >
        {car.registerdayCar.slice(0, 10)}
      </TableCell>
      <TableCell
        className={
          car.finishedCar
            ? classes.finished
            : !car.enabledCar
            ? classes.disable
            : null
        }
      >
        <Box display="flex">
          <Box>
            <Tooltip
              title={car.enabledCar ? "Desabilitar coche" : "Habilitar coche"}
              arrow
            >
              <Switch
                checked={car.enabledCar ? true : false}
                onChange={onChangeStatusCar}
                color="primary"
                name="checked"
                inputProps={{ "aria-label": "primary checkbox" }}
                disabled={car.finishedCar ? true : false}
              />
            </Tooltip>
          </Box>

          {usuario.userRole === "administrador" ? (
            <Box>
              <Tooltip title="Dar Baja al Coche" arrow>
                <Switch
                  checked={car.finishedCar ? false : true}
                  onChange={onChangeFinishedCar}
                  color="primary"
                  name="checked"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Tooltip>
            </Box>
          ) : null}
          <Box mx={1}>
            <Tooltip title="Editar coche" arrow>
              <IconButton
                edge="end"
                aria-label="edit"
                disabled={disable}
                onClick={handleOpencar}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box mx={1}>
            <Tooltip title="Adicionar una pieza a este coche" arrow>
              <IconButton
                edge="end"
                aria-label="add"
                disabled={disable}
                onClick={handleOpen}
              >
                <AddToPhotosIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box mx={1}>
            <Tooltip title="Ver detalles del coche" arrow>
              <IconButton edge="end" aria-label="delete" disabled={disable}>
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <AddPart idcar={car._id} setOpen={setOpen} />
            </Fade>
          </Modal>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={opencar}
            onClose={handleClosecar}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={opencar}>
              <EditCar
                car={car}
                brand={brand}
                location={location}
                setOpencar={setOpencar}
              />
            </Fade>
          </Modal>
        </Box>
      </TableCell>
    </TableRow>
  );
}

export default Car;
