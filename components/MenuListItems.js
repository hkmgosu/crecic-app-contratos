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
import Router from "next/router";

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

const urls = {
  1: "/contratos",
  2: "/contadores"
};

function MenuListItems(props) {
  const { classes, handleDrawerOpen } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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
        key={1}
        button
        selected={selectedIndex === 1}
        onClick={event => {
          handleListItemClick(event, 1);
          Router.push(urls["1"]);
        }}
      >
        <ListItemIcon>
          <PeopleIcon color={selectedIndex === 1 ? "primary" : "inherit"} />
        </ListItemIcon>
        <ListItemText inset primary="Contratos" />
      </ListItem>
      <ListItem
        key={2}
        button
        selected={selectedIndex === 2}
        onClick={event => {
          handleListItemClick(event, 2);
          Router.push(urls["2"]);
        }}
      >
        <ListItemIcon>
          <BarChartIcon color={selectedIndex === 2 ? "primary" : "inherit"} />
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
            <ListItemText inset primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default withStyles(styles)(MenuListItems);
