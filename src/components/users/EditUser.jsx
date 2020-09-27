import React, { useState, useContext, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Checkbox from "@material-ui/core/Checkbox";

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

import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

import userContext from "../../context/users/userContext";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function EditUser({ edit, setEdit, user, history }) {
  const usersContext = useContext(userContext);
  const { mensaje, updateUser } = usersContext;

  const [changepass, setChangePass] = useState(false);

  const [userName, setUserName] = useState(user.userName);
  const [fulluserName, setFullUserName] = useState(user.fulluserName);
  const [userEmail, setUserEmail] = useState(user.userEmail);
  const [userPass, setUserPass] = useState("");
  const [repeatuserPass, setRepeatUserPass] = useState("");
  const [userRole, setUserRole] = useState(user.userRole);

  useEffect(() => {
    if (mensaje) {
      switch (mensaje.severity) {
        case "error":
          toast.error(mensaje.msg);
          break;
        case "success":
          toast.success(mensaje.msg);
          setEdit(false);
        default:
          break;
      }
    }
  }, [mensaje]);

  const onAddNewUser = (e) => {
    e.preventDefault();

    let datauser = {};

    if (userName !== user.userName) {
      datauser.userName = userName;
      console.log("no son iguales");
    }

    if (fulluserName !== user.fulluserName) {
      datauser.fulluserName = fulluserName;
    }

    if (userEmail !== user.userEmail) {
      datauser.userEmail = userEmail;
    }

    if (userRole !== user.userRole) {
      datauser.userRole = userRole;
    }

    if (userPass !== "") {
      if (userPass === repeatuserPass) {
        datauser.userPass = userPass;
      } else {
        toast.error("Las contreseñas no coinciden");
      }
    } else {
      datauser.userPass = "";
    }

    updateUser(user._id, datauser);
    
  };

  const handleChange = () => {
    if (changepass) {
      setChangePass(false);
      setUserPass("");
      setRepeatUserPass("");
    } else {
      setChangePass(true);
      setUserPass("");
      setRepeatUserPass("");
    }
  };

  const onCloseComponent = () => {
    setEdit(false);
  };

  return (
    <Dialog open={edit} aria-labelledby="form-dialog-title">
      <DialogContent>
        <Box
          display="flex"
          alignContent="flex-start"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5">Editar usuario</Typography>
          </Box>
          <Box>
            <Tooltip title="Salir" arrow>
              <IconButton onClick={onCloseComponent}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <form onSubmit={onAddNewUser}>
          <TextField
            id="outlined-helperText"
            label="Nombre de usuario"
            helperText="Agrege el nombre del usuario para el sistema"
            variant="outlined"
            margin="normal"
            fullWidth
            size="small"
            required
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <TextField
            id="outlined-helperText"
            label="Nombre y apellidos"
            helperText="Agrege los nombres y apellidos del usuario"
            variant="outlined"
            margin="normal"
            fullWidth
            size="small"
            required
            name="fulluserName"
            value={fulluserName}
            onChange={(e) => setFullUserName(e.target.value)}
          />

          <TextField
            id="outlined-helperText"
            label="Correo electrónico"
            helperText="Agrege un correo electrónico para el usuario"
            variant="outlined"
            required
            margin="normal"
            fullWidth
            size="small"
            name="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AlternateEmailIcon color="disabled" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="outlined-select-currency"
            select
            label="Rol"
            helperText="Seleccione un Rol para el usuario"
            variant="outlined"
            fullWidth
            size="small"
            required
            name="userRole"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <MenuItem value="administrador">administrador</MenuItem>
            <MenuItem value="usuario">usuario</MenuItem>
          </TextField>

          <FormControlLabel
            value="top"
            control={
              <Checkbox
                color="primary"
                checked={changepass}
                onChange={handleChange}
              />
            }
            label="Cambiar tambień la contraseña"
          />

          {changepass ? (
            <>
              <TextField
                id="outlined-helperText"
                label="Contraseña"
                helperText="Defina una contraseña para el usuario"
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
                label="Repetir Contraseña"
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
            </>
          ) : null}

          <Box mt={1}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
            >
              Guardar nuevo Usuario
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditUser;
