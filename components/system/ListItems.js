import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Router from "next/router";
import { appRoutes } from "../../src/constants";

export const HomeListItems = props => (
  <div>
    <ListItem
      button
      selected={props.selectedMenu === appRoutes.index.selectedIndex}
      onClick={() => Router.push(appRoutes.index.home.href)}
    >
      <ListItemIcon>
        <DashboardIcon
          color={
            props.selectedMenu === appRoutes.index.selectedIndex
              ? "primary"
              : "inherit"
          }
        />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Reportes Guardados</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mes Actual" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Trimestral" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Venta Anual" />
    </ListItem>
  </div>
);
