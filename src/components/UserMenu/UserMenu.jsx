import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { Button } from "@mui/material";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.userMenu}>
            <p>Welocome, {user.name}</p>
            <Button variant="outlined" sx={{color: "#fff", borderColor: "#fff"}} className={css.userMenuBtn} type="button" onClick={() => dispatch(logOut())}>Logout</Button>
        </div>
    );
};
