import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography, InputAdornment } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

import { toast } from "react-toastify";

//Context
import partContext from "../../context/parts/partContext";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    backgroundColor: "#FFF",
    padding: 16,
  },
}));

function EditPart({ part, setOpen }) {
  const classes = useStyles();

  const partsContext = useContext(partContext);
  const { updatePart } = partsContext;

  const [newpart, setNewPart] = useState({
    namePart: part.namePart,
    codePart: part.codePart,
    pricePart: part.pricePart,
  });

  const { namePart, codePart, pricePart } = newpart;

  const onChange = (e) => {
    setNewPart({
      ...newpart,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (namePart === "" || codePart === "" || pricePart === "") {
      toast.error("NO se pueden actualizar campos vacíos.");
    } else {
      updatePart(part._id, newpart);
      setOpen(false);
    }
  };
  return (
    <div>
      <Box className={classes.container} my={2} mx={2} flex={1} boxShadow={2}>
        <Box>
          <Typography variant="h5">Editar pieza</Typography>
        </Box>

        <form onSubmit={onSubmit}>
          <Box>
            <TextField
              id="outlined-helperText"
              label="Nombre"
              helperText="Defina un nombre para esta pieza"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              name="namePart"
              value={namePart}
              onChange={onChange}
            />
          </Box>
          <Box>
            <TextField
              id="outlined-helperText"
              label="Código"
              helperText="Inserte el código de la pieza"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              name="codePart"
              value={codePart}
              onChange={onChange}
            />
          </Box>
          <Box>
            <TextField
              id="outlined-helperText"
              label="Precio"
              type="number"
              helperText="Defina el precio de la pieza"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              name="pricePart"
              value={pricePart}
              onChange={onChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">€</InputAdornment>
                ),
              }}
            />
          </Box>
          <Box mt={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<SaveIcon />}
            >
              Guardar Pieza
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
}

export default EditPart;
