import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DashboardLayout from "../components/DashboardLayout";
import SimpleLineChart from "../components/SimpleLineChart";
import PieChartExample from "../components/PieChartExample";
import ComposedChartExample from "../components/ComposedChartExample";
import SimpleBarChartExample from "../components/SimpleBarChartExample";
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
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item lg={9}>
          <Typography variant="h4" gutterBottom component="h2">
            Gráficos
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            <ComposedChartExample />
            {/* <PieChartExample /> */}
            <SimpleLineChart />
          </Typography>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

Index.getInitialProps = async function getInitialProps({ pathname }) {
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
