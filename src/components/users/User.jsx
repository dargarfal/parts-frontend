import React, { useContext, useState } from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";

import userContext from "../../context/users/userContext";

//Components
import EditUser from "./EditUser";

const useStyles = makeStyles((theme) => ({
  avatar: {
    textTransform: "uppercase",
  },
  avatar__disable: {
    textTransform: "uppercase",
    backgroundColor: "#b71c1c",
  },
  disable: {
    color: "#b71c1c",
  },
}));

function User({ user }) {
  const classes = useStyles();

  const usersContext = useContext(userContext);
  const { changeStatusUser, getOneUser } = usersContext;

  const [edit, setEdit] = useState(false);

  const onChangeStatus = () => {
    changeStatusUser(user._id);
  };

  const onUpdateUser = () => {
    getOneUser(user._id);

    setEdit(true);
  };
  return (
    <>
      <TableRow>
        <TableCell className={!user.userEnable ? classes.disable : null}>
          {user.userName}
        </TableCell>
        <TableCell>
          <Avatar
            className={
              !user.userEnable ? classes.avatar__disable : classes.avatar
            }
          >
            {user.userRole[0]}
          </Avatar>
        </TableCell>
        <TableCell className={!user.userEnable ? classes.disable : null}>
          {user.fulluserName}
        </TableCell>
        <TableCell className={!user.userEnable ? classes.disable : null}>
          {user.userEmail}
        </TableCell>
        <TableCell className={!user.userEnable ? classes.disable : null}>
          {user.createAt}
        </TableCell>
        <TableCell>
          <Tooltip
            title={
              user.userEnable ? "Desabilitar usuario" : "Habilitar usuario"
            }
            arrow
          >
            <Switch
              checked={user.userEnable ? true : false}
              color="primary"
              name="checked"
              inputProps={{ "aria-label": "primary checkbox" }}
              onChange={onChangeStatus}
              disabled={user.userName === "dargarfal" ? true : false}
            />
          </Tooltip>
        </TableCell>
        <TableCell>
          <Box display="flex">
            <Box mx={1}>
              <Tooltip title="Editar usuario" arrow>
                <IconButton
                  edge="end"
                  aria-label="update"
                  onClick={onUpdateUser}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </TableCell>
        <TableCell>
          {edit ? <EditUser edit={edit} setEdit={setEdit} user={user} /> : null}
        </TableCell>
      </TableRow>
    </>
  );
}

export default User;
