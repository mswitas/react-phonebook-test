import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { selectDeleteContactId, selectDeleteOpen } from '../../redux/delete/selectors';
import { setDelete } from '../../redux/delete/slice';
import { deleteContact } from '../../redux/contacts/operations';

export default function DeleteDialog() {
    const dispatch = useDispatch();
    const open = useSelector(selectDeleteOpen);
    const contactId = useSelector(selectDeleteContactId);

    const handleClose = () => {
        dispatch(setDelete({ open: false, contactId: null }));
    };

    const handleDelete = () => {
        dispatch(deleteContact(contactId));
        handleClose();
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Are you sure?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This will delete contact permanently.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
  );
}