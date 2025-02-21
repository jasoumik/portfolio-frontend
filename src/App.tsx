import React from "react";
import { BrowserRouter } from "react-router-dom"; // This should only be here once
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

const App: React.FC = () => {
    return (
        <BrowserRouter> {/* Wrap the entire app once */}
            <Navbar />
            <Container>
                <AppRoutes />
            </Container>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
