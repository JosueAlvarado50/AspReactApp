import {
    Typography,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Divider,
    CssBaseline,
} from "@mui/material";
import {
    Inbox as InboxIcon,
    Mail as MailIcon,
    ArrowBack as ArrowBackIcon,
    ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ComputerIcon from '@mui/icons-material/Computer';
import WebIcon from '@mui/icons-material/Web';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
const drawerWidth = 240;
const minimizedWidth = 52;

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
    backgroundColor: selected ? "white" : "inherit",
    color: selected ? "black" : "#black",
    "& .MuiListItemIcon-root": {
        color: selected ? "black" : "black",
    },
}));

export default function PersistentDrawerLeft({ open, toggleDrawer }) {
    const location = useLocation();
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: open ? drawerWidth : minimizedWidth,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    "& .MuiDrawer-paper": {
                        width: open ? drawerWidth : minimizedWidth,
                        boxSizing: "border-box",
                        transition: "width 0.3s",
                        position: "fixed",
                        top: 88, // altura de la AppBar
                        bottom: 0,
                        overflow: "hidden", // Ocultar scroll horizontal y vertical
                        backgroundColor: "#f0ecec", // Color de fondo del Drawer
                        
                    },
                }}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
                <Box
                    sx={{
                        overflowY: "auto", // Permitir solo scroll vertical
                        overflowX: "hidden", // Ocultar scroll horizontal
                        width: open ? drawerWidth : minimizedWidth,
                    }}
                >
                    <List>
                        {open && (
                            <Typography variant="h7" sx={{ pl: 1, pt: 2, color: "black", fontWeight: 'bold' }}>
                                Project Management
                            </Typography>
                        )}
                        <ListItem button>
                            <ListItemIcon>
                                <ComputerIcon sx={{ color: "#black" }} />
                            </ListItemIcon>
                            {open && (
                                <ListItemText primary="Program" sx={{ color: "black" }} />
                            )}
                        </ListItem>
                        <StyledListItem
                            button
                            selected={location.pathname === "/Departments"}
                        >
                            <Link
                                to="/Departments"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <ListItemIcon>
                                    <WebIcon sx={{ color: "grey" }} />
                                </ListItemIcon>
                                {open && <ListItemText primary="Projects" sx={{ color: "#black" }} />}
                            </Link>
                        </StyledListItem>
                    </List>
                    <Divider sx={{ borderColor: "#FFFFFF" }} />
                    <List>
                        {open && (
                            <Typography variant="h7" sx={{ pl: 1, pt: 2, color: "#black", fontWeight: 'bold' }}>
                                Resources
                            </Typography>
                        )}

                        <StyledListItem
                            button
                            selected={location.pathname === "/FoodOrderHomePage"}
                        >
                            <Link
                                to="/FoodOrderHomePage"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <ListItemIcon>
                                    <ContactPageOutlinedIcon sx={{ color: "grey" }} />
                                </ListItemIcon>
                                {open && <ListItemText primary="Resources"  />}
                            </Link>
                        </StyledListItem>
                    </List>
                    <Divider sx={{ borderColor: "#FFFFFF" }} />
                    <List>
                        {open && (
                            <Typography variant="h7" sx={{ pl: 1, pt: 2, color: "#black", fontWeight: 'bold' }}>
                                Reporting
                            </Typography>
                        )}
                        <StyledListItem
                            button
                            selected={location.pathname === "/FoodOrderHomePage"}
                        >
                            <Link
                                to="/FoodOrderHomePage"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                <ListItemIcon>
                                    <AssessmentOutlinedIcon sx={{ color: "grey" }} />
                                </ListItemIcon>
                                {open && <ListItemText primary="Reports" />}
                            </Link>
                        </StyledListItem>
                    </List>
                </Box>
            </Drawer>
            <IconButton
                color="inherit"
                aria-label="toggle drawer"
                onClick={toggleDrawer}
                edge="end"
                sx={{
                    backgroundColor: "black",
                    color: "white",
                    position: "fixed",
                    top: 110, // Ajusta según sea necesario
                    left: open ? drawerWidth - 10 : minimizedWidth - 10,
                    zIndex: 1300, // Asegura que esté por encima del drawer
                    transition: "left 0.3s",
                    "&:hover": {
                        backgroundColor: "black",
                    },
                }}
            >
                {open ? <ArrowBackIcon /> : <ArrowForwardIcon />}
            </IconButton>
        </Box>
    );
}