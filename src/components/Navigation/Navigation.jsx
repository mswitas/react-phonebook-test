import { useAuth } from "hooks/useAuth";
import React from "react"
import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css";
import { Button } from "@mui/material";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className={css.mainNav}>
            <NavLink to="/" className={css.mainMenuLink}>
                <Button variant="text" sx={{ color: "inherit" }}>Home</Button>
            </NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts" className={css.mainMenuLink}>
                    <Button variant="text" sx={{ color: "inherit" }}>Contacts</Button>
                </NavLink>        
            )}
        </nav>
    );
};
