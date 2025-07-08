


const About = () => {
    return (
        <div>
            <div className="pt-16 md:pt-20 pb-16 md:pb-20 bg-gray-900 text-white text-lg sm:text-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/3">
                        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-blue-400 mb-6 sm:mb-8 md:mb-10">About Me</h2>

                        {/* 1st block */}
                        <p className="text-base sm:text-lg text-gray-300 leading-normal sm:leading-relaxed"> {/* Adjusted text size & line height */}
                            👋 Hey there! I’m <span className="text-blue-400 font-semibold">Hafiz</span>, a passionate <strong>Frontend Developer</strong> dedicated to solving real‑world problems by crafting user‑focused digital products.
                            My journey into coding began in 2023 when I realized the web’s power to connect people and ideas. Since then, I’ve been refining my skills in <strong>JavaScript, React.js, and the MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>, along with other web and front-end technologies, to build interactive and performance-driven web applications.
                        </p>
                        <br />

                        {/* 2nd block */}
                        <p className="text-base sm:text-lg text-gray-300 leading-normal sm:leading-relaxed"> {/* Adjusted text size & line height */}
                            💡 I love <strong>exploring emerging tech trends, and advancing as a frontend developer</strong>. The challenge of problem-solving and debugging excites me—it feels like solving a puzzle.
                            I also have a strong interest in <strong>backend development</strong>, ensuring that applications are both functional and scalable.
                        </p>
                        <br />

                        {/* 3rd block */}
                        <p className="text-base sm:text-lg text-gray-300 leading-normal sm:leading-relaxed"> {/* Adjusted text size & line height */}
                            🏀 Outside of coding, you’ll find me <strong>reading self-improvement books, working out, playing cricket or badminton</strong>.
                            I’m a huge fan of <span className="text-blue-400 font-semibold">Cristiano Ronaldo</span>, and I believe in never giving up mentality.
                        </p>
                        <br />

                        {/* 4th block */}
                        <p className="text-base sm:text-lg text-gray-300 leading-normal sm:leading-relaxed"> {/* Adjusted text size & line height */}
                            🚀 My goal is to <strong>become a top-tier developer</strong>, continuously learning and refining my craft.
                            My ultimate dream is to contribute to <strong>cutting-edge projects that impact millions worldwide</strong>.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;