import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SelectAutoComplete from "../system/SelectAutoComplete";

function ContractFormDialog(props) {
  const { open, handleClose, handleShowContractDetails } = props;
  const [seller, setSeller] = React.useState();

  console.log("seller", seller);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Nuevo Contrato</DialogTitle>
      <DialogContent style={{ display: "flex", flexWrap: "wrap" }}>
        <DialogContentText>Ingrese información general:</DialogContentText>
        <SelectAutoComplete
          label="Vendedores"
          options={[
            { label: "opcion 1", value: "1" },
            { label: "opcion 2", value: "2" }
          ]}
          onChange={setSeller}
        />
        <TextField
          id="customer_code"
          name="client_code"
          label="Código Cliente"
          type="text"
          fullWidth
        />
        <TextField
          id="customer_rut"
          name="customer_rut"
          label="Rut Cliente"
          type="text"
          fullWidth
        />
        <TextField
          id="customer_name"
          name="customer_name"
          label="Razón Social"
          type="text"
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
