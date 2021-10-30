import { Divider, Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useEffect } from "react";

//Context
import brandContext from "../../context/brands/brandContext";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 100,
  },
}));

function HeaderCar({ titulo, marca }) {
  //Brand Context
  const brandsContext = useContext(brandContext);
  const { currentbrand } = brandsContext;

  const classes = useStyles();
  return (
    <>
      <Box display="flex" justifyContent="space-between" my={2}>
        <Box>
          <Typography variant="h5">{titulo}</Typography>
        </Box>
        <Box>
          <img
            src={currentbrand ? currentbrand.logoBrand : null}
            className={classes.avatar}
          />
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default HeaderCar;
