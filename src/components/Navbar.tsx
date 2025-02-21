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
                    display: { xs: 'none', md: 'block' },
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

            {/* Mobile Drawer Navigation - Only on xs Screens */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ display: { xs: 'block', md: 'none' } }} // Mobile only
            >
                <Box sx={{ width: 250 }} role="presentation">
                    <List>
                        <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/about" onClick={toggleDrawer(false)}>
                            <ListItemText primary="About" />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/projects" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Projects" />
                        </ListItemButton>
                        <ListItemButton component={Link} to="/contact" onClick={toggleDrawer(false)}>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>

            {/* Mobile Navbar with Menu Button */}
            <AppBar position="fixed" sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Toolbar>
                    <IconButton onClick={toggleDrawer(true)} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>John Doe</Typography>
                </Toolbar>
            </AppBar>

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
