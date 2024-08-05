import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ListaEmpresa from './ListaEmpresa';
import AddIcon from '@mui/icons-material/Add';
function Department() {
    return (
        <Box
            sx={{
                mb:10,
                width: { xs: "98%" },
                display: "flex",
                flexDirection: "column",
                height: "85vh", // Hace que el contenedor ocupe toda la altura de la ventana
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
                    startIcon={<AddIcon />}
                    variant="contained"
                    component={Link}
                    to="/add-department"
                    sx={{

                        fontSize: { xs: "10px" },
                        textAlign: "center",
                        width: {
                            xs: "10%",
                            sm: "10%",
                        },
                        mr:8,
                        mt: 1,
                       backgroundColor: "green"
                    }}
                >
                    Añadir Empresa
                </Button>
            </Box>
            
                <ListaEmpresa />
            
        </Box>
    );
}

export default Department;
