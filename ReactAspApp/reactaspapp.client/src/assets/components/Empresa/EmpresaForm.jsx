import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { CircularProgress } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const defaultTheme = createTheme();

const EmpresaForm = () => {

    const navigator = useNavigate();
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const [form, setForm] = useState({
        nombre: '',
        razon_social: '',
        rfc: '',
        direccion_fiscal: '',
        email: '',
        telefono: '',
        estatus: false,
    });

    const [errors, setErrors] = useState({
        nombre: false,
        razon_social: false,
        rfc: false,
        direccion_fiscal: false,
        email: false,
        telefono: false,
        estatus: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {
            nombre: form.nombre === "",
            razon_social: form.razon_social === "",
            rfc: form.rfc === "",
            direccion_fiscal: form.direccion_fiscal === "",
            email: form.email === "",
            telefono: form.telefono === "",
            estatus: form.estatus === "",
        };

        setErrors(newErrors);
        const hasErrors = Object.values(newErrors).some((error) => error);

        if (hasErrors) {
            setSnackbarMessage("Please complete all required fields.");
            setOpenSnackbar(true);
        } else {
            setLoading(true);
            //añadir servicio de crear empresa
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "100vh", backgroundColor: "red" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            "url(https://www.foromarketing.com/wp-content/uploads/2016/05/empresas.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <BusinessIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Empresas
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="nombre"
                                label="Nombre"
                                name="nombre"
                                autoComplete="nombre"
                                autoFocus
                                value={form.nombre}
                                onChange={handleChange}
                                error={errors.nombre}
                                helperText={errors.nombre ? "nombre is required." : ""}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={form.razon_social}
                                onChange={handleChange}
                                name="razon_social"
                                label="Razon Social"
                                type="text"
                                id="razon_social"
                                autoComplete="razon_social"
                                error={errors.razon_social}
                                helperText={errors.razon_social ? "razon_social is required." : ""}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={form.rfc}
                                onChange={handleChange}
                                name="rfc"
                                label="RFC"
                                type="text"
                                id="rfc"
                                autoComplete="rfc"
                                error={errors.rfc}
                                helperText={errors.rfc ? "rfc is required." : ""}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                value={form.direccion_fiscal}
                                onChange={handleChange}
                                name="direccion_fiscal"
                                label="Dirección fiscal"
                                type="Text"
                                id="direccionFiscal"
                                autoComplete="direccion_fiscal"
                                error={errors.direccion_fiscal}
                                helperText={errors.direccion_fiscal ? "direccion_fiscal is required." : ""}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={form.email}
                                onChange={handleChange}
                                error={errors.email}
                                helperText={errors.email ? "email is required." : ""}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="telefono"
                                label="Telefono"
                                name="telefono"
                                autoComplete="telefono"
                                autoFocus
                                value={form.telefono}
                                onChange={handleChange}
                                error={errors.telefono}
                                helperText={errors.telefono ? "telefono is required." : ""}
                            />
                            <InputLabel htmlFor="select1">Estatus *</InputLabel>
                            <Select
                                margin="normal"
                                id="estatus"
                                fullWidth
                                name="estatus"
                                value={form.estatus}
                                onChange={handleChange}
                                error={errors.estatus}
                                helperText={errors.estatus ? "estatus is required." : ""}
                                sx={{ minWidth: 100 }}
                            >
                                <MenuItem value={10}>Activado</MenuItem>
                                <MenuItem value={20}>Desactivado</MenuItem>
                            </Select>
                            <Button
                                type="submit"
                                fullWidth
                                disabled={loading}
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    backgroundColor: "#5a7d6d",
                                    borderRadius: "25px",
                                }}
                            >
                                Registrar
                            </Button>
                            {loading && (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        marginTop: "-12px",
                                        marginLeft: "-12px",
                                    }}
                                />
                            )}
                            <Snackbar
                                open={openSnackbar}
                                autoHideDuration={6000}
                                onClose={() => setOpenSnackbar(false)}
                            >
                                <MuiAlert
                                    elevation={6}
                                    variant="filled"
                                    onClose={() => setOpenSnackbar(false)}
                                    severity="error"
                                >
                                    {snackbarMessage}
                                </MuiAlert>
                            </Snackbar>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default EmpresaForm;