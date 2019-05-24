import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BuildIcon from "@material-ui/icons/Build";
import LayersIcon from "@material-ui/icons/Layers";
import Router from "next/router";
import { appRoutes } from "../../src/constants";

const styles = theme => ({
  selectedListItem: {
    backgroundColor: theme.palette.primary.main
  },
  selectedListItemIcon: {
    color: "white"
  },
  nested: {
    // paddingLeft: theme.spacing.unit * 3
  }
});

function MenuListItems(props) {
  const { classes, handleDrawerOpen, selectedMenu } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(selectedMenu);

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List>
      <ListSubheader inset>Menú Principal</ListSubheader>
      <ListItem
        key={appRoutes.contratos.selectedIndex}
        button
        selected={selectedIndex === appRoutes.contratos.selectedIndex}
        onClick={event => {
          handleListItemClick(event, appRoutes.contratos.selectedIndex);
          Router.push(appRoutes.contratos.home.href);
        }}
      >
        <ListItemIcon>
          <PeopleIcon
            color={
              selectedIndex === appRoutes.contratos.selectedIndex
                ? "primary"
                : "inherit"
            }
          />
        </ListItemIcon>
        <ListItemText inset primary="Contratos" />
      </ListItem>
      <ListItem
        key={appRoutes.contadores.selectedIndex}
        button
        selected={selectedIndex === appRoutes.contadores.selectedIndex}
        onClick={event => {
          handleListItemClick(event, appRoutes.contadores.selectedIndex);
          Router.push(appRoutes.contadores.home.href);
        }}
      >
        <ListItemIcon>
          <BarChartIcon
            color={
              selectedIndex === appRoutes.contadores.selectedIndex
                ? "primary"
                : "inherit"
            }
          />
        </ListItemIcon>
        <ListItemText inset primary="Contadores" />
      </ListItem>
      <ListItem
        key={3}
        button
        selected={selectedIndex === 3}
        onClick={event => {
          handleListItemClick(event, 3);
          handleClick();
          handleDrawerOpen();
        }}
      >
        <ListItemIcon>
          <AssignmentIcon color={selectedIndex === 3 ? "primary" : "inherit"} />
        </ListItemIcon>
        <ListItemText inset primary="Informes" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            key={4}
            button
            selected={selectedIndex === 4}
            onClick={event => handleListItemClick(event, 4)}
            className={classes.nested}
          >
            <ListItemIcon>
              <BarChartIcon
                color={selectedIndex === 4 ? "primary" : "inherit"}
              />
            </ListItemIcon>
            <ListItemText inset primary="Informe 12-34" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Mantenedores" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="Configuraciones" />
      </ListItem>
    </List>
  );
}

export default withStyles(styles)(MenuListItems);
