import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './assets/components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import PersistentDrawerLeft from './assets/components/PersistentDrawerLeft';
import Main from './assets/components/PortafolioDashboard/Main.jsx';
import { Box, Typography, Grid } from '@mui/material';
import Footer from './assets/components/Footer';
function App() {
    const [open, setOpen] = useState(false);
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
    }, []);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    //backgroundColor: { xs: "red", sm: "yellow", md: "green", lg: "blue", xl: "grey" },
    return (
        <BrowserRouter>
            <Box>
                <Navbar></Navbar>
                <Grid container  sx={{ mt: 10 }}>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} sx={{ height: "900px", backgroundColor: { xs: "purple", sm: "grey", md: "green", lg: "pink", xl: "green" } }}>
                        <PersistentDrawerLeft open={open} toggleDrawer={toggleDrawer} ></PersistentDrawerLeft>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10} lg={10} xl={10} sx={{ ml: {xs: 0} , backgroundColor: { xs: "grey", sm: "yellow", md: "brown", lg: "blue", xl: "purple"} }}>
                        <Main></Main>
                        
                        <p>This component demonstrates fetching data from the server.</p>
                       {/* {contents}*/}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ textAlign: 'center', backgroundColor: { xs: "grey", sm: "yellow", md: "brown", lg: "blue", xl: "red" } }}>
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