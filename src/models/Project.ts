export default class Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    githubLink?: string;
    liveDemoLink?: string;

    constructor(
        id: number,
        title: string,
        description: string,
        imageUrl: string,
        githubLink?: string,
        liveDemoLink?: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.githubLink = githubLink;
        this.liveDemoLink = liveDemoLink;
    }
}
