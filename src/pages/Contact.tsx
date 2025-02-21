import { Container, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Contact Me
            </Typography>
            <TextField label="Your Name" fullWidth sx={{ mb: 2 }} />
            <TextField label="Your Email" fullWidth sx={{ mb: 2 }} />
            <TextField label="Message" multiline rows={4} fullWidth sx={{ mb: 2 }} />
            <Button variant="contained" color="primary">
                Send Message
            </Button>
        </Container>
    );
};

export default Contact;
