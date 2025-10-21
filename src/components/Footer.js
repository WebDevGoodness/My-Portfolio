import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"; // Added Heart icon

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 py-16 px-4 rounded-t-3xl shadow-lg relative overflow-hidden">
            {/* Background Gradients for dynamic feel */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-5000"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-7000"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-12">
                    {/* Brand & Description */}
                    <div className="space-y-5 col-span-2 md:col-span-1">
                        <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                            Goodness Babasola
                        </h3>
                        <p className="text-gray-400 text-md leading-relaxed">
                            Crafting elegant and efficient digital experiences with a focus on user-centric design and cutting-edge frontend development.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h4 className="text-xl font-bold text-gray-100 mb-3 border-l-4 border-green-400 pl-3">Quick Links</h4>
                        <div className="flex flex-col space-y-3 text-md">
                            {["About Me", "Skills & Specialties", "Projects", "Experience", "Contact"].map((link) => (
                                <button
                                    key={link}
                                    onClick={() =>
                                        document
                                            .getElementById(
                                                link.replace(/ & /g, "").replace(/\s+/g, "-").toLowerCase()
                                            )
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="block text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:translate-x-1"
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-5">
                        <h4 className="text-xl font-bold text-gray-100 mb-3 border-l-4 border-blue-400 pl-3">Services</h4>
                        <div className="flex flex-col space-y-3 text-md text-gray-400">
                            {[
                                "Web Application Development",
                                "Frontend Development",
                                "API Integration", // Changed for more clarity
                                "Performance Optimization", // Added a new service
                                "Code Review & Mentoring"
                            ].map((service) => (
                                <span key={service} className="hover:text-blue-400 transition-colors duration-300">{service}</span>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-5">
                        <h4 className="text-xl font-bold text-gray-100 mb-3 border-l-4 border-pink-400 pl-3">Connect</h4>
                        <div className="flex space-x-4 mt-2">
                            <a href="https://github.com/webdevgoodness" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-gray-800 text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg" aria-label="GitHub">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/babasolagoodness/" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-gray-800 text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg" aria-label="LinkedIn">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com/olamideCJ" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-gray-800 text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg" aria-label="Twitter">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="mailto:goodness.babasola.dev@gmail.com"
                                className="w-12 h-12 flex items-center justify-center bg-gray-800 text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg" aria-label="Email">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <p className="text-md text-gray-500">
                        © {currentYear} Goodness Babasola. All rights reserved.
                    </p>
                    <p className="flex items-center gap-2 text-md text-gray-500">
                        Built with <Heart className="w-5 h-5 text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
            {/* Custom Tailwind CSS Animations */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
                .animation-delay-5000 { animation-delay: 5s; }
                .animation-delay-7000 { animation-delay: 7s; }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            `}</style>
        </footer>
    );
};

export default Footer;