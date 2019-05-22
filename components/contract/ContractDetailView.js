import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBack from "@material-ui/icons/ArrowBack";

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
  }
});

function SearchAppBar(props) {
  const { classes, handleShowContractDetails } = props;
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
            Detalle Contrato
          </Typography>
          <div className={classes.grow} />
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Abrir Opciones"
            onClick={handleShowContractDetails}
          >
            <ArrowBack />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleShowContractDetails: PropTypes.func.isRequired
};

const ContractDetailViewAppBar = withStyles(contractListAppBarstyles)(
  SearchAppBar
);

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

function ContractDetailView(props) {
  const { classes, handleShowContractDetails } = props;
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <ContractDetailViewAppBar
        handleShowContractDetails={handleShowContractDetails}
      />
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Información General" />
          <Tab label="Detalle Cuotas" />
          <Tab label="NV1" />
          <Tab label="NV0" />
          <Tab label="Guías" />
          <Tab label="Documentos" />
          <Tab label="Series" />
          <Tab label="Contadores" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Información General</TabContainer>}
      {value === 1 && <TabContainer>Detalle Cuotas</TabContainer>}
      {value === 2 && <TabContainer>NV1</TabContainer>}
      {value === 3 && <TabContainer>NV0</TabContainer>}
      {value === 4 && <TabContainer>Guías</TabContainer>}
      {value === 5 && <TabContainer>Documentos</TabContainer>}
      {value === 6 && <TabContainer>Series</TabContainer>}
      {value === 7 && <TabContainer>Contadores</TabContainer>}
    </div>
  );
}

ContractDetailView.propTypes = {
  classes: PropTypes.object.isRequired,
  handleShowContractDetails: PropTypes.func.isRequired
};

export default withStyles(styles)(ContractDetailView);
