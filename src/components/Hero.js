import { ArrowDown, Download } from "lucide-react";
import myCV from "../assets/GOODNESS-CV.pdf";
const hero_img = `${process.env.PUBLIC_URL}/Tech.webp`;// Assuming this is your profile image

const Hero = () => {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100 relative overflow-hidden">
            {/* Background Gradients/Blobs */}
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-0 left-1/4 w-1/2 h-1/2 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <p className="text-lg md:text-xl font-medium text-purple-300 animate-fade-in-down">
                                Hello, I'm
                            </p>
                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 animate-fade-in-left">
                                GOODNESS
                            </h1>
                            <h2 className="text-2xl md:text-4xl text-gray-300 font-semibold animate-fade-in-right">
                                Frontend Web Developer
                            </h2>
                            <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 animate-fade-in-up">
                                Passionate about creating beautiful, functional, and user-centered digital experiences.
                                Specialized in modern web technologies and scalable solutions.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-in-up">
                            <button
                                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                                onClick={() => scrollToSection('projects')}
                                aria-label="View My Work"
                            >
                                View My Work
                                <ArrowDown className="ml-3 w-5 h-5 animate-bounce-slow" />
                            </button>
                            <a
                                href={myCV}
                                download
                                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-full border-2 border-purple-500 text-purple-300 bg-transparent hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                                aria-label="Download CV"
                            >

                                Download CV
                                <Download className="ml-3 w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="flex justify-center lg:justify-end ">
                        <div className="relative group">
                            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-teal-500/50 shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-3">
                                <img
                                    src={hero_img}
                                    alt="Goodness"
                                    loading="eager"
                                    fetchPriority="high"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-1000"></div>
                            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-3000"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Custom Tailwind CSS Animations */}
            <style>{`
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-left {
                    0% { opacity: 0; transform: translateX(-20px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes fade-in-right {
                    0% { opacity: 0; transform: translateX(20px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
                .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; animation-delay: 0.2s; }
                .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; animation-delay: 0.4s; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; animation-delay: 0.6s; }
                .animate-bounce-slow { animation: bounce-slow 1.5s infinite; }
                .animate-blob { animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
                .animation-delay-1000 { animation-delay: 1s; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-3000 { animation-delay: 3s; }
                .animation-delay-4000 { animation-delay: 4s; }
            `}</style>
        </section>
    );
};

export default Hero;