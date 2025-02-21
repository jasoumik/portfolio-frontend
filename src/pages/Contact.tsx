import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Contact = () => {
    return (
        <Container maxWidth="sm" sx={{ padding: { xs: 2, md: 4 }, textAlign: "center" }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Contact Me
            </Typography>
            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField label="Your Name" variant="outlined" fullWidth />
                <TextField label="Your Email" type="email" variant="outlined" fullWidth />
                <TextField label="Message" multiline rows={4} variant="outlined" fullWidth />
                <Button variant="contained" color="primary" sx={{ padding: 1.5 }}>
                    Send Message
                </Button>
            </Box>
        </Container>
    );
};

export default Contact;
