import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaHourglassHalf } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content - Text */}
                    <div className="order-1 lg:order-1 space-y-8 p-6 bg-gray-800 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                                About Me
                            </h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mb-6"></div>
                        </div>

                        <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                            <p>
                                <span className="text-teal-300 font-semibold">Hello there!</span> I'm a passionate
                                <span className="text-blue-300 font-semibold"> Frontend Web Developer</span> with over
                                <span className="text-teal-300 font-semibold"> 2 years of hands-on experience</span>. I thrive on
                                crafting digital experiences that are not only aesthetically pleasing but also
                                incredibly functional and user-friendly. My expertise lies in modern JavaScript
                                frameworks and a robust understanding of core frontend technologies.
                            </p>
                            <p>
                                My journey into web development began with a deep curiosity, evolving into a career
                                dedicated to building impactful applications. I am a firm believer in
                                <span className="text-blue-300 font-semibold"> clean, maintainable code</span> and
                                continuously staying abreast of the latest industry trends and best practices.
                            </p>
                            <p>
                                Beyond the code, I'm always exploring new technologies, diving into insightful
                                reads, and actively collaborating within tech communities. This continuous learning
                                fuels my growth and keeps my skills sharp!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-teal-400 text-3xl" />
                                <div>
                                    <h3 className="mb-1 font-bold text-teal-300">Location</h3>
                                    <p className="text-gray-400">Ogbmoso, Oyo State</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaHourglassHalf className="text-blue-400 text-3xl" />
                                <div>
                                    <h3 className="mb-1 font-bold text-blue-300">Experience</h3>
                                    <p className="text-gray-400">2+ Years Professional</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaGraduationCap className="text-teal-400 text-3xl" />
                                <div>
                                    <h3 className="mb-1 font-bold text-teal-300">Education</h3>
                                    <p className="text-gray-400">BTech Computer Science</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaBriefcase className="text-blue-400 text-3xl" />
                                <div>
                                    <h3 className="mb-1 font-bold text-blue-300">Availability</h3>
                                    <p className="text-gray-400">Open to opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="order-2 lg:order-2">
                        <div className="relative group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzU3MDk5MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Professional developer workspace coding"
                                className="rounded-3xl w-full h-[500px] object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:rotate-3"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 via-blue-500/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-600 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
                            <div className="absolute -top-4 -right-4 w-40 h-40 bg-blue-600 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;