
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
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

function Brand({nameBrand, logoBrand}) {
  const classes = useStyles();

  return (
    <div>
      <Box display="flex" boxShadow={2} my={1} justifyContent="space-between">
        <Box>
          <Avatar
            src={logoBrand}
            className={classes.large}
          />
        </Box>
        <Box ml={2} display="flex" alignItems="center" justifyContent="flex-start">
          <Typography>
            {nameBrand}
          </Typography>
        </Box>    
        <Box mx={1} display="flex" >
        <IconButton edge="end" aria-label="delete">
          <EditIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
        
        </Box>
      </Box>
    </div>
  )
}

export default Brand
