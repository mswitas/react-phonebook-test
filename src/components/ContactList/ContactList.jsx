import { Contact } from "components/Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filter/selectors";
import css from "./ContactList.module.css";


export const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    return (
        <ul className={css.contactsList}>
            {contacts.map(contact => {
                return (
                    <Contact key={contact.id} contact={contact} />
                );
            })}
        </ul>
    );
};

