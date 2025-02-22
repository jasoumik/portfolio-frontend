import axios from "axios";
import Project from "../models/Project";

class ProjectService {
    private apiUrl = "http://portfolio-backend.jasoumik.com/api/projects"; // Using 127.0.0.1 instead of localhost

    async getProjects(): Promise<Project[]> {
        const response = await axios.get(this.apiUrl);
        return response.data.map(
            (p: any) =>
                new Project(
                    p.id,
                    p.title,
                    p.description,
                    p.imageUrl,
                    p.githubLink,
                    p.liveDemoLink
                )
        );
    }
}


export default new ProjectService();
