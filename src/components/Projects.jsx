import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import Typewriter from 'typewriter-effect';


const Projects = () => {


    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch data from the projects.json file
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.log("Error fetching project data:", error));
    }, []);


    return (
        <div>
            <div className="py-3 md:py-7 lg:py-9">
                <div className="w-11/12 sm:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 md:mb-10">My Projects</h2>


                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <Link
                                key={index}
                                to={`/project-details/${project.project_name}`}
                                className="
        card bg-base-100 w-full sm:w-80 md:w-full shadow-md
        transform hover:scale-105 hover:shadow-lg
        transition duration-200 ease-out
        cursor-pointer
      "
                            >
                                {/* Image section */}
                                <figure className="px-6 sm:px-8 pt-6 sm:pt-8">
                                    <img
                                        src={project.project_image}
                                        alt={project.project_name}
                                        className="rounded-xl w-full h-48 sm:h-56 md:h-60 object-cover"
                                    />
                                </figure>

                                {/* Card body */}
                                <div className="card-body items-center text-center">
                                    <h2 className="text-lg sm:text-xl font-semibold">
                                        {project.project_name}
                                    </h2>
                                    {/* Removed the View More button */}

                                </div>
                            </Link>
                        ))}
                    </div>


                    {/* <h3 className="
    flex flex-wrap justify-center items-center 
    text-sm     
    md:text-base 
    lg:text-lg 
    font-semibold 
    mt-3 md:mt-6 
    text-center
  ">
                        <span className="whitespace-nowrap">
                            <Typewriter
                                options={{
                                    strings: [
                                        "More is coming...",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 90,
                                    deleteSpeed: 10,
                                }}
                            />
                        </span>


                    </h3> */}


                </div>



            </div>

        </div>
    );
};

export default Projects;