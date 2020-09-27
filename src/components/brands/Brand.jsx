import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Tooltip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

import EditBrand from "./EditBrand";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Brand({ brand }) {
  const classes = useStyles();

  const [edit, setEdit] = useState(false);

  const onClick = () => {
    setEdit(true);
  };
  
  return (
    <div>
      <Box display="flex" boxShadow={2} my={1} justifyContent="space-between">
        <Box>
          <Avatar src={brand.logoBrand} className={classes.large} />
        </Box>
        <Box
          ml={2}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Typography>{brand.nameBrand}</Typography>
        </Box>
        <Box mx={1} display="flex">
          <Tooltip title="Editar marca" arrow>
            <IconButton edge="end" aria-label="delete" onClick={onClick}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <EditBrand edit={edit} setEdit={setEdit} brand={brand} />
    </div>
  );
}

export default Brand;
