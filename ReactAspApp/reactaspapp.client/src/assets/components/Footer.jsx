import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Facebook, WhatsApp, Instagram } from "@mui/icons-material";

const Footer = () => {


    //backgroundColor: { xs: "red", sm: "yellow", md: "green", lg: "blue", xl: "grey" },
    return (
        <Box
            component="footer"
            sx={{
                ml: { sm: 2, xs: 4 },
                backgroundColor: { xs: "red", sm: "yellow", md: "green", lg: "blue", xl: "#333" },
                color: "#fff",
                width: "100%",
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sx={{ pl: 2, textAlign: "center" }}>
                    <Typography variant="h6" gutterBottom>
                        Informaci�n de contacto
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1, pl: 1 }}>
                        Direcci�n: Calle Principal #123, Ciudad, Pa�s
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1, pl: 1 }}>
                        Tel�fono: +123456789
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1, pl: 1 }}>
                        Email: info@example.com
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} sx={{ pl: 2, textAlign: "center" }}>
                    <Typography variant="h6" gutterBottom>
                        Enlaces �tiles
                    </Typography>
                    <Link
                        href="#"
                        color="inherit"
                        sx={{ display: "block", mb: 1, pl: 1 }}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="#"
                        color="inherit"
                        sx={{ display: "block", mb: 1, pl: 1 }}
                    >
                        Sobre nosotros
                    </Link>
                    <Link
                        href="#"
                        color="inherit"
                        sx={{ display: "block", mb: 1, pl: 1 }}
                    >
                        Servicios
                    </Link>
                    <Link
                        href="#"
                        color="inherit"
                        sx={{ display: "block", mb: 1, pl: 1 }}
                    >
                        Contacto
                    </Link>
                </Grid>
                <Grid item xs={12} md={4} sx={{ pl: 2, textAlign: "center" }}>
                    <Typography variant="h6" gutterBottom>
                        S�guenos en las redes sociales
                    </Typography>
                    <IconButton color="inherit" href="#">
                        <Facebook />
                    </IconButton>
                    <IconButton color="inherit" href="#">
                        <WhatsApp />
                    </IconButton>
                    <IconButton color="inherit" href="#">
                        <Instagram />
                    </IconButton>
                </Grid>
            </Grid>
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                � 2024 Todos los derechos reservados.
            </Typography>
        </Box>
    );
};

export default Footer;