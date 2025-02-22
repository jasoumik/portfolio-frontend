import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {/* Desktop Sidebar Navigation - Only Visible on md and larger screens */}
            <Box
                sx={{
                    display: { xs: 'block', md: 'block' },
                    width: 250,
                    flexShrink: 0,
                    bgcolor: 'primary.main',
                    height: '100vh',
                    position: 'fixed',
                    padding: '20px',
                }}
            >
                <Typography variant="h6" color="inherit" component={Link} to="/">John Saheb</Typography>
                <List>
                    <ListItemButton component={Link} to="/">Home</ListItemButton>
                    <ListItemButton component={Link} to="/about">About</ListItemButton>
                    <ListItemButton component={Link} to="/projects">Projects</ListItemButton>
                    <ListItemButton component={Link} to="/contact">Contact</ListItemButton>
                </List>
            </Box>

            {/* Content Area - Shifts on Desktop */}
            <Box
                component="main"
                sx={{
                    flex: 1,
                    padding: '20px',
                    marginLeft: { xs: 0, md: 250 }, // Shift content on large screens
                    transition: 'margin-left 0.3s ease',
                }}
            >
                {/* Your main content */}
            </Box>
        </Box>
    );
};

export default Navbar;
