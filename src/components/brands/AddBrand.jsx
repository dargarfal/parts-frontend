import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function AddBrand() {
  const classes = useStyles();
  return (
    <div>
      <Box boxShadow={2} p={1} bgcolor='#FFF'>
        <Typography variant="h4">Nueva Marca</Typography>

        <form className={classes.form} noValidate>
          <TextField
            id="outlined-helperText"
            label="Marca"
            helperText="Agrege una nueva Marca"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />

          <TextField
            id="outlined-helperText"
            label="Logo (URL)"
            helperText="Agregue un logo para la Marca"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<SaveIcon />}
          >
            Guardar nueva Marca
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default AddBrand;
