import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container, Box, IconButton, CssBaseline, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const App: React.FC = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                    <Drawer
                        variant="temporary"
                        open={isNavbarOpen}
                        onClose={() => setIsNavbarOpen(false)}
                        sx={{
                            width: 250,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: 250,
                            },
                        }}
                    >
                        <Navbar />
                    </Drawer>
                    <Box component="main" sx={{ flex: 1, padding: '20px', position: 'relative', width: '100%' }}>
                        <IconButton
                            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                            sx={{ position: 'absolute', top: 20, right: 60 }}
                            aria-label="toggle-navbar"
                        >
                            <MenuIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => setDarkMode(!darkMode)}
                            sx={{ position: 'absolute', top: 20, right: 20 }}
                            aria-label={darkMode ? "light-mode" : "dark-mode"}
                        >
                            {darkMode ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                        <Container>
                            <AppRoutes />
                        </Container>
                    </Box>
                </Box>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
