const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "insert desc",
            imageUrl: "idk",
            projectUrl: "#",
        },
        {
            title: "Project 2",
            description: "insert desc",
            imageUrl: "idk",
            projectUrl: "#",
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-4">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <p className="text-gray-600">{project.description}</p>
                            <a href={project.projectUrl} className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;