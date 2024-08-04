import React from 'react';
import { Box, Typography, Grid} from '@mui/material';
import BasicCard from './BasicCard';
import Chart1 from './Chart1';
import Bar from './Bar';
import Pie from './Pie';

//backgroundColor: { xs: "red", sm: "yellow", md: "green", lg: "blue", xl: "grey" },
const Dashboard = () => {
    return (
        <Box sx={{ backgroundColor: "yellow"  ,padding: 2, width: { xs: "100%" }, ml: { xs: 0, sm: 0, md: 0, lg:-2, xl: 0 } }}>
            <Grid container alignItems="center" sx={{ width: { xl: "100%" }, alignItems: "center" }}>
                <Grid item xs={12} sm={12} md={12} lg={2} xl={2} sx={{ p: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <BasicCard title="Projects" value="16" time="" />
                    <BasicCard title="Effort" value="18 mil" time="Hours" />
                    <BasicCard title="Effort Completed" value="10 mil" time="Hours" />
                    <BasicCard title="Effort Remaining" value="8.404" time="Hours" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3}  >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ ml: { xs: "25%", sm: "35%", md: "40%", lg: "15%", xl: "25%" } }} >
                        <Typography sx={{ ml:-2 }} variant="h6">Projects by Progress</Typography>
                        <Chart1></Chart1>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ ml: {xs: "10%", sm: "20%", md: "30%", lg: "0%"} }} >
                        <Typography sx={{ ml: 8 }} variant="h6">Effort by Project</Typography>
                        <Bar></Bar>
                    </Grid>
                    
                    
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                        <Typography variant="h6">Projects by Project Manager</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ ml: { sm: 8 } }}>
                        <Pie></Pie>
                    </Grid>
                    
                    
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;