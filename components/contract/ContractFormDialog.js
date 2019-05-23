import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ContractSellerAutoComplete from "./ContractSellerAutoComplete";
import ContractTypeAutoComplete from "./ContractTypeAutoComplete";

const fakeProps = {
  title: "Nuevo Contrato"
};

function ContractFormDialog(props) {
  const { open, handleClose, handleShowContractDetails } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{fakeProps.title}</DialogTitle>
      <DialogContent style={{ display: "flex", flexWrap: "wrap" }}>
        {/* <DialogContentText>Validar contrato:</DialogContentText> */}
        <ContractSellerAutoComplete />
        <ContractTypeAutoComplete />
        <TextField
          style={{ padding: 6 }}
          margin="normal"
          id="customer_code"
          name="client_code"
          label="Código Cliente"
          type="text"
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
        />
        <TextField
          style={{ padding: 6 }}
          id="customer_rut"
          name="customer_rut"
          label="Rut Cliente"
          type="text"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          fullWidth
        />
        <TextField
          style={{ padding: 6 }}
          id="customer_name"
          name="customer_name"
          label="Razón Social"
          type="text"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={() => {
            handleClose();
            handleShowContractDetails();
          }}
          color="primary"
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContractFormDialog;
