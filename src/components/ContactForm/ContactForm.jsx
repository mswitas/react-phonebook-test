import { Button, TextField } from "@mui/material";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

export const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        dispatch(addContact({ name, number }));
        form.reset();
    };

    return (
            <form className={css.form} onSubmit={handleSubmit}>
                <div className={css.inputWrapper}>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        type="text"
                        name="name"
                        pattern="[a-zA-Z \-']{2,30}"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </div>
                <div className={css.inputWrapper}>
                    <TextField
                        id="outlined-basic"
                        label="Number"
                        variant="outlined"
                        fullWidth
                        type="tel"
                        name="number"
                        pattern="^\+?[0-9 \-\(\)]{7,20}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </div>
                <Button  type="submit">Add contact</Button>
            </form>
    );
}
