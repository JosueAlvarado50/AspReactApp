import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './assets/components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import PersistentDrawerLeft from './assets/components/PersistentDrawerLeft';
import Main from './assets/components/PortafolioDashboard/Main.jsx';
import { Box, Typography, Grid } from '@mui/material';
import Footer from './assets/components/Footer';
import EmpresaCrear from './assets/components/Empresa/EmpresaCrear';
import EmpresaForm from './assets/components/Empresa/EmpresaForm';
import Empresa from './assets/components/Empresa/Empresa.jsx';
import EmpresaDetalle from './assets/components/Empresa/EmpresaDetalle'
function App() {
    const [open, setOpen] = useState(false);
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);
    const toggleDrawer = () => {
        setOpen(!open);
    };

  
    return (
        <BrowserRouter>
            <Box>
                <Navbar></Navbar>
                <Grid container  sx={{ mt: 10 }}>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} sx={{ height: "900px" }}>
                        <PersistentDrawerLeft open={open} toggleDrawer={toggleDrawer} ></PersistentDrawerLeft>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10} lg={10} xl={10} sx={{ ml: { xs: 0 } }}>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/Empresa" element={<Empresa />} />
                            <Route path="/Empresa-registro" element={<EmpresaCrear />} />
                            <Route path="/Empresa-editar/:id" element={<EmpresaDetalle />} />
                        </Routes>
                        {/*   <Main></Main>

                        <p>This component demonstrates fetching data from the server.</p>
                       {contents}*/}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ textAlign: 'center' }}>
                        <Footer></Footer>
                    </Grid>
                </Grid>
            </Box>
        </BrowserRouter>
        
    );
    
    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }
}

export default App;