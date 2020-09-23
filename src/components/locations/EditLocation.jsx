import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function EditLocation({edit, setEdit}) {
  const [open, setOpen] = useState(false);


  const handleCloseSaved = () => {

    //En este caso debo implementar el cambio de nombre con el Context 
    setOpen(false);
    setEdit(false);
  };

  return (
    <div>
      <Dialog
        open={edit}
        onClose={handleCloseSaved}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          
        <TextField
            id="outlined-helperText"
            label="Editar ubicación"
            helperText="Escriba el nuevo nombre de la Ubicación"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSaved} color="primary">
            Cambiar nombre
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditLocation;
