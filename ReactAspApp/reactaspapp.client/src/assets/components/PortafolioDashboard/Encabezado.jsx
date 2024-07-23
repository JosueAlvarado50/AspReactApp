import React from 'react';
import { Box, Typography, FormControl, Select, MenuItem, Grid, InputLabel } from '@mui/material';

const Encabezado = () => {
    return (
        //backgroundColor: { xs: "red", sm: "yellow", md: "green", lg: "blue", xl: "grey" },

        <Box sx={{ padding: 2, width: { xs: "80%" }, ml: { xs: 9, sm: 7, md: 9, xl: 5 } }}>
            <Grid container alignItems="center" spacing={2} sx={{  width: {xl: "120%"} } }>
                <Grid item xs={12} sm={12} md={12} xl={4}>
                    <Typography variant="h6">Portfolio Dashboard</Typography>
                </Grid>
                <Grid item xs={12} sm={12} xl={8} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography>
                                Program Name
                            </Typography>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="select1">Select 1</InputLabel>
                                <Select
                                    id="select1"
                                    label="Select 1"
                                    sx={{ minWidth: 100 }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography >
                                State
                            </Typography>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="select2">Select 2</InputLabel>
                                <Select
                                    id="select2"
                                    label="Select 2"
                                    sx={{ minWidth: 100 }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography >
                                Project Manager
                            </Typography>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="select3">Select 3</InputLabel>
                                <Select
                                    id="select3"
                                    label="Select 3"
                                    sx={{ minWidth: 120 }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    );
};

export default Encabezado;