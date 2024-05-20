import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setEdit } from '../../redux/edit/slice';
import { selectEditContact, selectEditOpen } from '../../redux/edit/selectors';
import { editContact } from '../../redux/contacts/operations';

export default function EditDialog() {
    const dispatch = useDispatch();
    const open = useSelector(selectEditOpen);
    const contact = useSelector(selectEditContact);
    // console.log(contact, "?");

  const handleClose = () => {
      dispatch(setEdit({open: false, contact: null}));
  };

    


  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const name = formJson.name;
              const number = formJson.number;
              const editedContact = { id: contact.id, name, number };
              console.log(editedContact);
              dispatch(editContact(editedContact));
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit contact</DialogTitle>
        <DialogContent>
            <DialogContentText>
                You can edit your contact here. 
            </DialogContentText>
            <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                defaultValue={contact?.name}
            />
            <TextField
                autoFocus
                required
                margin="dense"
                id="number"
                name="number"
                label="Number"
                type="text"
                fullWidth
                variant="standard"
                defaultValue={contact?.number}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}