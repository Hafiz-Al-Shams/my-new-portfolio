import About from "../../components/About";
import Banner from "../../components/Banner";
import ContactMe from "../../components/ContactMe";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: 'easeOut' },
    },
};



const Home = () => {
    return (
        <div className="space-y-5 md:space-y-6 lg:space-y-10 px-4 md:px-8 lg:px-16 pb-0.5 md:pb-4 lg:pb-7">
            {/* Banner Section */}
            <motion.section
                id="home"
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                <Banner />
            </motion.section>

            {/* Skills Section */}
            <motion.section
                id="skills"
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                <Skills />
            </motion.section>

            {/* About Section */}
            <motion.section
                id="about"
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                <About />
            </motion.section>

            {/* Projects Section */}
            <motion.section
                id="projects"
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                <Projects />
            </motion.section>

            {/* Contact Section */}
            <motion.section
                id="contact"
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
            >
                <ContactMe />
            </motion.section>
        </div>
    );
};

export default Home;