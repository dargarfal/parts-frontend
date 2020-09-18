import React from 'react';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SaveIcon from '@material-ui/icons/Save';
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';


function AddUser() {
  return (
    <div>
      <Box bgcolor="#FFF" p={2} width={800} >
        <Typography variant="h5">Adicionar nuevo usuario</Typography>

        <TextField
            id="outlined-helperText"
            label="Nombre de usuario"
            helperText="Agrege el nombre del usuario para el sistema"
            variant="outlined"
            margin="normal"
            fullWidth
            size="small"
            required
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
          />

<TextField
            id="outlined-helperText"
            label="Correo electrónico"
            helperText="Agrege un correo electrónico para el usuario"
            variant="outlined"
            type="email"
            margin="normal"
            fullWidth
            size="small"
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
        >
            <MenuItem >
              administrador
            </MenuItem>
            <MenuItem >
              usuario
            </MenuItem>
          
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
      </Box>
      
    </div>
  )
}

export default AddUser
