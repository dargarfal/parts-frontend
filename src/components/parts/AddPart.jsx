import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography, InputAdornment } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    backgroundColor: "#FFF",
    padding: 16,
  },
}));

function AddPart() {
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Box className={classes.container} my={2} mx={2} flex={1} boxShadow={2}>
        <Box>
          <Typography variant="h5">Adicionar pieza a este auto</Typography>
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
              InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>,
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

export default AddPart;
