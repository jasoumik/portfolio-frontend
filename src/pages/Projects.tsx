import { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import Project from "../models/Project";
import ProjectService from "../services/ProjectService";

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        ProjectService.getProjects().then(setProjects);
    }, []);

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                My Projects
            </Typography>
            {projects.map((project) => (
                <Card key={project.id} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="h5">{project.title}</Typography>
                        <Typography variant="body2">{project.description}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default Projects;
