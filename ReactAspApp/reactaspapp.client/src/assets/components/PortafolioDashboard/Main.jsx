import React from "react";
import Encabezado from "./Encabezado";
import Dashboard from "./Dashboard/Dashboard.jsx";
import { Box, Typography, FormControl, Select, MenuItem, Grid, InputLabel } from '@mui/material';


const Main = () => {
    return (
        <>
            <Encabezado></Encabezado>
            <Dashboard />    
        </>
            
        
        
        
    );
};

export default Main;