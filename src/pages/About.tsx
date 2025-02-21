import { Container, Typography, Box } from "@mui/material";

const About = () => {
    return (
        <Container maxWidth="md" sx={{ padding: { xs: 2, md: 4 }, textAlign: "center" }}>
            <Box sx={{ marginBottom: 3 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>
                    I am a full-stack developer with experience in React, TypeScript, and Laravel.
                </Typography>
            </Box>
        </Container>
    );
};

export default About;
