import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './assets/components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PersistentDrawerLeft from './assets/components/PersistentDrawerLeft';
import Main from './assets/components/PortafolioDashboard/Main.jsx';

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

    return (
        <BrowserRouter>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                p: 0,
                m: 0,
            }}>
                <PersistentDrawerLeft open={open} toggleDrawer={toggleDrawer} />
                <Container component="div"
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        mb: 4,
                        mt: 11,
                        disableGutters: true,
                        backgroundColor: "white",
                        borderRadius: "15px",
                        boxShadow: 3,
                        minHeight: "100vh",
                    }}>
                    <Navbar></Navbar>
                    <Main></Main>
                    <h2>Este es un ejemplo de react 18 con Asp.net core 8</h2>
                    <h1 id="tableLabel">Weather forecast</h1>
                    <p>This component demonstrates fetching data from the server.</p>
                    {contents}
                </Container>
                
                    
                
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