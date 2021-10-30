import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  InputAdornment,
  TextField,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EuroIcon from "@material-ui/icons/Euro";

import { toast } from "react-toastify";

import authContext from "../../context/authentication/authContext";
import saleContext from "../../context/sales/saleContext";
import partContext from "../../context/parts/partContext";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    backgroundColor: "#FFF",
    width: 600,
  },
  head: {
    backgroundColor: "#c62828",
    color: "#FFF",
  },
  precio: {
    color: "#2e7d32",
  },
  imagen: {
    height: 100,
  },
}));

function SalePart({ part, car, brand, setOpenSale }) {
  const classes = useStyles();

  const authsContext = useContext(authContext);
  const { usuario } = authsContext;

  const salesContext = useContext(saleContext);
  const { mensajesales, addNewSale } = salesContext;

  const partsContext = useContext(partContext);
  const { getAllParts } = partsContext;

  const [amountSale, setAmountSale] = useState(part.pricePart);

  const getFecha = () => {
    const date = new Date();
    const today =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return today;
  };

  useEffect(() => {
    if (mensajesales) {
      switch (mensajesales.severity) {
        case "error":
          toast.error(mensajesales.msg);
          break;
        case "success":
          getAllParts();
          toast.success(mensajesales.msg);
          setOpenSale(false);
        default:
          break;
      }
    }
  }, [mensajesales])

  const onSalePart = e => {
    e.preventDefault();

    if(amountSale !== ''){
      
      const newsale = {
        ownercarSale: car._id,
        ownerpartSale: part._id,
        owneruserSale: usuario._id,
        amountSale,
      }

      addNewSale(newsale);

    }else{
      toast.error("Debe definir un precio de venta");
    }
  }
 
  return (
    <Box className={classes.container}>
      <Box>
        <Box className={classes.head} p={1} onClick={getFecha}>
          <Typography variant="h4">Vender pieza</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" p={2}>
          <Box>
            <Box my={1}>
              <Typography variant="h4">{part.namePart}</Typography>
            </Box>
            <Box my={1} color="#757575">
              <Typography variant="h5">({part.codePart})</Typography>
            </Box>
          </Box>
          <Box p={1} className={classes.precio}>
            <Typography variant="h3">€ {part.pricePart}</Typography>
          </Box>
        </Box>
        <Divider />
        <Box my={2} p={2}>
          <Box display="flex" justifyContent="space-between">
            <Box my={2}>
              <Typography variant="h4">{car.plateCar}</Typography>
            </Box>
            <Box>
              <img src={brand.logoBrand} className={classes.imagen} />
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" color="#757575">
            <Box>
              <Typography variant="h4">{brand.nameBrand}</Typography>
            </Box>
            <Box>
              <Typography variant="h4">{car.modelCar}</Typography>
            </Box>
            <Box>
              <Typography variant="h4">{car.yearCar}</Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <form onSubmit={onSalePart}>
        <Box my={2} display="flex" justifyContent="space-between" mx={1} p={2}>
          <Box color="#757575">
            <Box>
              <Typography variant="h5"> {getFecha()}</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h5">{usuario.userName}</Typography>
            </Box>
          </Box>
          <Box>
            <TextField
              id="outlined-helperText"
              label="Precio de Venta"
              type="number"
              helperText="Defina el precio de venta"
              variant="outlined"
              margin="normal"
              fullWidth
              size="large"
              name="amountSale"
              value={amountSale}
              onChange={e => (setAmountSale(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">€</InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box mt={2} p={1}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<EuroIcon />}
          >
            Vender Pieza
          </Button>
        </Box>
        </form>
      </Box>
    </Box>
  );
}

export default SalePart;
