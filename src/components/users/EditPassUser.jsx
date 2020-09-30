import React, { useState, useContext, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import LockOpenIcon from '@material-ui/icons/LockOpen';

import userContext from "../../context/users/userContext";
import authContext from "../../context/authentication/authContext";

import { toast } from "react-toastify";

import {
  InputAdornment,
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  IconButton,
  Tooltip,
} from "@material-ui/core";

function EditPassUser({ editpass, setEditPass }) {

  const authsContext = useContext(authContext);
  const { usuario } = authsContext;

  const usersContext = useContext(userContext);
  const { mensaje, changePassword } = usersContext;

  const [userPass, setUserPass] = useState("");
  const [newuserPass, setNewUserPass] = useState("");
  const [repeatuserPass, setRepeatUserPass] = useState("");

 const onUpdateUser = e => {
    e.preventDefault();

    if(userPass !== '' && newuserPass !== '' && repeatuserPass !== ''){
      const data = {
        userPass,
        newuserPass
      };
      changePassword(usuario._id, data);
    }else{
      toast.error('Todos los campos son obligatorios');
    } 

 }

 const onCloseComponent = () => {
  setEditPass(false);
};

useEffect(() => {
  if (mensaje) {
    switch (mensaje.severity) {
      case "error":
        toast.error(mensaje.msg);
        break;
      case "success":
        toast.success(mensaje.msg);
        setEditPass(false);
      default:
        break;
    }
  }
}, [mensaje]);

  return (
    <div>
      <Dialog open={editpass} aria-labelledby="form-dialog-title">
        <DialogContent>
          <Box
            display="flex"
            alignContent="flex-start"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h5">Cambiar contraseña</Typography>
            </Box>
            <Box>
              <Tooltip title="Salir" arrow>
                <IconButton onClick={onCloseComponent}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <form onSubmit={onUpdateUser}>

          <TextField
              id="outlined-helperText"
              label="Contraseña actaul"
              helperText="Escriba la contraseña actual"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              required
              name="userPass"
              value={userPass}
              onChange={(e) => setUserPass(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockOpenIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="outlined-helperText"
              label="Nueva contraseña"
              helperText="Defina una contraseña para el usuario"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              required
              name="newuserPass"
              value={newuserPass}
              onChange={(e) => setNewUserPass(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockOpenIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="outlined-helperText"
              label="Repetir la Nueva Contraseña"
              helperText="Repita la contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              size="small"
              required
              name="repeatuserPass"
              value={repeatuserPass}
              onChange={(e) => setRepeatUserPass(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockOpenIcon color="disabled" />
                  </InputAdornment>
                ),
              }}
            />

            <Box mt={1}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
              >
                Cambiar contraseña
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditPassUser;
