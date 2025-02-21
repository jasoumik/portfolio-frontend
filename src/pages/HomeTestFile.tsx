import { Container, Typography, Box, Avatar, Button, Grid, Tooltip } from "@mui/material";
import { styled } from '@mui/system';
import {
    SiPhp, SiLaravel, SiTailwindcss, SiReact, SiTypescript, SiCpanel, SiOpenstack, SiMysql, SiPostgresql, SiOracle, SiSqlite, SiSymfony, SiDocker, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiChartdotjs, SiGit, SiGithub, SiGitlab, SiBitbucket, SiComposer, SiPostman, SiWordpress, SiPython, SiCplusplus
} from "react-icons/si";
const ProfilePhoto = styled(Avatar)({
    width: 150,
    height: 150,
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
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

const TechIcon = ({ Icon, color, title }: { Icon: React.ElementType; color: string; title: string }) => (
    <Grid item>
        <Tooltip title={title} arrow>
            <Icon size={50} style={{ color, cursor: "pointer" }} />
        </Tooltip>
    </Grid>
);

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
            {/* Technologies Section */}
            <Box sx={{ marginBottom: '40px' }}>
                <Typography variant="h5" gutterBottom>
                    Technologies I Use
                </Typography>

                <Typography variant="h6" gutterBottom>Frontend Technologies</Typography>
                <Grid container spacing={3} justifyContent="center">
                    <TechIcon Icon={HtmlIcon} color="#E34F26" title="HTML5" />
                    <TechIcon Icon={CssIcon} color="#1572B6" title="CSS3" />
                    <TechIcon Icon={JavascriptIcon} color="#F7DF1E" title="JavaScript" />
                    <TechIcon Icon={ReactIcon} color="#61DAFB" title="React" />
                    <TechIcon Icon={TypeScriptIcon} color="#3178C6" title="TypeScript" />
                    <TechIcon Icon={BootstrapIcon} color="#7952B3" title="Bootstrap" />
                    <TechIcon Icon={JqueryIcon} color="#0769AD" title="jQuery" />
                    <TechIcon Icon={ChartjsIcon} color="#FF6384" title="ChartJS" />
                    <TechIcon Icon={TailwindIcon} color="#06B6D4" title="Tailwind CSS" />
                </Grid>

                <Typography variant="h6" gutterBottom>Backend Technologies</Typography>
                <Grid container spacing={3} justifyContent="center">
                    <TechIcon Icon={PhpIcon} color="#777BB4" title="PHP" />
                    <TechIcon Icon={LaravelIcon} color="#FF2D20" title="Laravel" />
                    <TechIcon Icon={SymfonyIcon} color="#000000" title="Symfony" />
                    <TechIcon Icon={MysqlIcon} color="#4479A1" title="MySQL" />
                    <TechIcon Icon={PostgresqlIcon} color="#336791" title="PostgreSQL" />
                    <TechIcon Icon={OracleIcon} color="#F80000" title="Oracle" />
                    <TechIcon Icon={SqliteIcon} color="#003B57" title="SQLite" />
                    <TechIcon Icon={PythonIcon} color="#3776AB" title="Python" />
                    <TechIcon Icon={CplusplusIcon} color="#00599C" title="C++" />
                </Grid>

                <Typography variant="h6" gutterBottom>DevOps & Tools</Typography>
                <Grid container spacing={3} justifyContent="center">
                    <TechIcon Icon={DockerIcon} color="#2496ED" title="Docker" />
                    <TechIcon Icon={GitIcon} color="#F05032" title="Git" />
                    <TechIcon Icon={GithubIcon} color="#181717" title="GitHub" />
                    <TechIcon Icon={GitlabIcon} color="#FC6D26" title="GitLab" />
                    <TechIcon Icon={BitbucketIcon} color="#0052CC" title="BitBucket" />
                    <TechIcon Icon={ComposerIcon} color="#885630" title="Composer" />
                    <TechIcon Icon={PostmanIcon} color="#FF6C37" title="Postman" />
                    <TechIcon Icon={CpanelIcon} color="#FF6C2C" title="C-Panel" />
                    <TechIcon Icon={OpenstackIcon} color="#D72B2B" title="OpenStack" />
                    <TechIcon Icon={WordpressIcon} color="#21759B" title="WordPress" />
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;