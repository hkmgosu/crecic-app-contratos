import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DashboardLayout from "../components/DashboardLayout";
import ContractTable from "../components/contract/ContractTable";
import ContractList from "../components/contract/ContractList";
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

  const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />
    }
  ];

  const [openContractFormDialog, setOpenContractFormDialog] = React.useState(
    false
  );

  function handleContractFormDialogClickOpen() {
    setOpenContractFormDialog(true);
  }

  function handleContractFormDialogClose() {
    setOpenContractFormDialog(false);
  }

  return (
    <DashboardLayout dashboardLayoutConfig={dashboardLayoutConfig}>
      <Typography variant="title" gutterBottom component="h2">
        Contratos
      </Typography>
      <ContractTable />
      <ContractList />
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
      <Zoom>
        <ContractFormDialog
          open={openContractFormDialog}
          handleClose={handleContractFormDialogClose}
        />
      </Zoom>
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
