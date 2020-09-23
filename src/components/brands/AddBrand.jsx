import React, { useState, useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";

//Context
import brandContext from "../../context/brands/brandContext";

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

  const brandsContext = useContext(brandContext);
  const { marcaregistrada, addNewBrand } = brandsContext;

  useEffect(() => {
    if (marcaregistrada) {
      setBrand({
        nameBrand: "",
        logoBrand: "",
      });
    }
  }, [marcaregistrada]);

  const [brand, setBrand] = useState({
    nameBrand: "",
    logoBrand: "",
  });

  const { nameBrand, logoBrand } = brand;

  const onChange = (e) => {
    setBrand({
      ...brand,
      [e.target.name]: e.target.value,
    });
  };

  const onAddBrand = (e) => {
    e.preventDefault();

    addNewBrand(brand);
  };

  return (
    <div>
      <Box boxShadow={2} p={1} bgcolor="#FFF">
        <Typography variant="h4">Nueva Marca</Typography>

        <form className={classes.form} noValidate onSubmit={onAddBrand}>
          <TextField
            id="outlined-helperText"
            label="Marca"
            helperText="Agrege una nueva Marca"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="nameBrand"
            onChange={onChange}
            value={nameBrand}
          />

          <TextField
            id="outlined-helperText"
            label="Logo (URL)"
            helperText="Agregue un logo para la Marca"
            variant="outlined"
            margin="normal"
            fullWidth
            name="logoBrand"
            onChange={onChange}
            value={logoBrand}
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
