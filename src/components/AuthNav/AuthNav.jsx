import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { Button } from "@mui/material";
    
export const AuthNav = () => {
    return (
        <div className={css.authMenu}>
            <NavLink to="/register" className={css.authMenuLink}>
               <Button type="text" sx={{color: "inherit"}}>Register</Button> 
            </NavLink>
            <NavLink to="/login" className={css.authMenuLink}>
                <Button type="text" sx={{color: "inherit"}}>Login</Button>
            </NavLink>
        </div>
    );
};
