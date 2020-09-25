import { Divider, Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useEffect } from "react";

//Context
import brandContext from "../../context/brands/brandContext";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 100,
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
          <Avatar
            className={classes.avatar}
            src={currentbrand ? currentbrand.logoBrand : null}
          />
        </Box>
      </Box>
      <Divider />
    </>
  );
}

export default HeaderCar;
