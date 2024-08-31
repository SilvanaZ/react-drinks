import { Formik } from 'formik';
import useAuth from '../../../hooks/useAuth';
import {
    StyledContainer,
    StyledAvatar,
    StyledTitle,
    StyledTextField,
    StyledButton,
    StyledLink,
    StyledBox
} from './StyledSignUp';
import { Box, CssBaseline, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const { register } = useAuth();

    return (
        <StyledContainer component="main" maxWidth="xs">
            <CssBaseline />
            <StyledBox
            >
                <StyledAvatar>
                    <LockOutlinedIcon />
                </StyledAvatar>
                <StyledTitle component="h1" variant="h5">
                    Registrate
                </StyledTitle>

                <Formik
                    initialValues={{
                        name: "",
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

                        if (!values.name) {
                            errors.name = "Nombre requerido";
                        }
                        if (!values.password) {
                            errors.password = "Contraseña requerida";
                        }

                        return errors;
                    }}
                    onSubmit={(values) => {
                        register(values);
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
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <StyledTextField
                                        fullWidth
                                        name="name"
                                        label="Nombre"
                                        type="text"
                                        id="name"
                                        autoFocus
                                        value={values.name}
                                        error={errors.name && touched.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.name && touched.name && errors.name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
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
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField
                                        fullWidth
                                        type="password"
                                        id="password"
                                        label="Password"
                                        name="password"
                                        value={values.password}
                                        error={errors.password && touched.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={errors.password && touched.password && errors.password}
                                    />
                                </Grid>
                            </Grid>
                            <StyledButton
                                type="submit"
                                fullWidth
                                variant="contained"
                            >
                                Registrarme
                            </StyledButton>
                            <Grid container justifyContent="flex-end">
                                <StyledLink item>
                                    <Link to="/login">
                                        ¿Ya tienes una cuenta? Ingresar
                                    </Link>
                                </StyledLink>
                            </Grid>
                        </Box>
                    )}
                </Formik>
            </StyledBox>
        </StyledContainer>
    );
}
