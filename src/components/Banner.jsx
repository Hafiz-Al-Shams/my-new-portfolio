import { FaGithub, FaLinkedin, FaRegFileAlt, FaWhatsapp } from 'react-icons/fa';
import bannerImg from '../assets/hafiz.webp'
import Typewriter from 'typewriter-effect';

import Developer from '../assets/developer.json'
import Lottie from 'lottie-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const Banner = () => {

    // 1. Rotating words array
    const words = [
        'JavaScript Solutions',
        'React.js Expertise',
        'MERN stack Solutions',
        'UI/UX Design',
        'API Development',
        'Full stack knowledge'
    ];

    // 2. Track which word is active
    const [index, setIndex] = useState(0);

    // 3. Auto‑advance the index every 3.2s
    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prev => (prev + 1) % words.length);
        }, 3200);
        return () => clearInterval(intervalId);
    }, [words.length]);

    // 4. Compute left/right direction toggle
    const direction = index % 2 === 0 ? 1 : -1;

    // 5. Split current word into letters
    const letters = words[index].split('');

    // 6. Framer Motion variants for staggering
    const containerVariants = {
        enter: { transition: { staggerChildren: 0.06 } },
        center: {},
        exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } }
    };


    return (
        <div className="w-full min-h-screen bg-base-300 text-base-content overflow-hidden px-2 sm:px-4 md:px-8 lg:px-16">
            {/* Left + Right content */}
            <div className="container mx-auto h-full min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-between px-2 sm:px-4 lg:px-8 py-6 lg:py-0">

                {/* Left Column */}
                <div className="w-full lg:w-1/3 order-2 lg:order-1">

                    <div className="flex flex-col space-y-2.5 py-4 sm:py-6 lg:py-8 px-2 sm:px-3.5">
                        {/* Profile Image and Hello */}
                        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-3.5 mb-3 sm:mb-4 lg:mb-5">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                                <img
                                    src={bannerImg}
                                    alt="Hafiz Al Shams"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* <h2 className="text-4xl font-light text-base-content">Hello!</h2> */}
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-base-content">
                                <Typewriter
                                    options={{
                                        strings: ["Hello"],
                                        autoStart: true,
                                        loop: true,
                                        delay: 80,         // type  every char in 10ms
                                        deleteSpeed: 25,   // delete every char in 10ms
                                        pauseFor: 2500,   // wait 25000ms (25s) before deleting
                                        cursor: '!',
                                    }}
                                />
                            </h2>
                        </div>

                        {/* Name */}
                        <div className="">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-base-content leading-tight tracking-tight">
                                I am <span className="font-medium">Hafiz Al Shams</span>
                            </h2>
                        </div>


                    </div>

                    <div className="">
                        {/* <p className="text-lg font-bold">Hi, I am Alex</p> */}
                        <p className="text-left pl-2 sm:pl-3.5 pr-4 sm:pr-8 lg:pr-10 text-base-content/95 text-base sm:text-lg">
                            A <span className='font-semibold uppercase'>web developer</span> passionate about applying technology to build web solutions for real-world challenges.
                        </p>
                    </div>

                    <div className="pl-2 sm:pl-3.5 mt-4 sm:mt-5 lg:mt-7">

                        <a
                            href="https://drive.google.com/file/d/1JCMZ-Pn81dskty1UP4Rm4y3x1ybysI_s/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <button
                                className="
    btn btn-sm sm:btn-md lg:btn-lg
    text-white         
    font-light
    bg-[#5a0ea1]
    border-0                            
    transition duration-150 ease-in-out 
    transform                           
    hover:scale-100                    
    hover:shadow-lg                     
    hover:drop-shadow-xs
    hover:bg-[#470c7e]
    hover:text-white
  "

                            >
                                <FaRegFileAlt />
                                View Resume
                            </button>

                        </a>

                    </div>
                </div>

                {/* Lottie Starts */}
                <div className="w-full sm:w-64 md:w-72 lg:w-56 xl:w-80 2xl:w-md border-0 order-1 lg:order-2 mb-6 lg:mb-0 max-w-sm mx-auto lg:mx-0">

                    <Lottie animationData={Developer}></Lottie>
                </div>
                {/* Lottie Ends */}



                {/* Right Column */}
                <div className="w-full lg:w-1/4 text-center lg:text-right order-3">
                    {/* Socials */}
                    <div>
                        <p className="uppercase text-sm sm:text-base lg:text-lg tracking-wide">Connect with Me</p>
                        <div className="flex justify-center lg:justify-end space-x-3 sm:space-x-4 mt-2">
                            <a
                                href="https://github.com/yourusername"
                                aria-label="GitHub"
                                title="Follow me on GitHub"
                                className="text-base-content/80 hover:text-base-content transition-colors duration-200"
                            >
                                <FaGithub size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                aria-label="LinkedIn"
                                title="Connect with me on LinkedIn"
                                className="text-[#0A66C2] hover:text-[#004182] transition-colors duration-200"
                            >
                                <FaLinkedin size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                            </a>
                            <a
                                href="https://wa.me/yourphonenumber"
                                aria-label="WhatsApp"
                                title="Message me on WhatsApp"
                                className="text-[#25D366] hover:text-[#128C7E] transition-colors duration-200"
                            >
                                <FaWhatsapp size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                            </a>
                        </div>
                    </div>


                    {/* my areas of expertise */}
                    {/* typing effect here */}
                    <div className="mt-6 sm:mt-8 lg:mt-10 border-0 h-20 sm:h-24 lg:h-28 flex items-center justify-center lg:justify-end">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={words[index]}
                                variants={containerVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="inline-block text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-base-content text-center lg:text-right"
                            >
                                {letters.map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, x: 20 * direction, y: -20 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        exit={{ opacity: 0, x: -20 * direction, y: 0 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="inline-block"
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>


                    <div className="pl-0 lg:pl-3.5 mt-4 sm:mt-5 lg:mt-7 flex justify-center lg:justify-start lg:block">

                        <a
                            href="#projects"
                            className=""
                        >
                            <button
                                className="
    btn btn-sm sm:btn-md lg:btn-lg
    tracking-tight
    font-light
    border-0
    border-b-2
    hover:border-0
    border-base-content/25
    transition duration-150 ease-in-out 
    transform                           
    hover:scale-100                    
    hover:shadow-lg                     
    hover:drop-shadow-xs
    hover:bg-white/95
    hover:text-[#5a0ea1]
  "

                            >
                                See my work
                            </button>

                        </a>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;