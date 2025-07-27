import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container maxWidth="sm" sx={{
            textAlign: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: 'white'
        }}>
            <Typography variant="h1" sx={{ color: '#f50057', fontWeight: 'bold' }}>
                404
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Page Not Found
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
                Sorry, the page you are looking for does not exist.
            </Typography>
            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/"
                    sx={{
                        boxShadow: '0 0 15px #00bcd4',
                        transition: 'box-shadow 0.3s ease-in-out',
                        '&:hover': {
                            boxShadow: '0 0 25px #00bcd4',
                        }
                    }}
                >
                    Go Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;