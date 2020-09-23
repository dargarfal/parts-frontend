import React, { useState, useContext } from "react";
import {
  Button,
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";


import brandContext from "../../context/brands/brandContext";

import { toast } from "react-toastify";

function EditBrand({ edit, setEdit, brand }) {
  const brandsContext = useContext(brandContext);
  const { updateBrand } = brandsContext;

  const [newbrand, setNewBrand] = useState({
    nameBrand: "",
    logoBrand: "",
  });

  const { nameBrand, logoBrand } = newbrand;

  const onUpdateBrand = (e) => {
    e.preventDefault();

    if (nameBrand === "" && logoBrand === "") {
      toast.error("Campos vacios, no se actualizó la Marca");
    } else {
      updateBrand(brand._id, newbrand);
      setNewBrand({
        nameBrand: "",
        logoBrand: ""
      })
      setEdit(false);
    }
  };

  const onCloseComponent = () => {
    setEdit(false);
  };

  const onChange = (e) => {
    setNewBrand({
      ...newbrand,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Dialog open={edit} aria-labelledby="form-dialog-title">
        <form onSubmit={onUpdateBrand}>
          <DialogContent>
            <Box
              display="flex"
              alignContent="flex-start"
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h5">Editar Marca</Typography>
              </Box>
              <Box>
                <Tooltip title="Salir" arrow>
                  <IconButton onClick={onCloseComponent}>
                    <CloseIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <TextField
              id="outlined-helperText"
              label={brand.nameBrand}
              helperText="Escriba el nuevo nombre de la Marca"
              variant="outlined"
              margin="normal"
              size="small"
              fullWidth
              name="nameBrand"
              onChange={onChange}
            />

            <TextField
              id="outlined-helperText"
              label={brand.logoBrand}
              helperText="Agregue un nuevo logo para la Marca"
              variant="outlined"
              margin="normal"
              size="small"
              fullWidth
              name="logoBrand"
              onChange={onChange}
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" type="submit">
              Cambiar nombre
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default EditBrand;
