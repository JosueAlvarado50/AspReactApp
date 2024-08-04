import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        padding: "6px 20px",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        padding: "6px 20px",
        [theme.breakpoints.down("sm")]: {
            fontSize: 10, // Tamaño de letra para pantallas xs
        },
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const ListaEmpresa = () => {
    const [department, setDepartment] = useState([]);
    const navigator = useNavigate();
    const [deletedD, setDeletedD] = useState(false);

    useEffect(() => {
        {/* departmentList()
            .then((response) => {
                setDepartment(response.data);
                setDeletedD(false);
            })
            .catch((error) => {
                console.error(error);
            }); */}
    }, [deletedD]);

    function handleEdit(id) {
        navigator(`/editar-empresa/${id}`);
    }

    function handleDelete(id) {
       {/* deleteDepartment(id)
            .then(() => {
                setDeletedD(true); // Trigger re-fetch of departments after deletion
            })
            .catch((error) => {
                console.error(error);
            }); */}
    }

    const empresas = [
        {
            "nombre": "Empresa ABC",
            "razon_social": "ABC S.A. de C.V.",
            "rfc": "ABC123456789",
            "direccion_fiscal": "Calle Falsa 123, Ciudad de México, México",
            "email": "contacto@empresaabc.com",
            "telefono": "+52 55 1234 5678",
            "estatus": true
        },
        {
            "nombre": "Tecnologías XYZ",
            "razon_social": "Tecnologías XYZ S.A.",
            "rfc": "XYZ987654321",
            "direccion_fiscal": "Av. Siempre Viva 456, Monterrey, México",
            "email": "info@xyztech.com",
            "telefono": "+52 81 8765 4321",
            "estatus": true
        },
        {
            "nombre": "Comercio 123",
            "razon_social": "Comercio 123 Ltd.",
            "rfc": "COM112233445",
            "direccion_fiscal": "Blvd. Industrias 789, Guadalajara, México",
            "email": "ventas@comercio123.com",
            "telefono": "+52 33 1122 3344",
            "estatus": false
        },
        {
            "nombre": "Servicios JKL",
            "razon_social": "Servicios JKL S.A. de C.V.",
            "rfc": "JKL665544332",
            "direccion_fiscal": "Calle de la Amargura 101, Puebla, México",
            "email": "servicios@jkl.com",
            "telefono": "+52 222 3344 5566",
            "estatus": true
        },
        {
            "nombre": "Innovación MNO",
            "razon_social": "Innovación MNO S.A.",
            "rfc": "MNO223344556",
            "direccion_fiscal": "Av. Revolución 111, Tijuana, México",
            "email": "contacto@innovacionmno.com",
            "telefono": "+52 664 7788 9900",
            "estatus": false
        },
        {
            "nombre": "Soluciones DEF",
            "razon_social": "Soluciones DEF S.A. de C.V.",
            "rfc": "DEF998877665",
            "direccion_fiscal": "Av. Insurgentes 202, Cancún, México",
            "email": "info@solucionesdef.com",
            "telefono": "+52 998 1122 3344",
            "estatus": true
        },
        {
            "nombre": "Constructora UVW",
            "razon_social": "Constructora UVW S.A.",
            "rfc": "UVW776655443",
            "direccion_fiscal": "Calle Principal 303, León, México",
            "email": "ventas@construccionesuvw.com",
            "telefono": "+52 477 4455 6677",
            "estatus": true
        },
        {
            "nombre": "Agropecuaria GHI",
            "razon_social": "Agropecuaria GHI S.A. de C.V.",
            "rfc": "GHI554433221",
            "direccion_fiscal": "Carretera a la Esperanza 404, Mérida, México",
            "email": "contacto@agropecuariaghi.com",
            "telefono": "+52 999 5566 7788",
            "estatus": false
        },
        {
            "nombre": "Distribuciones RST",
            "razon_social": "Distribuciones RST Ltd.",
            "rfc": "RST332211009",
            "direccion_fiscal": "Av. Las Palmas 505, San Luis Potosí, México",
            "email": "ventas@distribucionesrst.com",
            "telefono": "+52 444 6677 8899",
            "estatus": true
        },
        {
            "nombre": "Electrónica OPQ",
            "razon_social": "Electrónica OPQ S.A. de C.V.",
            "rfc": "OPQ001122334",
            "direccion_fiscal": "Calle Tech 606, Ciudad Juárez, México",
            "email": "info@electronicaopq.com",
            "telefono": "+52 656 9988 7766",
            "estatus": false
        }
    ];

    return (
        <TableContainer
            sx={{
                width: { xs: "95%" },
                borderRadius: "10px",
                ml: { xs: 0, sm: 3, md: 3, lg: 3, xl: 0 },
                mt: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
            }}
            component={Paper}
        >
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell sx={{ fontSize: { xs: "11px" } }}>
                            ID
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: { xs: "11px" } }} align="center">
                            Nombre
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: { xs: "11px" } }} align="center">
                            Razon Social
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: { xs: "11px" } }} align="center">
                            RFC
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: { xs: "11px" } }} align="center">
                            Direccion Fiscal
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: { xs: "11px" } }} align="center">
                            Email
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: { xs: "11px" } }} align="center">
                            Telefono
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: { xs: "11px" } }} align="center">
                            Estatus
                        </StyledTableCell>
                        <StyledTableCell sx={{ fontSize: { xs: "11px" } }} align="center">
                            Opciones
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {empresas.map((dep) => (
                        <StyledTableRow key={dep.id}>
                            <StyledTableCell component="th" scope="row">
                                {dep.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {dep.nombre}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {dep.razon_social}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {dep.rfc}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {dep.direccion_fiscal}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {dep.email}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {dep.telefono}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {dep.estatus}
                            </StyledTableCell>
                            
                                <StyledTableCell align="center">
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: 1,
                                            flexDirection: {
                                                xs: "column", // Layout de columna para pantallas pequeñas
                                                sm: "row", // Layout de fila para pantallas más grandes
                                            },
                                        }}
                                    >
                                        <Button
                                            sx={{ fontSize: { xs: "8px" } }}
                                            variant="contained"
                                            color="primary"
                                            startIcon={<EditIcon sx={{ width: { xs: "15px" } }} />}
                                            onClick={() => handleEdit(dep.id)}
                                        >
                                            Editar
                                        </Button>

                                        <Button
                                            sx={{ fontSize: { xs: "8px" } }}
                                            variant="contained"
                                            color="secondary"
                                            startIcon={<DeleteIcon sx={{ width: { xs: "15px" } }} />}
                                            onClick={() => handleDelete(dep.id)}
                                        >
                                            Eliminar
                                        </Button>
                                    </Box>
                                </StyledTableCell>
                           
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

}

export default ListaEmpresa;