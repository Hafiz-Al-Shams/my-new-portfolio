import { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";



const ContactMe = () => {

    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const response = await fetch('https://formspree.io/f/mpwqlyko', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: new URLSearchParams(formData),
        });

        if (response.ok) {
            // Show SweetAlert on successful submission
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Message Sent!',
                showConfirmButton: false,
                timer: 1000,
            });

            // Reset the form after successful submission
            setFormData({
                from_name: '',
                reply_to: '',
                message: '',
            });
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Something went wrong. Try again!',
                showConfirmButton: true,
            });
        }
    };



    return (
        <div className="pb-7">
            <div className="hover:shadow-xl 
      transition duration-200 ease-out w-11/12 md:max-w-3xl lg:max-w-5xl mx-auto px-6 sm:px-10 py-8 bg-white shadow-lg rounded-lg mt-6 sm:mt-10">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
                    Contact Me
                </h1>

                {/* Contact Info */}
                <div className="mb-6">
                    <p className="flex flex-wrap items-center gap-3 text-sm md:text-xl">
                        <FaEnvelope className="text-blue-500 text-lg md:text-xl" />
                        Email: <a className="text-blue-600 underline text-sm md:text-lg">hafizalshams25@gmail.com</a>
                    </p>
                    <p className="flex flex-wrap items-center gap-3 text-sm md:text-xl mt-2">
                        <FaWhatsapp className="text-green-600 text-lg md:text-xl" />
                        WhatsApp: <a target="_blank" rel="noopener noreferrer" className="text-green-700 underline text-sm md:text-lg">+8801581198040</a>
                    </p>
                </div>

                <div>
                    <h3 className="text-xl sm:text-2xl mb-2.5 pt-1.5 font-medium">
                        Send Message Directly:
                    </h3>
                </div>

                {/* Email Form */}
                <form
                    className="space-y-4"
                    onSubmit={handleSubmit} // Use handleSubmit here
                >
                    <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                    />
                    <input
                        type="email"
                        name="reply_to"
                        value={formData.reply_to}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Your Message"
                        required
                        className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full btn btn-primary py-3"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </div>

    );
};

export default ContactMe;