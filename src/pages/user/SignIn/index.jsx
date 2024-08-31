import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import {
    StyledContainer,
    StyledAvatar,
    StyledTitle,
    StyledTextField,
    StyledButton,
    StyledLink,
    StyledBox
} from './StyledSignIn';
import { Box, CssBaseline, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function SignIn() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (values) => {
        await login(values);
        navigate("/");
    };

    return (
        <StyledContainer component="main" maxWidth="xs">
            <CssBaseline />
            <StyledBox>
                <StyledAvatar>
                    <LockOutlinedIcon />
                </StyledAvatar>
                <StyledTitle component="h1" variant="h5">
                    Ingresar
                </StyledTitle>

                <Formik
                    initialValues={{
                        password: "",
                        email: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9*-]+\.[A-Z]{2,}$/i;

                        if (!values.email) {
                            errors.email = "Email requerido";
                        } else if (!regexpEmail.test(values.email)) {
                            errors.email = "Email inválido";
                        }

                        if (!values.password) {
                            errors.password = "Contraseña requerida";
                        }

                        return errors;
                    }}
                    onSubmit={(values) => {
                        handleLogin(values);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <StyledTextField
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                value={values.email}
                                error={errors.email && touched.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={errors.email && touched.email && errors.email}
                            />
                            <StyledTextField
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                value={values.password}
                                error={errors.password && touched.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={errors.password && touched.password && errors.password}
                            />

                            <StyledButton
                                type="submit"
                                fullWidth
                                variant="contained"
                            >
                                Ingresar
                            </StyledButton>
                            <Grid container>
                                <StyledLink item>
                                    <a href="/register">
                                        {"¿No tienes una cuenta? Registrate"}
                                    </a>
                                </StyledLink>
                            </Grid>
                        </Box>
                    )}
                </Formik>
            </StyledBox>
        </StyledContainer>
    );
}
