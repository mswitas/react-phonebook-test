import { useSelector } from "react-redux"
import { selectError } from "../../redux/contacts/selectors"
import { Alert, AlertTitle } from "@mui/material";
import css from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
    const message = useSelector(selectError);
    
    return (
        <div className={css.alertContainer}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {message}
            </Alert>
        </div>
    );
}
