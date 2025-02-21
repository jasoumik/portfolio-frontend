import { AppBar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <AppBar position="static" sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "20px", gap: "10px", height: "100vh", width: "250px", position: "fixed" }}>
            <Typography variant="h6">John Doe</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/projects">Projects</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Box>
        </AppBar>
    );
};

export default Navbar;