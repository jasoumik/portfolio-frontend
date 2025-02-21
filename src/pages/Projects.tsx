import { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import Project from "../models/Project";
import ProjectService from "../services/ProjectService";

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        ProjectService.getProjects().then(setProjects);
    }, []);

    return (
        <Container maxWidth="md" sx={{ padding: { xs: 2, md: 4 }, textAlign: "center" }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
                My Projects
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        sx={{
                            width: "100%",
                            maxWidth: 600,
                            mb: 2,
                            boxShadow: 3,
                            textAlign: "left"
                        }}
                    >
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold">{project.title}</Typography>
                            <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Container>
    );
};

export default Projects;
