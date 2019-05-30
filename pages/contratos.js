import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import Fade from "@material-ui/core/Fade";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import DashboardLayout from "../components/DashboardLayout";
import ContractList from "../components/contract/ContractList";
import ContractDetailView from "../components/contract/ContractDetailView";
import ContractFormDialog from "../components/contract/ContractFormDialog";
import { appRoutes } from "../src/constants";

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 6,
    right: theme.spacing.unit * 6
  }
});

const Contratos = props => {
  const { classes, dashboardLayoutConfig } = props;
  const [openContractFormDialog, setOpenContractFormDialog] = React.useState(
    false
  );
  const [showContractDetails, setshowContractDetails] = React.useState(false);

  function handleContractFormDialogClickOpen() {
    setOpenContractFormDialog(true);
  }

  function handleContractFormDialogClose() {
    setOpenContractFormDialog(false);
  }

  function handleShowContractDetails() {
    setTimeout(() => setshowContractDetails(!showContractDetails), 300);
  }

  const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />
    }
  ];

  return !showContractDetails ? (
    <DashboardLayout dashboardLayoutConfig={dashboardLayoutConfig}>
      <Fade
        in
        timeout={{
          enter: 300,
          exit: 300
        }}
        style={{
          transitionDelay: `300ms`
        }}
        unmountOnExit
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={9} lg={9}>
            <ContractList handleClickListItem={handleShowContractDetails} />
          </Grid>
        </Grid>
      </Fade>
      <Zoom
        key={fabs[0].color}
        in
        timeout={{
          enter: 600,
          exit: 600
        }}
        style={{
          transitionDelay: `600ms`
        }}
        unmountOnExit
      >
        <Fab
          className={fabs[0].className}
          color={fabs[0].color}
          onClick={handleContractFormDialogClickOpen}
        >
          {fabs[0].icon}
        </Fab>
      </Zoom>
      <ContractFormDialog
        open={openContractFormDialog}
        handleClose={handleContractFormDialogClose}
        handleShowContractDetails={handleShowContractDetails}
      />
    </DashboardLayout>
  ) : (
    <DashboardLayout dashboardLayoutConfig={dashboardLayoutConfig}>
      <Fade
        in
        timeout={{
          enter: 300,
          exit: 300
        }}
        style={{
          transitionDelay: `300ms`
        }}
        unmountOnExit
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item lg={9}>
            <ContractDetailView
              handleShowContractDetails={handleShowContractDetails}
            />
          </Grid>
        </Grid>
      </Fade>
    </DashboardLayout>
  );
};

Contratos.getInitialProps = async function getInitialProps({ pathname }) {
  // 1-  Token Validation or other request here -------------------------

  // -------

  const selectedMenu =
    appRoutes.contratos.home.href === pathname ||
    appRoutes.contratos.selectedIndex
      ? appRoutes.contratos.selectedIndex
      : 1;

  return {
    dashboardLayoutConfig: {
      user: {
        name: "Erick"
      },
      selectedMenu
    }
  };
};

Contratos.propTypes = {
  classes: PropTypes.object.isRequired,
  dashboardLayoutConfig: PropTypes.shape({
    user: PropTypes.object,
    selectedMenu: PropTypes.number.isRequired
  }).isRequired
};

export default withStyles(styles)(Contratos);
