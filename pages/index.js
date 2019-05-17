import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DashboardLayout from "../components/DashboardLayout";
import SimpleLineChart from "../components/SimpleLineChart";
import SimpleTable from "../components/SimpleTable";

const styles = theme => ({
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  }
});

const Index = props => {
  const { classes } = props;
  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom component="h2">
        Grafico
      </Typography>
      <Typography component="div" className={classes.chartContainer}>
        <SimpleLineChart />
      </Typography>
      <Typography variant="h4" gutterBottom component="h2">
        Productos
      </Typography>
      <div className={classes.tableContainer}>
        <SimpleTable />
      </div>
    </DashboardLayout>
  );
};

Index.getInitialProps = async function() {
  // 1-  Token Validation or other request here -------------------------

  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  // const data = await res.json()

  // console.log(`Show data fetched. Count: ${data.length}`)

  console.log("home server index");

  return {
    user: {
      name: "Erick",
      quiroz: "Quiroz"
    }
  };
};

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
