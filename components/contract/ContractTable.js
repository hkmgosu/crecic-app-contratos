import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import "isomorphic-unfetch";
import { contracts } from "./ContractsData";

const styles = theme => ({
  root: {
    width: "100%"
  },
  table: {
    minWidth: 700
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class ContractTable extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      contracts: false
    };
  }

  async componentDidMount() {
    try {
      await this.setState({ contracts: false });
      const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
      const data = await res.json();
      await this.setState({ contracts: data }); // eslint-disable-line
    } catch (err) {
      console.log(err); // eslint-disable-line
    }
  }

  render() {
    const { classes } = this.props;
    const { contracts } = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Show</TableCell>
              <TableCell>Fecha Premier</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!contracts ? (
              <TableRow>
                <TableCell colSpan={12} align="center">
                  <CircularProgress className={classes.progress} />
                </TableCell>
              </TableRow>
            ) : (
              contracts.map((n, index) => (
                <TableRow key={n.show.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell component="th" scope="column">
                    <img src={n.show.image.medium} style={{ height: "50%" }} />
                  </TableCell>
                  <TableCell>{n.show.premiered}</TableCell>
                  <TableCell>{n.show.rating.average}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(ContractTable);
