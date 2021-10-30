import React, { useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

//Components
import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";
import AddBrand from "./AddBrand";
import ListBrands from "./ListBrands";

import { toast } from "react-toastify";

//Context
import brandContext from "../../context/brands/brandContext";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Brands() {
  const classes = useStyles();

  const brandsContext = useContext(brandContext);
  const { mensaje } = brandsContext;

  useEffect(() => {
    if (mensaje) {
      switch (mensaje.severity) {
        case "error":
          toast.error(mensaje.msg);
          break;
        case "success":
          toast.success(mensaje.msg);
        default:
          break;
      }
    }
  }, [mensaje]);

  return (
    <>
      <MenuAppBar />
      <div className={classes.offset}></div>

      <Box display="flex" flexDirection="row">
        <Sidebar />

        <Box mt={1} ml={2} >
          <Grid container spacing={3} direction="row"
              
             >
            <Grid item sm={12} md={5}>
              <AddBrand />
            </Grid>
            <Grid item sm={12} md={7}>
              <ListBrands />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Brands;
