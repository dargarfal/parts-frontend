import React, { useState } from "react";
import { Box, Typography, IconButton, Divider, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import ImageZoom from "../images/ImageZoom";
import DeleteImage from "./DeleteImage";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 350,
    width: 550,
    position: "relative",
    zIndex: 1,
    borderRadius: 10,
  },
  icons: {
    position: "absolute",
    zIndex: 2,
  },
  lista: {
    listStyle: "none",
    breakInside: "avoid",
    overflow: "hidden",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Image({ image }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [deleted, setDeleted] = useState(false);

  const onClickDelete = () => {
    setDeleted(true);
  };

  return (
    <li className={classes.lista}>
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          my={1}
          ml={1}
          className={classes.icons}
        >
          <Box>
            <Fab aria-label="edit" size="small" onClick={handleOpen}>
              <ZoomInIcon />
            </Fab>
          </Box>
          <Box ml={1}>
            <Fab aria-label="edit" size="small" onClick={onClickDelete}>
              <DeleteIcon />
            </Fab>
          </Box>
        </Box>
        <Box>
          <img src={image.uriImage} className={classes.image} />
        </Box>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ImageZoom image={image} setOpen={setOpen} />
        </Fade>
      </Modal>
      <DeleteImage deleted={deleted} setDeleted={setDeleted} id={image._id} />
    </li>
  );
}

export default Image;
