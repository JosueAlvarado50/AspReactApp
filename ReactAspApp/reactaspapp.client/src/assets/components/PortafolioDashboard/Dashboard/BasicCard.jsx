import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
//backgroundColor: { xs: "red", sm: "yellow", md: "green", lg: "blue", xl: "grey" }
const BasicCard = (props) => {
    return (
        <Card sx={{ width: {xs:"80%", sm: "70%" , lg: "80%" }, backgroundColor: "#f0ecec", textAlign: 'center', borderRadius: 0, mb: 0.8 }}>
            <CardContent sx={{ p: 0 }}>
                <Typography sx={{ fontSize: 16 }} color="#black" gutterBottom>
                    {props.title }
                </Typography>
                <Typography variant="h5" component="div" >
                    { props.value }
                </Typography>
                <Typography sx={{ fontSize: 10}} color="text.secondary">
                    {props.time}
                </Typography>
            </CardContent>
        </Card>
    );
};
export default BasicCard;
