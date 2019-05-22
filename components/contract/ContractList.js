import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { fade } from "@material-ui/core/styles/colorManipulator";
import MenuIcon from "@material-ui/icons/Menu";
import deepPurple from "@material-ui/core/colors/deepPurple";

const contractListAppBarstyles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 240
      }
    }
  }
});

function SearchAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            Contratos
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Abrir Opciones"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const ContractListAppBar = withStyles(contractListAppBarstyles)(SearchAppBar);

const contractListStyles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    margin: "16 0 16 0"
  },
  inline: {
    display: "inline"
  },
  avatar: {
    margin: 6,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
});

const listItemDatas = [
  {
    id: 1,
    RutAux: "11.111.111-1",
    NomAux: "CLIENTE UNO",
    inicio: "01-01-2010",
    fin: "01-01-2013",
    vendedor: "Vendedor Uno"
  },
  {
    id: 2,
    RutAux: "22.222.222-2",
    NomAux: "CLIENTE DOS",
    inicio: "01-01-2011",
    fin: "01-01-2014",
    vendedor: "Vendedor Dos"
  },
  {
    id: 3,
    RutAux: "33.333.333-3",
    NomAux: "CLIENTE TRES",
    inicio: "01-01-2012",
    fin: "01-01-2013",
    vendedor: "Vendedor Tres"
  },
  {
    id: 4,
    RutAux: "44.444.444-4",
    NomAux: "CLIENTE CUATRO",
    inicio: "01-01-2012",
    fin: "01-01-2015",
    vendedor: "Vendedor Cuatro"
  },
  {
    id: 5,
    RutAux: "55.555.555-5",
    NomAux: "CLIENTE CINCO",
    inicio: "01-01-2017",
    fin: "01-01-2020",
    vendedor: "Vendedor Cinco"
  },
  {
    id: 6,
    RutAux: "66.666.666-6",
    NomAux: "CLIENTE SEIS",
    inicio: "01-01-2013",
    fin: "01-01-2016",
    vendedor: "Vendedor Uno"
  },
  {
    id: 7,
    RutAux: "77.777.777-7",
    NomAux: "CLIENTE SIETE",
    inicio: "01-01-2013",
    fin: "01-01-2015",
    vendedor: "Vendedor Uno"
  },
  {
    id: 8,
    RutAux: "88.888.888-8",
    NomAux: "CLIENTE OCHO",
    inicio: "01-01-2015",
    fin: "01-01-2018",
    vendedor: "Vendedor Uno"
  },
  {
    id: 9,
    RutAux: "99.999.999-9",
    NomAux: "CLIENTE NUEVE",
    inicio: "01-01-2017",
    fin: "01-01-2020",
    vendedor: "Vendedor Tres"
  },
  {
    id: 10,
    RutAux: "10.101.101-0",
    NomAux: "CLIENTE DIEZ",
    inicio: "01-01-2018",
    fin: "01-01-2021",
    vendedor: "Vendedor Uno"
  }
];

function ContractList(props) {
  const { classes, handleClickListItem } = props;

  const listItems = [];
  listItemDatas.forEach((listItemData, index) =>
    listItems.push(
      <ListItem
        key={index + 1}
        button
        onClick={handleClickListItem}
        alignItems="flex-start"
      >
        <ListItemAvatar>
          <Avatar
            className={classes.avatar}
            alt={
              listItemData.avatar
                ? listItemData.avatar.alt
                : (index + 1).toString()
            }
          >
            {listItemData.avatar
              ? listItemData.avatar.alt
              : (index + 1).toString()}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography className={classes.inline} variant="subtitle2">
                {listItemData.NomAux} {listItemData.RutAux}{" "}
              </Typography>
              {""}
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                className={classes.inline}
                color="textPrimary"
              >
                {`${listItemData.inicio} - ${listItemData.fin} `}
              </Typography>
              {listItemData.vendedor}
            </React.Fragment>
          }
        />
      </ListItem>
    )
  );

  return (
    <List className={classes.root}>
      <ContractListAppBar />
      {listItems}
    </List>
  );
}

ContractList.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClickListItem: PropTypes.func.isRequired
};

export default withStyles(contractListStyles)(ContractList);
