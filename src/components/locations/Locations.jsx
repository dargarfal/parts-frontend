import React, { useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

//Components
import MenuAppBar from "../appbar/MenuAppBar";
import Sidebar from "../sidebar/Sidebar";
import AddLocation from "./AddLocation";
import ListLocations from "./ListLocations";

import { toast } from "react-toastify";

//Context
import locationContext from "../../context/locations/locationContext";

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

function Locations() {
  const classes = useStyles();

  const locationsContext = useContext(locationContext);
  const { mensaje } = locationsContext;

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

        <Box mt={3} ml={2} flexGrow={1}>
          <Grid container spacing={3} xs={12}>
            <Grid item xs={5}>
              <AddLocation />
            </Grid>
            <Grid item xs={7}>
              <ListLocations />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Locations;
