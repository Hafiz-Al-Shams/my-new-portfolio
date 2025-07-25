import { FaGithub, FaRegFileAlt } from 'react-icons/fa';
// import hafizImg from '../assets/hafiz.png'
import { FaXTwitter } from 'react-icons/fa6';
import Typewriter from 'typewriter-effect';
// import Lottie from 'lottie-react';

import Developer from '../assets/developer.json'

import WavingHand from '../assets/icons8-waving-hand-emoji-96.png'


const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 md:pb-10 lg:pb-16'>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start pt-1 md:pt-8 lg:pt-24">
                <div className="pt-6 md:pt-10 space-y-4 text-center md:text-left">

                    {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">Hafiz Al Shams</h2>
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-semibold">Frontend Developer</h3> */}


                    {/* new code below */}
                    <div className="flex flex-col gap-10">
                        {/* Name box */}
                        <div
                            className="inline-block bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg"
                        >
                            <div className="flex justify-start items-center">
                                <img src={WavingHand} alt="waving-hand" className='w-10' />
                                <p className="text-gray-500 text-sm mb-1">Hello, I am</p>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                Hafiz Al Shams
                            </h2>
                        </div> {/* ← added */}

                        {/* Role box */}
                        <div
                            className="inline-block bg-white/70 backdrop-blur-sm rounded-xl px-6 py-3 shadow"
                        >
                            <Typewriter
                                options={{
                                    strings: [
                                        'Web Developer',
                                        'React.js Developer',
                                        'MERN Stack Developer',
                                        'FrontEnd Developer',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50,
                                    cursor: '|',                          // ← edited: show blinking cursor
                                    wrapperClassName: 'text-blue-600 uppercase font-semibold text-sm md:text-base', // ← added styling
                                }}
                            />
                        </div> {/* ← added */}
                    </div>
                    {/* new code above */}

                    <div className="mt-5 sm:mt-7">

                        <a
                            href="https://drive.google.com/file/d/1JCMZ-Pn81dskty1UP4Rm4y3x1ybysI_s/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                        >
                            <button
                                className="
    btn lg:btn-lg
    text-white         
    font-light
    bg-[#5a0ea1]
    border-0                            
    transition duration-150 ease-in-out 
    transform                           
    hover:scale-100                    
    hover:shadow-2xl                     
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
                    <div className="flex justify-center md:justify-start items-center gap-4 sm:gap-6 mt-8 sm:mt-10 text-3xl sm:text-4xl">
                        <a
                            href="https://github.com/Hafiz-Al-Shams"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-150 ease-in-out transform hover:scale-100 hover:shadow-2xl hover:drop-shadow-xs"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://x.com/hafiz_dev25"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-150 ease-in-out transform hover:scale-100 hover:shadow-2xl hover:drop-shadow-xs"
                        >
                            <FaXTwitter />
                        </a>
                    </div>

                </div>
                {/* <div className="mt-10 md:mt-0 transition-transform duration-300 hover:scale-110 ease-in-out">
                    <img
                        src={hafizImg}
                        alt="Profile"
                        className="w-40 sm:w-56 md:w-72 lg:w-80 rounded-full border-4 border-gray-200 shadow-xl"

                    // Responsive image scaling
                    />
                </div> */}

                {/* Lottie Starts */}
                {/* <div className="w-56 md:w-80 lg:w-md">

                    <Lottie animationData={Developer}></Lottie>
                </div> */}
                {/* Lottie Ends */}


            </div>

            <h3 className="
    flex flex-wrap items-center justify-center
    text-xl
    md:text-3xl md:justify-start
    lg:text-5xl 
    font-semibold 
    mt-8 sm:mt-12 md:mt-16
  ">
                <span className="whitespace-nowrap mr-1 md:mr-1.5 lg:mr-2">
                    i code
                </span>
                <span className="md:whitespace-nowrap text-[#5a0ea1]">
                    <Typewriter
                        options={{
                            strings: [
                                "tomorrow's Web, today",
                                "user-centric designs",
                                "Simple Site Spark",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 25,
                            deleteSpeed: 25,
                        }}
                    />
                </span>
            </h3>



        </div>

    );
};

export default Banner;