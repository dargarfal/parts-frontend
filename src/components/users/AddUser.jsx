import React, { useState, useContext, useEffect } from "react";
import {
  InputAdornment,
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { makeStyles } from "@material-ui/core/styles";

import userContext from "../../context/users/userContext";

import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";

import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

function AddUser(props) {
  const classes = useStyles();

  const usersContext = useContext(userContext);
  const { mensaje, addNewUser } = usersContext;

  useEffect(() => {
    if (mensaje) {
      switch (mensaje.severity) {
        case "error":
          toast.error(mensaje.msg);
          break;
        case "success":
          toast.success(mensaje.msg);
          props.history.push("/users");
        default:
          break;
      }
    }
  }, [mensaje]);

  const [userName, setUserName] = useState("");
  const [fulluserName, setFullUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [repeatuserPass, setRepeatUserPass] = useState("");
  const [userRole, setUserRole] = useState("");

  const onAddNewUser = (e) => {
    e.preventDefault();

    if (
      userName !== "" &&
      fulluserName !== "" &&
      userEmail !== "" &&
      userPass !== "" &&
      repeatuserPass !== "" &&
      userRole !== ""
    ) {
      if (userPass === repeatuserPass) {
        const user = {
          userName,
          fulluserName,
          userEmail,
          userPass,
          userRole,
        };

        addNewUser(user);
      } else {
        toast.error("Las contraseñas no coinciden");
      }
    } else {
      toast.error("Todos los campos deben ser llenados");
    }
  };

  return (
    <>
      <MenuAppBar />
      <div className={classes.offset}></div>

      <Box display="flex">
        <Sidebar />
        <Box bgcolor="#FFF" p={2} flex={1} mx={2} boxShadow={2}>
          <Box>
            <Typography variant="h5">Adicionar nuevo usuario</Typography>
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
            <Box mt={2}>
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
        </Box>
      </Box>
    </>
  );
}

export default AddUser;
