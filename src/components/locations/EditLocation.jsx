import React, { useState, useContext } from "react";
import {
  Button,
  Box,
  Typography,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";

import { toast } from "react-toastify";

//Context
import locationContext from "../../context/locations/locationContext";

function EditLocation({ edit, setEdit, location }) {
  const [open, setOpen] = useState(false);

  const locationsContext = useContext(locationContext);
  const { updateLocation } = locationsContext;

  const onCloseComponent = () => {
    setEdit(false);
  };

  const [nameLocation, setnameLocation] = useState({
    nameLocation: "",
  });

  const onUpdateLocation = (e) => {
    e.preventDefault();

    if (nameLocation.nameLocation !== "") {
      updateLocation(location._id, nameLocation);
      setEdit(false);
    } else {
      toast.error("Campo vacio, NO se actualizo la Ubicación");
    }
  };

  return (
    <div>
      <Dialog open={edit} aria-labelledby="form-dialog-title">
        <form onSubmit={onUpdateLocation}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mx={2}
          >
            <Box>
              <Typography variant="h5">Editar Ubicación</Typography>
            </Box>
            <Box>
              <Tooltip title="Salir" arrow>
                <IconButton onClick={onCloseComponent}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <DialogContent>
            <TextField
              id="outlined-helperText"
              label={location.nameLocation}
              helperText="Escriba el nuevo nombre de la Ubicación"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              name="nameLocation"
              onChange={(e) =>
                setnameLocation({ nameLocation: e.target.value })
              }
              value={nameLocation.nameLocation}
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

export default EditLocation;
