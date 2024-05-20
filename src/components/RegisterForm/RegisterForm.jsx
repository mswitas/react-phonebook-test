import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import { Box, Button, Container, TextField } from "@mui/material";


export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <Container maxWidth="sm">
            <Box
                component="div"
                sx={{
                border: "1px solid #845EC2",
                borderRadius: "5px",
                padding: "25px",
                marginBlockStart: "25px",
                boxShadow: "0px 8px 10px -1px rgba(75, 68, 83, 1)"
                }}
            >
                <form className={css.registerForm} onSubmit={handleSubmit} autoComplete="off">
                    <TextField variant="standard" label="Name" type="text" name="name" />
                    <TextField variant="standard" label="Email" type="email" name="email" />
                    <TextField variant="standard" label="Password" type="password" name="password" />
                    <Button variant="contained" type="submit">Register</Button>
                </form>
            </Box>
        </Container>
    );
};
