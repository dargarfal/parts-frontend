import React, { useContext, useEffect, useState } from "react";
import { Box, Tooltip, Switch } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import EuroIcon from "@material-ui/icons/Euro";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";

//Conxtext
import brandContext from "../../context/brands/brandContext";
import carContext from "../../context/cars/carContext";
import partContext from "../../context/parts/partContext";

//Components
import EditPart from "./EditPart";
import SalePart from "./SalePart";

const useStyles = makeStyles((theme) => ({
  disable: {
    color: "#c62828",
    textDecoration: "none"
  },
  vendida: {
    color: "#757575",
    textDecoration: "none"
  },
  linc: {
    textDecoration: "none",
    color: "#000"
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

function Part({ part }) {
  const classes = useStyles();

  const brandsContext = useContext(brandContext);
  const { brands } = brandsContext;

  const carsContext = useContext(carContext);
  const { cars } = carsContext;

  const partsContext = useContext(partContext);
  const { updatePart } = partsContext;

  const car = cars.find((element) => element._id === part.ownercarPart);

  const brand = brands.find((element) => element._id === car.brandCar);

  const onChangeStatus = () => {
    if (part.statusPart === "Defectuosa") {
      updatePart(part._id, {
        statusPart: "Buena",
      });
    }

    if (part.statusPart === "Buena") {
      updatePart(part._id, {
        statusPart: "Defectuosa",
      });
    }
  };

  //Edit -----------------------------------
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Sale --------------------------------------

  const [opensale, setOpenSale] = useState(false);

  const handleOpenSale = () => {
    setOpenSale(true);
  };

  const handleCloseSale = () => {
    setOpenSale(false);
  };

  return (
    <TableRow>
      <TableCell
        className={
          part.statusPart === "Vendida"
            ? classes.vendida
            : part.statusPart === "Defectuosa"
            ? classes.disable
            : null
        }
      >
        {part.namePart}
      </TableCell>
      <TableCell
        className={
          part.statusPart === "Vendida"
            ? classes.vendida
            : part.statusPart === "Defectuosa"
            ? classes.disable
            : null
        }
      >
        {part.codePart}
      </TableCell>
      <TableCell
        
      >
          <Link to={`/detailcar/${car._id}`} className={
          part.statusPart === "Vendida"
            ? classes.vendida
            : part.statusPart === "Defectuosa"
            ? classes.disable
            : classes.linc
        }>
        {car.plateCar}
        </Link>
      </TableCell>
      <TableCell>
        <Avatar src={brand.logoBrand} />
      </TableCell>
      <TableCell
        className={
          part.statusPart === "Vendida"
            ? classes.vendida
            : part.statusPart === "Defectuosa"
            ? classes.disable
            : null
        }
      >
       
        {brand.nameBrand}
        
      </TableCell>

      <TableCell
        className={
          part.statusPart === "Vendida"
            ? classes.vendida
            : part.statusPart === "Defectuosa"
            ? classes.disable
            : null
        }
      >
        {car.modelCar}
      </TableCell>
      <TableCell
        className={
          part.statusPart === "Vendida"
            ? classes.vendida
            : part.statusPart === "Defectuosa"
            ? classes.disable
            : null
        }
      >
        {car.yearCar}
      </TableCell>
      <TableCell
        className={
          part.statusPart === "Vendida"
            ? classes.vendida
            : part.statusPart === "Defectuosa"
            ? classes.disable
            : null
        }
      >
        &euro; {part.pricePart}
      </TableCell>
      <TableCell
        className={
          part.statusPart === "Vendida"
            ? classes.vendida
            : part.statusPart === "Defectuosa"
            ? classes.disable
            : null
        }
      >
        {part.statusPart}
      </TableCell>
      <TableCell>
        <Box display="flex">
          <Box>
            <Tooltip
              title={
                part.statusPart === "Buena"
                  ? "Desabilitar pieza"
                  : "Habilitar pieza"
              }
              arrow
            >
              <Switch
                disabled={part.statusPart === "Vendida" ? true : false}
                checked={part.statusPart === "Buena" ? true : false}
                color="primary"
                name="checked"
                onChange={onChangeStatus}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </Tooltip>
          </Box>
          <Box mx={1}>
            <Tooltip title="Editar pieza" arrow>
              <IconButton
                edge="end"
                aria-label="delete"
                disabled={
                  !car.enabledCar ? true :
                  car.finishedCar ? true :
                  part.statusPart === "Defectuosa" ? true :
                  part.statusPart === "Vendida" ? true : false
                }                    
                onClick={handleOpen}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box mx={1}>
            <Tooltip title="Vender pieza" arrow>
              <IconButton
                edge="end"
                aria-label="delete"
                disabled={
                  !car.enabledCar ? true :
                  car.finishedCar ? true :
                  part.statusPart === "Defectuosa" ? true :
                  part.statusPart === "Vendida" ? true : false
                }   
                onClick={handleOpenSale}
              >
                <EuroIcon color="secondary" />
              </IconButton>
            </Tooltip>
          </Box>
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
            <EditPart part={part} setOpen={setOpen} />
          </Fade>
        </Modal>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={opensale}
          onClose={handleCloseSale}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={opensale}>
            <SalePart 
              part={part} 
              car={car}
              brand={brand}
              setOpenSale={setOpenSale} />
          </Fade>
        </Modal>
      </TableCell>
    </TableRow>
  );
}

export default Part;
