import {Container, Typography, Box, Avatar, Grid, Tooltip, IconButton, Divider} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {styled} from '@mui/system';
import React, {useState} from "react";
import {Email, Phone, Language, LinkedIn, GitHub} from "@mui/icons-material";
import { IconType } from "react-icons";
import {
    SiPhp,
    SiLaravel,
    SiTailwindcss,
    SiReact,
    SiTypescript,
    SiMysql,
    SiPostgresql,
    SiOracle,
    SiSqlite,
    SiSymfony,
    SiDocker,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiBootstrap,
    SiJquery,
    SiChartdotjs,
    SiGit,
    SiGithub,
    SiGitlab,
    SiBitbucket,
    SiComposer,
    SiPostman,
    SiWordpress,
    SiPython,
    SiCplusplus,
    SiCpanel,
    SiOpenstack
} from "react-icons/si";

const ProfilePhoto = styled(Avatar)({
    width: 150,
    height: 150,
    border: '4px solid #00bcd4',
    boxShadow: '0 0 20px #00bcd4',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
    }
});

const TechIcon = ({Icon, color, title}: { Icon: IconType; color: string; title: string }) => (
    <Grid item>
        <Tooltip title={title} arrow>
            <Box
                component="span"
                sx={{
                    display: 'inline-flex',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.2)',
                    }
                }}
            >
                {/* Using a type assertion as a last resort to bypass the type error */}
                {React.createElement(Icon as any, { size: 50, style: { color, cursor: "pointer" } })}
            </Box>
        </Tooltip>
    </Grid>
);

const ContactIcon = ({icon: Icon, link}: { icon: React.ElementType; link: string }) => (
    <IconButton component="a" href={link} target="_blank" rel="noopener noreferrer" sx={{
        color: '#00bcd4',
        transition: 'color 0.3s ease-in-out',
        '&:hover': {
            color: '#f50057',
        }
    }}>
        <Icon/>
    </IconButton>
);

const Home = () => {
    const [darkMode] = useState(true);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
                main: '#00bcd4',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
                <ProfilePhoto alt="Jarif Ahmed Soumik" src="https://github.com/jasoumik.png" sx={{ mb: 2, mx: 'auto' }}/>
                <Typography variant="h3" fontWeight="bold" sx={{ color: '#09707a' }}>
                    Jarif Ahmed Soumik
                </Typography>
                <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>
                    Software Engineer
                </Typography>
                <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                    Dhaka, Bangladesh
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 4 }}>
                    <ContactIcon icon={Phone} link="tel:+8801716684803"/>
                    <ContactIcon icon={Email} link="mailto:jasoumik@gmail.com"/>
                    <ContactIcon icon={Language} link="https://www.jasoumik.com"/>
                    <ContactIcon icon={LinkedIn} link="https://linkedin.com/in/jasoumik"/>
                    <ContactIcon icon={GitHub} link="https://github.com/jasoumik"/>
                </Box>
                <Divider sx={{ bgcolor: '#09707a', my: 4 }}/>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ color: '#09707a', mb: 2 }}>Career Goals</Typography>
                    <Typography variant="body1" sx={{ color: 'white', maxWidth: '600px', mx: 'auto' }}>
                        Passionate about full-stack development, eager to contribute my skills and knowledge to innovative projects.
                    </Typography>
                </Box>
                <Divider sx={{ bgcolor: '#09707a', my: 4 }}/>
                <Box>
                    <Typography variant="h4" fontWeight="bold" sx={{ color: '#09707a', mb: 4 }}>Technologies I use</Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Frontend</Typography>
                            <Grid container spacing={3} justifyContent="center">
                                <TechIcon Icon={SiHtml5} color="#E34F26" title="HTML5"/>
                                <TechIcon Icon={SiCss3} color="#1572B6" title="CSS3"/>
                                <TechIcon Icon={SiJavascript} color="#F7DF1E" title="JavaScript"/>
                                <TechIcon Icon={SiReact} color="#61DAFB" title="React"/>
                                <TechIcon Icon={SiTypescript} color="#3178C6" title="TypeScript"/>
                                <TechIcon Icon={SiBootstrap} color="#7952B3" title="Bootstrap"/>
                                <TechIcon Icon={SiJquery} color="#0769AD" title="jQuery"/>
                                <TechIcon Icon={SiChartdotjs} color="#FF6384" title="ChartJS"/>
                                <TechIcon Icon={SiTailwindcss} color="#06B6D4" title="Tailwind CSS"/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Backend</Typography>
                            <Grid container spacing={3} justifyContent="center">
                                <TechIcon Icon={SiPhp} color="#777BB4" title="PHP"/>
                                <TechIcon Icon={SiLaravel} color="#FF2D20" title="Laravel"/>
                                <TechIcon Icon={SiSymfony} color="white" title="Symfony"/>
                                <TechIcon Icon={SiMysql} color="#4479A1" title="MySQL"/>
                                <TechIcon Icon={SiPostgresql} color="#336791" title="PostgreSQL"/>
                                <TechIcon Icon={SiOracle} color="#F80000" title="Oracle"/>
                                <TechIcon Icon={SiSqlite} color="#003B57" title="SQLite"/>
                                <TechIcon Icon={SiPython} color="#3776AB" title="Python"/>
                                <TechIcon Icon={SiCplusplus} color="#00599C" title="C++"/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>DevOps & Tools</Typography>
                            <Grid container spacing={3} justifyContent="center">
                                <TechIcon Icon={SiDocker} color="#2496ED" title="Docker"/>
                                <TechIcon Icon={SiGit} color="#F05032" title="Git"/>
                                <TechIcon Icon={SiGithub} color="white" title="GitHub"/>
                                <TechIcon Icon={SiGitlab} color="#FC6D26" title="GitLab"/>
                                <TechIcon Icon={SiBitbucket} color="#0052CC" title="BitBucket"/>
                                <TechIcon Icon={SiComposer} color="#885630" title="Composer"/>
                                <TechIcon Icon={SiPostman} color="#FF6C37" title="Postman"/>
                                <TechIcon Icon={SiCpanel} color="#FF6C2C" title="C-Panel"/>
                                <TechIcon Icon={SiOpenstack} color="#D72B2B" title="OpenStack"/>
                                <TechIcon Icon={SiWordpress} color="#21759B" title="WordPress"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Home;