import PropTypes from "prop-types";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { setEdit } from "../../redux/edit/slice";
import { setDelete } from "../../redux/delete/slice";


export const Contact = ({ contact }) => {
  const dispath = useDispatch();
  
  const handleDelete = () => {
    dispath(setDelete({ open: true, contactId: contact.id }));
  }

  const handleEdit = () => {
    dispath(setEdit({open: true, contact}));
  }

  return (
    <li className={css.item}>
      <span className={css.itemText}>
        {contact.name}: {contact.number}
      </span>
      <div className={css.itemBtns}>
        <Button variant="contained" type="button" onClick={handleEdit}>Edit</Button>
        <Button variant="contained" color="error" type="button" onClick={handleDelete}>Delete</Button>
      </div>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}
