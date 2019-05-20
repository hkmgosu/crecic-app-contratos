import DashboardLayout from "../components/DashboardLayout";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { appRoutes } from "../src/constants";

const styles = theme => ({});

const Contadores = props => (
  <DashboardLayout dashboardLayoutConfig={props.dashboardLayoutConfig}>
    <h1>Contadores</h1>
  </DashboardLayout>
);

Contadores.getInitialProps = async function({ pathname }) {
  // 1-  Token Validation or other request here -------------------------

  // -------

  const selectedMenu =
    appRoutes.contadores.home.href === pathname ||
    appRoutes.contadores.selectedIndex
      ? appRoutes.contadores.selectedIndex
      : 2;

  return {
    dashboardLayoutConfig: {
      user: {
        name: "Erick"
      },
      selectedMenu
    }
  };
};

Contadores.propTypes = {
  classes: PropTypes.object.isRequired,
  dashboardLayoutConfig: PropTypes.shape({
    user: PropTypes.object,
    selectedMenu: PropTypes.number.isRequired
  }).isRequired
};

export default withStyles(styles)(Contadores);
