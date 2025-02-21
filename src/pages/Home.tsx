import {Container, Typography, Box, Avatar, Grid, Tooltip, IconButton, Divider} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {styled} from '@mui/system';
import {useState} from "react";
import {Email, Phone, LocationOn, Language, LinkedIn, GitHub} from "@mui/icons-material";
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
    SiCpanel, SiOpenstack
} from "react-icons/si";

const ProfilePhoto = styled(Avatar)({
    width: 120,
    height: 120,
    border: '4px solid white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
});

const PhpIcon = SiPhp as React.ElementType;
const LaravelIcon = SiLaravel as React.ElementType;
const TailwindIcon = SiTailwindcss as React.ElementType;
const ReactIcon = SiReact as React.ElementType;
const TypeScriptIcon = SiTypescript as React.ElementType;
const CpanelIcon = SiCpanel as React.ElementType;
const OpenstackIcon = SiOpenstack as React.ElementType;
const MysqlIcon = SiMysql as React.ElementType;
const PostgresqlIcon = SiPostgresql as React.ElementType;
const OracleIcon = SiOracle as React.ElementType;
const SqliteIcon = SiSqlite as React.ElementType;
const SymfonyIcon = SiSymfony as React.ElementType;
const DockerIcon = SiDocker as React.ElementType;
const HtmlIcon = SiHtml5 as React.ElementType;
const CssIcon = SiCss3 as React.ElementType;
const JavascriptIcon = SiJavascript as React.ElementType;
const BootstrapIcon = SiBootstrap as React.ElementType;
const JqueryIcon = SiJquery as React.ElementType;
const ChartjsIcon = SiChartdotjs as React.ElementType;
const GitIcon = SiGit as React.ElementType;
const GithubIcon = SiGithub as React.ElementType;
const GitlabIcon = SiGitlab as React.ElementType;
const BitbucketIcon = SiBitbucket as React.ElementType;
const ComposerIcon = SiComposer as React.ElementType;
const PostmanIcon = SiPostman as React.ElementType;
const WordpressIcon = SiWordpress as React.ElementType;
const PythonIcon = SiPython as React.ElementType;
const CplusplusIcon = SiCplusplus as React.ElementType;

const TechIcon = ({Icon, color, title}: { Icon: React.ElementType; color: string; title: string }) => (
    <Grid item>
        <Tooltip title={title} arrow>
            <Icon size={50} style={{color, cursor: "pointer"}}/>
        </Tooltip>
    </Grid>
);

const ContactIcon = ({icon: Icon, link}: { icon: React.ElementType; link: string }) => (
    <IconButton component="a" href={link} target="_blank" rel="noopener noreferrer" color="primary">
        <Icon/>
    </IconButton>
);

const Home = () => {
    const [darkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg"
                       sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, marginTop: '40px', gap: '20px'}}>
                {/* Sidebar */}
                <Box
                    sx={{padding: '30px', width: {xs: '100%', md: '30%'}, borderRadius: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none'}}>
                    <ProfilePhoto alt="Jarif Ahmed Soumik" src="https://github.com/jasoumik.png"/>
                    <Typography variant="h4" fontWeight="bold" noWrap>
                        Jarif Ahmed Soumik
                    </Typography>
                    <Typography variant="h6" sx={{
                        color: theme.palette.mode === 'dark' ? 'white' : '', // Adjust color based on theme mode
                    }}>Software Engineer
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" sx={{
                        color: theme.palette.mode === 'dark' ? 'white' : '', // Adjust color based on theme mode
                    }} noWrap>Dhaka, Bangladesh
                    </Typography>
                    <Divider flexItem sx={{display: {md: 'block'}, bgcolor: 'white', mt: 2, mb: 1}}/>
                    <Box sx={{display: 'flex', gap: 1}}>
                        <ContactIcon icon={Phone} link="tel:+8801716684803"/>
                        <ContactIcon icon={Email} link="mailto:jasoumik@gmail.com"/>
                        <ContactIcon icon={Language} link="https://www.jasoumik.com"/>
                        <ContactIcon icon={LinkedIn} link="https://linkedin.com/in/jasoumik"/>
                        <ContactIcon icon={GitHub} link="https://github.com/jasoumik"/>
                    </Box>
                </Box>
                <Divider orientation="vertical" flexItem sx={{display: {xs: 'none', md: 'block'}, bgcolor: 'white'}}/>
                {/* Main Content */}
                <Box sx={{flex: 1}}>
                    <Box sx={{padding: '30px', borderRadius: '10px'}}>
                        <Typography variant="h5" fontWeight="bold">Career Goals</Typography>
                        <Divider sx={{my: 2, bgcolor: 'white'}}/>
                        <Typography variant="body1" paragraph>
                            Passionate about full-stack development, eager to contribute my skills and knowledge to
                            innovative projects.
                        </Typography>
                    </Box>

                    <Box sx={{marginTop: '20px'}}>
                        <Box sx={{padding: '30px', borderRadius: '10px'}}>
                            <Typography variant="h5" fontWeight="bold">Technologies I use</Typography>
                            <Divider sx={{my: 2, bgcolor: 'white'}}/>
                            <Typography variant="h6" gutterBottom
                                        sx={{textAlign: 'center', mb: 2}}>Frontend</Typography>
                            <Grid container spacing={3} justifyContent="center">
                                <TechIcon Icon={HtmlIcon} color="#E34F26" title="HTML5"/>
                                <TechIcon Icon={CssIcon} color="#1572B6" title="CSS3"/>
                                <TechIcon Icon={JavascriptIcon} color="#F7DF1E" title="JavaScript"/>
                                <TechIcon Icon={ReactIcon} color="#61DAFB" title="React"/>
                                <TechIcon Icon={TypeScriptIcon} color="#3178C6" title="TypeScript"/>
                                <TechIcon Icon={BootstrapIcon} color="#7952B3" title="Bootstrap"/>
                                <TechIcon Icon={JqueryIcon} color="#0769AD" title="jQuery"/>
                                <TechIcon Icon={ChartjsIcon} color="#FF6384" title="ChartJS"/>
                                <TechIcon Icon={TailwindIcon} color="#06B6D4" title="Tailwind CSS"/>
                            </Grid>

                            <Typography variant="h6" gutterBottom sx={{textAlign: 'center', mb: 2}}>Backend</Typography>
                            <Grid container spacing={3} justifyContent="center">
                                <TechIcon Icon={PhpIcon} color="#777BB4" title="PHP"/>
                                <TechIcon Icon={LaravelIcon} color="#FF2D20" title="Laravel"/>
                                <TechIcon
                                    Icon={SymfonyIcon}
                                    color={theme.palette.mode === 'dark' ? '#ffffff' : ''} // Adjust color based on the theme mode
                                    title="Symfony"
                                />
                                <TechIcon Icon={MysqlIcon} color="#4479A1" title="MySQL"/>
                                <TechIcon Icon={PostgresqlIcon} color="#336791" title="PostgreSQL"/>
                                <TechIcon Icon={OracleIcon} color="#F80000" title="Oracle"/>
                                <TechIcon Icon={SqliteIcon} color="#003B57" title="SQLite"/>
                                <TechIcon Icon={PythonIcon} color="#3776AB" title="Python"/>
                                <TechIcon Icon={CplusplusIcon} color="#00599C" title="C++"/>
                            </Grid>

                            <Typography variant="h6" gutterBottom sx={{textAlign: 'center', mb: 2}}>DevOps &
                                Tools</Typography>
                            <Grid container spacing={3} justifyContent="center">
                                <TechIcon Icon={DockerIcon} color="#2496ED" title="Docker"/>
                                <TechIcon Icon={GitIcon} color="#F05032" title="Git"/>
                                <TechIcon
                                    Icon={GithubIcon}
                                    color={theme.palette.mode === 'dark' ? '#ffffff' : ''} // White in dark mode, #181717 in light mode
                                    title="GitHub"
                                />
                                <TechIcon Icon={GitlabIcon} color="#FC6D26" title="GitLab"/>
                                <TechIcon Icon={BitbucketIcon} color="#0052CC" title="BitBucket"/>
                                <TechIcon Icon={ComposerIcon} color="#885630" title="Composer"/>
                                <TechIcon Icon={PostmanIcon} color="#FF6C37" title="Postman"/>
                                <TechIcon Icon={CpanelIcon} color="#FF6C2C" title="C-Panel"/>
                                <TechIcon Icon={OpenstackIcon} color="#D72B2B" title="OpenStack"/>
                                <TechIcon Icon={WordpressIcon} color="#21759B" title="WordPress"/>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Home;
