import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ListaEmpresa from './ListaEmpresa';
function Department() {
    return (
        <Box
            sx={{
                ml: { xs: 4 },
                width: { xs: "100%" },
                display: "flex",
                flexDirection: "column",
                height: "100vh", // Hace que el contenedor ocupe toda la altura de la ventana
            }}
        >
            
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mb: 2,
                    }}
                >
                    <Button
                        component={Link}
                        to="/add-department"
                        sx={{
                            mr: { xs: 3 },
                            fontSize: { xs: "10px" },
                            textAlign: "center",
                            width: {
                                xs: "auto",
                                sm: "auto",
                            },
                            color: "white",
                            backgroundColor: "green",
                            border: "1px solid white",
                            borderRadius: "25px",
                            mt: 1,
                        }}
                    >
                        Add department
                    </Button>
                </Box>
            
            <Box
                sx={{
                    flexGrow: 1,
                    overflowY: "auto", // Permite el desplazamiento vertical
                }}
            >
                <ListaEmpresa />
            </Box>
        </Box>
    );
}

export default Department;
