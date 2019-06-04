import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { fade } from "@material-ui/core/styles/colorManipulator";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import deepPurple from "@material-ui/core/colors/deepPurple";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Divider from "@material-ui/core/Divider";
import "isomorphic-unfetch";
import { contracts as contractData } from "./ContractsData";

const appBarstyles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 20
  },
  menuItem: {
    width: 220,
    maxWidth: 220,
    backgroundColor: theme.palette.background.paper
  },
  menuItemDisabled: {
    color: theme.palette.primary.main
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    checkedType: [null],
    checkedStatus: [null]
  });

  const handleToggle = (checkedList, value) => () => {
    const currentIndex = state[checkedList].indexOf(value);
    const newChecked = [...state[checkedList]];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setState({ ...state, [checkedList]: newChecked });
  };

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
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
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            disableAutoFocusItem
            variant="menu"
          >
            <MenuItem>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography>Filtros:</Typography>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Limpiar Filtros"
                  onClick={() =>
                    setState({
                      checkedType: [],
                      checkedStatus: []
                    })
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </MenuItem>
            <MenuItem disabled classes={{ root: classes.menuItemDisabled }}>
              Tipo Contrato
            </MenuItem>
            {[
              { id: 1, nombre: "Arriendo" },
              { id: 2, nombre: "Hosting" },
              { id: 3, nombre: "Desarrollo" }
            ].map(value => (
              <MenuItem
                onClick={handleToggle("checkedType", value.id)}
                key={value.id}
                className={classes.menuItem}
              >
                {`${value.nombre}`}
                <div className={classes.grow} />
                <Checkbox
                  edge="end"
                  checked={state.checkedType.indexOf(value.id) !== -1}
                  onChange={handleToggle("checkedType", value.id)}
                />
              </MenuItem>
            ))}
            <MenuItem disabled className={classes.menuItemDisabled}>
              Estado
            </MenuItem>
            {[{ id: 1, nombre: "Activo" }, { id: 2, nombre: "Inactivo" }].map(
              value => (
                <MenuItem
                  onClick={handleToggle("checkedStatus", value.id)}
                  key={value.id}
                  className={classes.menuItem}
                >
                  {`${value.nombre}`}
                  <div className={classes.grow} />
                  <Checkbox
                    edge="end"
                    checked={state.checkedStatus.indexOf(value.id) !== -1}
                    onChange={handleToggle("checkedStatus", value.id)}
                  />
                </MenuItem>
              )
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const ContractListAppBar = withStyles(appBarstyles)(SearchAppBar);

const listStyles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    height: 480,
    [theme.breakpoints.only("xl")]: {
      height: 720
    }
  },
  inline: {
    display: "inline"
  },
  avatar: {
    margin: 6,
    color: "#fff",
    backgroundColor: deepPurple[500]
  },
  gridListItem: {
    flexGrow: 1
  }
});

class ContractList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleClickListItem: PropTypes.func
  };

  static defaultProps = {
    handleClickListItem: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      contracts: false,
      filter: [],
      openCollapseListItem: false
    };
  }

  async componentDidMount() {
    try {
      await this.setState({ contracts: false });
      // const res = await fetch("./");
      // const data = await res.json();
      await new Promise(resolve => {
        setTimeout(() => {
          this.setState({ contracts: contractData }, () => {
            resolve();
          });
        }, 2000);
      }); // eslint-disable-line
    } catch (err) {
      console.log(err); // eslint-disable-line
    }
  }

  render() {
    const { classes, handleClickListItem } = this.props;
    const { contracts, openCollapseListItem } = this.state;

    const listItems = contracts ? (
      contractData.map((listItemData, index) => (
        <Fragment key={index + 1}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item className={classes.gridListItem}>
              <ListItem button onClick={handleClickListItem}>
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
                      <Typography
                        className={classes.inline}
                        variant="subtitle2"
                      >
                        {listItemData.NomAux}
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {listItemData.RutAux}{" "}
                      </Typography>
                      <Typography
                        component="span"
                        className={classes.inline}
                        color={
                          listItemData.estado ? "primary" : "textSecondary"
                        }
                      >
                        {listItemData.estado ? "vigente" : "estado zero"}{" "}
                      </Typography>
                      <Chip
                        color="primary"
                        label={listItemData.vendedor}
                        size="small"
                        variant="outlined"
                        avatar={
                          <Avatar>
                            <FaceIcon />
                          </Avatar>
                        }
                      />
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Grid>
            {openCollapseListItem === index ? (
              <IconButton
                style={{ marginLeft: 18, marginRight: 18 }}
                onClick={() =>
                  this.setState({
                    openCollapseListItem: false
                  })
                }
              >
                <ExpandLess />
              </IconButton>
            ) : (
              <IconButton
                style={{ marginLeft: 18, marginRight: 18 }}
                onClick={() =>
                  this.setState({
                    openCollapseListItem: index
                  })
                }
              >
                <ExpandMore />
              </IconButton>
            )}
          </Grid>
          <Collapse
            in={openCollapseListItem === index}
            timeout="auto"
            // unmountOnExit
          >
            <Grid
              container
              spacing={16}
              alignItems="center"
              direction="row"
              justify="center"
              style={{ padding: 18 }}
            >
              <Grid item>
                <Chip
                  color="primary"
                  label={listItemData.vendedor}
                  variant="outlined"
                  avatar={
                    <Avatar>
                      <FaceIcon />
                    </Avatar>
                  }
                />
              </Grid>
              <Grid item>
                <Chip
                  color="secondary"
                  label={`Inicio: ${listItemData.inicio} `}
                  variant="outlined"
                  avatar={
                    <Avatar>
                      <CalendarTodayIcon />
                    </Avatar>
                  }
                />
              </Grid>
              <Grid item>
                <Chip
                  color="secondary"
                  label={`Termino: ${listItemData.fin} `}
                  variant="outlined"
                  avatar={
                    <Avatar>
                      <CalendarTodayIcon />
                    </Avatar>
                  }
                />
              </Grid>
              <Grid item>
                <Chip
                  color="default"
                  label="ver contrato"
                  variant="outlined"
                  avatar={
                    <Avatar>
                      <CloudDownloadIcon />
                    </Avatar>
                  }
                  onClick={() => alert("bajar")}
                />
              </Grid>
            </Grid>
          </Collapse>
        </Fragment>
      ))
    ) : (
      <Grid container alignItems="center" direction="row" justify="center">
        <Grid item>
          <CircularProgress color="secondary" size={90} />
        </Grid>
      </Grid>
    );

    return (
      <Paper elevation={3}>
        <ContractListAppBar />
        <List className={classes.root}>{listItems}</List>
      </Paper>
    );
  }
}

export default withStyles(listStyles)(ContractList);
