import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DashboardLayout from "../components/DashboardLayout";
import ContractTable from "../components/ContractTable";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import FormDialog from "../components/FormDialog";

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4
  },
  tableContainer: {
    height: 320
  }
});

const Contratos = props => {
  const { classes, contracts } = props;

  const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />
    }
    // {
    //   color: "secondary",
    //   className: classes.fab,
    //   icon: <EditIcon />
    // },
    // {
    //   color: "inherit",
    //   className: classNames(classes.fab, classes.fabGreen),
    //   icon: <UpIcon />
    // }
  ];

  const [openFormDialog, setOpenFormDialog] = React.useState(false);

  function handleFormDialogClickOpen() {
    setOpenFormDialog(true);
  }

  function handleFormDialogClose() {
    setOpenFormDialog(false);
  }

  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom component="h2">
        Contratos
      </Typography>
      <div className={classes.tableContainer}>
        <ContractTable contracts={contracts} />
      </div>
      <Zoom
        key={fabs[0].color}
        in={true}
        timeout={{ enter: 600, exit: 600 }}
        style={{
          transitionDelay: `600ms`
        }}
        unmountOnExit
      >
        <Fab
          className={fabs[0].className}
          color={fabs[0].color}
          onClick={handleFormDialogClickOpen}
        >
          {fabs[0].icon}
        </Fab>
      </Zoom>
      <Zoom>
        <FormDialog open={openFormDialog} handleClose={handleFormDialogClose} />
      </Zoom>
    </DashboardLayout>
  );
};

Contratos.getInitialProps = async function() {
  // 1-  Token Validation or other request here -------------------------

  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log("server contratos index");

  return {
    user: {
      name: "Erick",
      quiroz: "Quiroz"
    },
    contracts: data
  };
};

Contratos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contratos);
