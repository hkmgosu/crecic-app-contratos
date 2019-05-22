import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const fakeProps = {
  title: "Nuevo Contrato"
};

function ContractFormDialog(props) {
  const { open, handleClose } = props;

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
        <TextField
          style={{ padding: 6 }}
          id="seller"
          name="seller"
          label="Vendedor"
          type="text"
          fullWidth
          margin="normal"
        />
        <TextField
          style={{ padding: 6 }}
          margin="normal"
          name="contract_type"
          id="contract_type"
          label="Tipo Contrato"
          type="text"
          fullWidth
        />
        <TextField
          style={{ padding: 6 }}
          margin="normal"
          id="customer_code"
          name="client_code"
          label="Código Cliente"
          type="text"
          fullWidth
        />
        <TextField
          style={{ padding: 6 }}
          id="customer_rut"
          name="customer_rut"
          label="Rut Cliente"
          type="text"
          margin="normal"
          fullWidth
        />
        <TextField
          style={{ padding: 6 }}
          id="customer_name"
          name="customer_name"
          label="Razón Social"
          type="text"
          margin="normal"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContractFormDialog;
