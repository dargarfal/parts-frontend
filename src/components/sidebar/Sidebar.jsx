import React from "react";

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import BuildIcon from "@material-ui/icons/Build";
import LowPriorityIcon from "@material-ui/icons/LowPriority";
import EuroIcon from "@material-ui/icons/Euro";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 260,
  },
  drawerPaper: {
    width: 260,
  },
  drawerContainer: {
    overflow: "auto",
  },
  link: {
    textDecoration: "none",
    color: "#3e3e3e",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Sidebar() {
  const classes = useStyles();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <Box mt={3} ml={2} fontWeight="bolder" textAlign="center">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={classes.button}
          startIcon={<EuroIcon />}
        >
          Vender pieza
        </Button>
      </Box>
      <div className={classes.drawerContainer}>
        <Box my={1}>
          <List>
            <Link to="/dashboard" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Box>
        <Box mt={1} ml={2} fontWeight="bolder">
          Nomencladores
        </Box>
        <List>
          <Link to="/brands" className={classes.link}>
            <ListItem button selected>
              <ListItemIcon>
                <BubbleChartIcon />
              </ListItemIcon>
              <ListItemText primary="Marcas" />
            </ListItem>
          </Link>
          <Link to="/locations" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Ubicaciones" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Box mt={1} ml={2} fontWeight="bolder">
          Gestión de coches
        </Box>
        <List>
          <Link to="/addcar" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <DriveEtaIcon />
              </ListItemIcon>
              <ListItemText primary="Nuevo coche" />
            </ListItem>
          </Link>
          <Link to="/cars" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <LowPriorityIcon />
              </ListItemIcon>
              <ListItemText primary="Listar coches" />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <Box mt={1} ml={2} fontWeight="bolder">
          Partes y Piezas
        </Box>
        <List>
          <Link to="/parts" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Listar piezas" />
            </ListItem>
          </Link>
        </List>

        <Divider />
        <Box mt={1} ml={2} fontWeight="bolder">
          Gestión de Usuarios
        </Box>
        <List>
          <Link to="/users" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText primary="Gestión de usuarios" />
            </ListItem>
          </Link>
          <Link to="/users" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText primary="Gestionar permisos" />
            </ListItem>
          </Link>
        </List>

        <Divider />
      </div>
    </Drawer>
  );
}

export default Sidebar;
