import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DashboardLayout from "../components/DashboardLayout";
import SimpleLineChart from "../components/SimpleLineChart";
import { appRoutes } from "../src/constants";

const styles = theme => ({
  chartContainer: {
    marginLeft: -22
  }
});

const Index = props => {
  const { classes, dashboardLayoutConfig } = props;
  return (
    <DashboardLayout dashboardLayoutConfig={dashboardLayoutConfig}>
      <Typography variant="h4" gutterBottom component="h2">
        Grafico
      </Typography>
      <Typography component="div" className={classes.chartContainer}>
        <SimpleLineChart />
      </Typography>
    </DashboardLayout>
  );
};

Index.getInitialProps = async function({ pathname }) {
  // 1-  Token Validation or other request here -------------------------

  // -------

  const selectedMenu =
    appRoutes.index.home.href === pathname || appRoutes.index.selectedIndex
      ? appRoutes.index.selectedIndex
      : 0;

  return {
    dashboardLayoutConfig: {
      user: {
        name: "Erick"
      },
      selectedMenu
    }
  };
};

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  dashboardLayoutConfig: PropTypes.shape({
    user: PropTypes.object,
    selectedMenu: PropTypes.number.isRequired
  }).isRequired
};

export default withStyles(styles)(Index);
