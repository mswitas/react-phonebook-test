import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Alert, AlertTitle, Box, Button, Container, TextField } from "@mui/material";
import css from "./LoginForm.module.css";
import { selectAuthError } from "../../redux/auth/selectors";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
        <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
          <TextField variant="standard" label="Email" id="email" type="email" name="email" />
          <TextField variant="standard" label="Password" id="password" type="password" name="password" />
          <Button variant="contained" type="submit">Log In</Button>
          {authError &&
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Incorect login or password
            </Alert>
          }
        </form>
      </Box>
    </Container>
  );
};