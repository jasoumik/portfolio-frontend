import { Container, Typography, Box, Avatar, Button } from "@mui/material";
import { styled } from '@mui/system';

const ProfilePhoto = styled(Avatar)({
    width: 150,
    height: 150,
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
});

const Home = () => {
    return (
        <Container sx={{ textAlign: 'center', marginTop: '40px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                <ProfilePhoto
                    alt="John Doe"
                    src="https://via.placeholder.com/150" // Replace with actual photo URL
                />
            </Box>
            <Typography variant="h3" gutterBottom>
                Greetings!
            </Typography>
            <Typography variant="h5" gutterBottom>
                Hi, I'm John Doe
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Software Engineer | Passionate about building great software
            </Typography>

            <Box sx={{ marginBottom: '30px' }}>
                <Typography variant="body1" paragraph>
                    I am a highly motivated and self-driven software engineer with a passion for solving problems and building efficient, scalable systems. With a focus on creating innovative and user-friendly applications, I have expertise in a variety of programming languages and technologies.
                </Typography>
                <Typography variant="body1" paragraph>
                    Throughout my career, I've had the privilege of working on a wide range of projects that have honed my skills in both frontend and backend development. I love collaborating with cross-functional teams and constantly strive to stay up-to-date with the latest trends in technology.
                </Typography>
            </Box>

            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    href="/projects"
                    sx={{ marginRight: '20px' }}
                >
                    View My Projects
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    href="/contact"
                >
                    Contact Me
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
