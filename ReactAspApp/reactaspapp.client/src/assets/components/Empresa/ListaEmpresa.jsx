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
import { EmpresaList, deleteEmpresa } from "../../../Services/EmpresaService";


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
    const [Empresas, setEmpresas] = useState([]);
    const navigator = useNavigate();
    const [deletedD, setDeletedD] = useState(false);

    useEffect(() => {
        EmpresaList()
            .then((response) => {
                setEmpresas(response.data);
                setDeletedD(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [deletedD]);

    function handleEdit(id) {
        navigator(`/Empresa-editar/${id}`);
    }

    function handleDelete(id) {
        deleteEmpresa(id)
            .then(() => {
                setDeletedD(true); // Trigger re-fetch of departments after deletion
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <TableContainer
            sx={{
                width: { xs: "100%" },
                borderRadius: "10px",
                ml: { xs: 0, sm: 3, md: 3, lg: 3, xl: 0 },
                mt: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
            }}
            component={Paper}
            elevation={6}
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
                    {Empresas.map((emp) => (
                        <StyledTableRow key={emp.id}>
                            <StyledTableCell component="th" scope="row">
                                {emp.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {emp.nombre}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {emp.razon_social}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {emp.rfc}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {emp.direccion_fiscal}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {emp.email}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {emp.telefono}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {emp.estatus ? 'Activado' : 'Desactivado'}
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
                                        onClick={() => handleEdit(emp.id)}
                                    >
                                        Editar
                                    </Button>

                                    <Button
                                        sx={{ fontSize: { xs: "8px" }, backgroundColor: "red" }}
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon sx={{ width: { xs: "15px" } }} />}
                                        onClick={() => handleDelete(emp.id)}
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