import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    margin: "16 0 16 0"
  },
  inline: {
    display: "inline"
  },
  searchField: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 24,
    margin: 4
  }
});

const listItemDatas = [
  {
    id: 1,
    RutAux: "11.111.111-1",
    NomAux: "CLIENTE UNO",
    inicio: "01-01-2010",
    fin: "01-01-2013",
    vendedor: "Vendedor Uno"
  },
  {
    id: 2,
    RutAux: "22.222.222-2",
    NomAux: "CLIENTE DOS",
    inicio: "01-01-2011",
    fin: "01-01-2014",
    vendedor: "Vendedor Dos"
  },
  {
    id: 3,
    RutAux: "33.333.333-3",
    NomAux: "CLIENTE TRES",
    inicio: "01-01-2012",
    fin: "01-01-2013",
    vendedor: "Vendedor Tres"
  },
  {
    id: 4,
    RutAux: "44.444.444-4",
    NomAux: "CLIENTE CUATRO",
    inicio: "01-01-2012",
    fin: "01-01-2015",
    vendedor: "Vendedor Cuatro"
  },
  {
    id: 5,
    RutAux: "55.555.555-5",
    NomAux: "CLIENTE CINCO",
    inicio: "01-01-2017",
    fin: "01-01-2020",
    vendedor: "Vendedor Cinco"
  },
  {
    id: 6,
    RutAux: "66.666.666-6",
    NomAux: "CLIENTE SEIS",
    inicio: "01-01-2013",
    fin: "01-01-2016",
    vendedor: "Vendedor Uno"
  },
  {
    id: 7,
    RutAux: "77.777.777-7",
    NomAux: "CLIENTE SIETE",
    inicio: "01-01-2013",
    fin: "01-01-2015",
    vendedor: "Vendedor Uno"
  },
  {
    id: 8,
    RutAux: "88.888.888-8",
    NomAux: "CLIENTE OCHO",
    inicio: "01-01-2015",
    fin: "01-01-2018",
    vendedor: "Vendedor Uno"
  },
  {
    id: 9,
    RutAux: "99.999.999-9",
    NomAux: "CLIENTE NUEVE",
    inicio: "01-01-2017",
    fin: "01-01-2020",
    vendedor: "Vendedor Tres"
  },
  {
    id: 10,
    RutAux: "10.101.101-0",
    NomAux: "CLIENTE DIEZ",
    inicio: "01-01-2018",
    fin: "01-01-2021",
    vendedor: "Vendedor Uno"
  }
];

function ContractList(props) {
  const { classes } = props;

  const listItems = [];
  listItemDatas.forEach((listItemData, index) =>
    listItems.push(
      <ListItem key={index} button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt={
              listItemData.avatar ? listItemData.avatar.alt : index.toString()
            }
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography className={classes.inline} variant="h6">
                {listItemData.NomAux}{" "}
              </Typography>
              {listItemData.RutAux}
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                className={classes.inline}
                color="textPrimary"
              >
                {`${listItemData.inicio} - ${listItemData.fin} `}
              </Typography>
              {listItemData.vendedor}
            </React.Fragment>
          }
        />
      </ListItem>
    )
  );

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <Typography gutterBottom variant="h5" style={{ paddingTop: "6px" }}>
          Lista Contratos
        </Typography>
        <div className={classes.searchField}>
          <InputBase className={classes.input} placeholder="Buscar..." />
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} />
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="Directions"
          >
            <DirectionsIcon />
          </IconButton>
        </div>
      </ListItem>
      {listItems}
    </List>
  );
}

ContractList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContractList);
