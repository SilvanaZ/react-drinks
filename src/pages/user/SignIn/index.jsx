import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from 'formik';
import Copyright from '../copyright';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const defaultTheme = createTheme();

export default function SignIn() {
    const {login} = useAuth();

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Ingresar
                    </Typography>

                    <Formik
                        initialValues={{
                            password: "",
                            email: "",
                        }}
                        validate={(values) => {
                            const errors = {};
                            const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9*-]+\.[A-Z]{2,}$/i;

                            if (!values.email) {
                                errors.email = "Email requerido"
                            } else if (!regexpEmail.test(values.email)) {
                                errors.email = "Email inválido"
                            }

                            if (!values.password) {
                                errors.password = "Contraseña requerido";
                            }

                            return errors;
                        }}
                        onSubmit={(values) => {
                        login(values);
                        }}
                    >
                        {
                            ({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                            }) => (
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
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
                                    <TextField
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="text"
                                    id="password"
                                    autoFocus
                                    value={values.password}
                                    error={errors.password && touched.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={errors.password && touched.password && errors.password}
                                />

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Ingresar
                                    </Button>
                                    <Grid container>
                                        <Grid item>
                                            <Link to="/register" variant="body2">
                                                {"¿No tienes una cuenta? Registrate"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )
                        }
                    </Formik>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
            <br />
            <br />
        </ThemeProvider >
    );
}