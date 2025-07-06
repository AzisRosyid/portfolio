
class Project {
    /**
     * Creates a new Project instance.
     * @param {string} imageUrl - The URL for the project image.
     * @param {string} title - The title of the project.
     * @param {string} description - The description of the project.
     * @param {string} projectUrl - The URL to view the project.
     */
    constructor(imageUrl, title, description, projectUrl) {
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
        this.projectUrl = projectUrl;
    }
}