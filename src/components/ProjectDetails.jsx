import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const ProjectDetails = () => {

    const { projectName } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => {
                const matchedProject = data.find(
                    (p) => p.project_name === decodeURIComponent(projectName)
                );
                setProject(matchedProject);
            });
    }, [projectName]);

    if (!project) {
        return <div className="text-3xl text-center mt-16">Loading...</div>;
    }


    return (
        <div>
            <div className="w-full sm:w-8/12 md:w-7/12 mx-auto mt-5 sm:mt-7"> {/* Adjusted width & margin for responsiveness */}
                <Link to='/'>
                    <button className="btn btn-wide">Back To Home</button>
                </Link>
            </div>

            <div className="w-11/12 sm:w-10/12 md:max-w-4xl mx-auto px-6 sm:px-12 md:px-16 pb-16 pt-6 bg-white shadow-lg rounded-lg mt-4 sm:mt-5 mb-10 sm:mb-16 space-y-1.5"> {/* Adjusted width, padding, and margin */}
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6"> {/* Adjusted font size for better mobile readability */}
                    {project.project_name}
                </h1>

                <img
                    src={project.project_image}
                    alt={project.project_name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover my-4 rounded-lg"

                // Adjusted image height for consistency

                />

                <p className="text-base sm:text-lg"> {/* Adjusted text size for mobile readability */}
                    {project.brief_description}
                </p>

                <h2 className="text-lg sm:text-xl font-semibold mt-4"> {/* Adjusted heading size */}
                    Main Technology Stack:
                </h2>
                <ul className="list-disc list-inside">
                    {project.main_technology_stack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>

                <h2 className="text-lg sm:text-xl font-semibold mt-4">Live Project:</h2>
                <a href={project.live_project_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {project.live_project_link}
                </a>

                <h2 className="text-lg sm:text-xl font-semibold mt-4">GitHub Repository:</h2>
                <a href={project.github_repository_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {project.github_repository_link}
                </a>

                <h2 className="text-lg sm:text-xl font-semibold mt-4">Challenges Faced:</h2>
                <p>{project.challenges_faced}</p>

                <h2 className="text-lg sm:text-xl font-semibold mt-4">Potential Improvements:</h2>
                <p>{project.potential_improvements}</p>
            </div>


        </div>
    );
};

export default ProjectDetails;