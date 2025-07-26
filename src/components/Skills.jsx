import { DiJavascript, DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaFigma, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const frontendSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 60 },
    { name: "React", level: 65 }
];

const backendSkills = [
    { name: "Node.js", level: 60 },
    { name: "Express", level: 55 },
    { name: "MongoDB", level: 45 }
];

const tools = [
    { name: "Git", level: 70 },
    { name: "Figma", level: 80 },
    { name: "VS Code", level: 85 }
];

const Skills = () => {
    return (
        <div>
            <div className="pb-24 pt-10 sm:pt-20 text-base-content"> {/* Adjusted top padding for mobile */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Increased width for large screens & added padding */}

                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-gray-800">My Skills</h2> {/* Adjusted font size */}

                    {/* Frontend Skills */}
                    <div className="mb-10 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-4">Frontend Development</h3> {/* Responsive text size */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"> {/* Adjusted grid for better scaling */}
                            {frontendSkills.map(skill => (
                                <div key={skill.name} className="transform hover:scale-110 hover:shadow-xl 
      transition duration-200 ease-out bg-white p-3 sm:p-4 md:p-5 rounded-lg text-center shadow-lg border border-blue-200"> {/* Adjusted padding */}
                                    <p className="text-base sm:text-lg font-semibold text-gray-800">{skill.name}</p> {/* Adjusted font size */}
                                    {skill.name === 'React' && <FaReact size={40} className="mx-auto text-blue-600 mb-2" />}
                                    {skill.name === 'HTML' && <FaHtml5 size={40} className="mx-auto text-orange-600 mb-2" />}
                                    {skill.name === 'CSS' && <FaCss3Alt size={40} className="mx-auto text-blue-500 mb-2" />}
                                    {skill.name === 'JavaScript' && <DiJavascript size={40} className="mx-auto text-yellow-500 mb-2" />}
                                    <p className="text-gray-700 font-bold">{skill.level}%</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className="mb-10 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl font-semibold text-green-500 mb-4">Backend Development</h3> {/* Responsive text size */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"> {/* Adjusted grid for better scaling */}
                            {backendSkills.map(skill => (
                                <div key={skill.name} className="transform hover:scale-110 hover:shadow-xl 
      transition duration-200 ease-out bg-white p-3 sm:p-4 md:p-5 rounded-lg text-center shadow-lg border border-green-200"> {/* Adjusted padding */}
                                    <p className="text-base sm:text-lg font-semibold text-gray-800">{skill.name}</p>
                                    {skill.name === 'Node.js' && <FaNodeJs size={40} className="mx-auto text-green-800 mb-2" />}
                                    {skill.name === 'Express' && <SiExpress size={40} className="mx-auto text-gray-600 mb-2" />}
                                    {skill.name === 'MongoDB' && <DiMongodb size={40} className="mx-auto text-green-700 mb-2" />}
                                    <p className="text-gray-700 font-bold">{skill.level}%</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="mb-10 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-800/80 mb-4">Tools & Others</h3> {/* Responsive text size */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"> {/* Adjusted grid for better scaling */}
                            {tools.map(skill => (
                                <div key={skill.name} className="transform hover:scale-110 hover:shadow-xl 
      transition duration-200 ease-out bg-white p-3 sm:p-4 md:p-5 rounded-lg text-center shadow-lg border border-yellow-200"> {/* Adjusted padding */}
                                    <p className="text-base sm:text-lg font-semibold text-gray-800">{skill.name}</p>
                                    {skill.name === 'Git' && <FaGitAlt size={40} className="mx-auto text-gray-700 mb-2" />}
                                    {skill.name === 'Figma' && <FaFigma size={40} className="mx-auto text-gray-800 mb-2" />}
                                    {skill.name === 'VS Code' && <VscVscode size={40} className="mx-auto text-blue-500 mb-2" />}
                                    <p className="text-gray-600 font-bold">{skill.level}%</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Graphical Representation */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 overflow-x-auto"> {/* Added overflow-x-auto for responsiveness */}
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={[...frontendSkills, ...backendSkills, ...tools]}>
                                <XAxis dataKey="name" stroke="#555" />
                                <YAxis stroke="#555" />
                                <Tooltip />
                                <Bar dataKey="level" fill="#4f46e5" radius={[5, 5, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Skills;