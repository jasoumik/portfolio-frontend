import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container maxWidth="sm" sx={{ padding: { xs: 2, md: 4 }, textAlign: "center", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h3" color="error" fontWeight="bold" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                Sorry, the page you are looking for does not exist.
            </Typography>
            <Box>
                <Button variant="contained" color="primary" component={Link} to="/">
                    Go Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;
