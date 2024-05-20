import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { Loader } from "components/Loader/Loader";
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Box, Container } from "@mui/material";
import EditDialog from "components/EditDialog/EditDialog";
import DeleteDialog from "components/DeleteDialog/DeleteDialog";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        paddingBlockEnd: "25px",
    }
}

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your contacts</title>
            </Helmet>
                {isLoading && !error && <Loader />}
                {error && <ErrorMessage />}
            <Container maxWidth="sm" style={styles.container}>
                <Box
                    component="div"
                    sx={{
                        border: "1px solid #845EC2",
                        borderRadius: "5px",
                        padding: "25px",
                        boxShadow: "0px 8px 10px -1px rgba(75, 68, 83, 1)"
                    }}
                >
                    <h1>Phonebook</h1>
                    <ContactForm />
                </Box>
                <Box
                    component="div"
                    sx={{
                        border: "1px solid #845EC2",
                        borderRadius: "5px",
                        padding: "25px",
                        boxShadow: "0px 8px 10px -1px rgba(75, 68, 83, 1)"
                    }}
                >
                    <h2>Contacts</h2>
                    <Filter />
                    <ContactList />
                </Box>
            </Container>
            <EditDialog />
            <DeleteDialog />
        </>
    );
};
