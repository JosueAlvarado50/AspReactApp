import { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { CircularProgress } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { getEmpresaById, updateEmpresa } from '../../../Services/EmpresaService';


const defaultTheme = createTheme();

const EmpresaDetalle = () => {

    const { id } = useParams();
    const navigator = useNavigate();
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const [form, setForm] = useState({
        id: '',
        nombre: '',
        razon_social: '',
        rfc: '',
        direccion_fiscal: '',
        email: '',
        telefono: '',
        estatus: false,
    });

    const [errors, setErrors] = useState({
        id: false,
        nombre: false,
        razon_social: false,
        rfc: false,
        direccion_fiscal: false,
        email: false,
        telefono: false,
        estatus: false,
    });

    useEffect(() => {
        getEmpresaById(id)
            .then((response) => {
                setForm(response.data);
            })
            .catch((error) => {
                console.error(error);
                setSnackbarMessage("Fallo en recuperar la empresa.");
                setOpenSnackbar(true);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value === "true",
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
           
            updateEmpresa(id, form)
                .then((response) => {
                console.log(response.data);
                console.log("Empresa actualizada");
                navigator("/Empresa");
              })
              .catch((error) => {
              console.log(error);
              setSnackbarMessage("Update failed. Please try again.");
              setOpenSnackbar(true);
              })
            .finally(() => {
              setLoading(false);
            });
       
        }
    }
    //backgroundColor: { xs: "red", sm: "yellow", md: "green", lg: "blue", xl: "grey" },
    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ mb: 6, width: { xs: "95%" } }} >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    component={Paper}
                    
                    elevation={6}
                    sx={{
                        
                        height: "300px",
                        backgroundImage:
                            "url(https://img.freepik.com/foto-gratis/persona-vista-superior-escribiendo-computadora-portatil-espacio-copia_23-2148708035.jpg?t=st=1722835064~exp=1722838664~hmac=ae4f822fd95f986d0cf89e51e677a3e8fcb8ad2e6a3937f61e55063e6d4a08a0&w=1480)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >

                </Grid>
                
                <Grid item xs={12} sm={12} md={12} lg={12} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 4,
                            mx: 4, 
                            alignItems: "center",
                        }}
                    >
                        <Grid container container direction="column" alignItems="center" justifyContent="center">
                            <Grid item >
                                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                    <BusinessIcon />
                                </Avatar>
                            </Grid>
                            <Grid item >
                                <Typography component="h1" variant="h5">
                                    Detalle de la Empresa
                                </Typography>
                            </Grid>
                        </Grid>
                       
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <Grid container spacing={2}  >
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={4} >
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
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
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
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={4} >
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
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}  >
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}  >
                                <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
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
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                    <FormControl fullWidth margin="normal" error={Boolean(errors.estatus)}>
                                        <InputLabel id="estatus-label">Estatus</InputLabel>
                                        <Select
                                            id="estatus"
                                            labelId="estatus-label"  // Asociar el InputLabel con el Select
                                            label="Estatus"           // Necesario para el Select para mostrar la etiqueta
                                            fullWidth
                                            name="estatus"
                                            value={form.estatus.toString()} // Convertir booleano a string para coincidir con los valores de MenuItem
                                            onChange={handleChange}
                                            sx={{ minWidth: 100 }}
                                        >
                                            <MenuItem value={"true"}>Activado</MenuItem>
                                            <MenuItem value={"false"}>Desactivado</MenuItem>
                                        </Select>
                                        {errors.estatus && (
                                            <FormHelperText>estatus is required.</FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Box
                                display="flex"           // Activa el modo flexbox
                                justifyContent="end"  // Centra horizontalmente
                                alignItems="center"      // Centra verticalmente si lo deseas
                            >
                                <Button
                                    type="submit"
                                    disabled={loading}
                                    variant="contained"
                                    sx={{
                                        mt: 3,
                                        mb: 2,
                                        width: "200px",
                                        backgroundColor: "#5a7d6d",
                                        borderRadius: "25px",
                                    }}
                                >
                                    Actualizar
                                </Button>
                            </Box>
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


export default EmpresaDetalle;