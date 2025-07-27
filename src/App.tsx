import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container, Box, IconButton, CssBaseline, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Container as ParticlesContainer } from "@tsparticles/engine";

const App: React.FC = () => {
    // const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    // const [darkMode, setDarkMode] = useState(true);
    const [init, setInit] = useState(false);

    // This useEffect hook handles the async initialization
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const theme = createTheme({
        palette: {
            mode:  "dark",
            primary: {
                main: '#00bcd4',
            },
            secondary: {
                main: '#f50057',
            },
            background: {
                default:  '#121212' ,
                paper: '#1e1e1e' ,
            },
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
    });

    const particlesLoaded = async (container?: ParticlesContainer): Promise<void> => {
        console.log(container);
    };

    if (!init) {
        return <></>;
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded} // Corrected prop name
                options={{
                    background: {
                        color: {
                            value:  "#121212",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: {
                                enable: true,
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#00bcd4",
                        },
                        links: {
                            color: "#00bcd4",
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                            }
                        },
                        opacity: {
                            value: 0.2,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <BrowserRouter>
                <Box sx={{ display: 'flex', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
                    {/*<Drawer*/}
                    {/*    variant="temporary"*/}
                    {/*    // open={isNavbarOpen}*/}
                    {/*    // onClose={() => setIsNavbarOpen(false)}*/}
                    {/*    sx={{*/}
                    {/*        width: 250,*/}
                    {/*        flexShrink: 0,*/}
                    {/*        '& .MuiDrawer-paper': {*/}
                    {/*            width: 250,*/}
                    {/*            backgroundColor: 'rgba(30, 30, 30, 0.9)',*/}
                    {/*            backdropFilter: 'blur(10px)',*/}
                    {/*        },*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Navbar />*/}
                    {/*</Drawer>*/}
                    <Box component="main" sx={{ flex: 1, padding: '20px', width: '100%' }}>
                        {/*<IconButton*/}
                        {/*    onClick={() => setIsNavbarOpen(!isNavbarOpen)}*/}
                        {/*    sx={{ position: 'absolute', top: 20, right: 60, zIndex: 1201 }}*/}
                        {/*    aria-label="toggle-navbar"*/}
                        {/*>*/}
                        {/*    <MenuIcon />*/}
                        {/*</IconButton>*/}
                        {/*<IconButton*/}
                        {/*    onClick={() => setDarkMode(!darkMode)}*/}
                        {/*    sx={{ position: 'absolute', top: 20, right: 20, zIndex: 1201 }}*/}
                        {/*    aria-label={darkMode ? "light-mode" : "dark-mode"}*/}
                        {/*>*/}
                        {/*    {darkMode ? <Brightness7 /> : <Brightness4 />}*/}
                        {/*</IconButton>*/}
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