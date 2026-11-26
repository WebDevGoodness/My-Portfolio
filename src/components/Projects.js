import { Github, ExternalLink, Award, Briefcase } from "lucide-react"; // Added Award and Briefcase


const Projects = () => {
    const projects = [
        {
            title: "NBA Score and Timer Board",
            description: "A dynamic NBA score and timer board application that allows users to keep track of game scores and time in real-time.",
            image: `${process.env.PUBLIC_URL}/board.webp`,
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            githubUrl: "https://github.com/WebDevGoodness/NBA-Counter-App",
            liveUrl: "https://nba-counter-app.vercel.app/",
            featured: true
        },
        {
            title: "GitHub Profile",
            description: "A comprehensive githup profile finder, that display github users details",
            image: `${process.env.PUBLIC_URL}/github.webp`,
            technologies: ["React", "Tailwind CSS"],
            githubUrl: "https://github.com/WebDevGoodness/github-profile-finder",
            liveUrl: "https://github-profile-finder-liard.vercel.app/",
            featured: true
        },
        {
            title: "TO-DO App",
            description: "A sleek and responsive to-do application that helps users manage their tasks efficiently with features like task addition, deletion, and editing.",
            image: `${process.env.PUBLIC_URL}/todo.webp`,
            technologies: ["React", "Tailwind CSS"],
            githubUrl: "https://github.com/WebDevGoodness/to-do-list",
            liveUrl: "https://to-do-list-eight-green-35.vercel.app/",
            featured: false
        },
        {
            title: "QR Code Generator",
            description: "A simple and efficient QR code generator that allows users to create QR codes for URLs and text inputs.",
            image: `${process.env.PUBLIC_URL}/qrCode.webp`,
            technologies: ["React", "Tailwind CSS"],
            githubUrl: "https://github.com/WebDevGoodness/Qr-code-generator",
            liveUrl: "https://qr-code-generator-one-drab.vercel.app/",
            featured: false
        },
        {
            title: "Website Coming Soon",
            description: "A fun and interactive Tic Tac Toe game that allows two players to compete against each other with a sleek user interface.",
            image: `${process.env.PUBLIC_URL}/soon.webp`,
            technologies: ["JavaScript", "HTML", "CSS"],
            githubUrl: "https://github.com/WebDevGoodness/Website-Coming-Soon",
            liveUrl: "https://website-coming-soon-bice.vercel.app/",
            featured: false
        }
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section id="projects" className="py-20 px-4 bg-gray-900 text-gray-100 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-1000"></div>
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-fade-in-down">
                        My Creative Works
                    </h2>
                    <div className="w-28 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto mb-6 animate-fade-in-down animation-delay-200"></div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up">
                        A showcase of my recent projects, demonstrating my passion for development and problem-solving.
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="space-y-12 mb-16">
                    <h3 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3 justify-center">
                        <Award className="w-7 h-7 text-green-400" /> Featured Projects
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-10">
                        {featuredProjects.map((project, index) => (
                            <div key={index} className="bg-gray-800 rounded-xl shadow-2xl p-7 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-teal-500 relative group overflow-hidden animate-fade-in-left">
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-600 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <div className="relative overflow-hidden rounded-lg mb-6 shadow-xl">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-full text-md font-medium border border-purple-700 hover:bg-purple-700 transition-colors shadow-lg"
                                        >
                                            <Github className="w-5 h-5 mr-2" />
                                            Code
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-full text-md font-medium border border-pink-700 hover:bg-pink-700 transition-colors shadow-lg"
                                        >
                                            <ExternalLink className="w-5 h-5 mr-2" />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                                <div className="border-b border-gray-700 pb-5 mb-5">
                                    <h4 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300 mb-2">{project.title}</h4>
                                    <p className="text-gray-300 text-md">{project.description}</p>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="inline-block bg-gray-700 text-gray-200 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-600 transition-transform transform hover:scale-105 hover:bg-gray-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Projects */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-100 mb-10 flex items-center gap-3 justify-center">
                        <Briefcase className="w-7 h-7 text-orange-400" /> Other Projects
                    </h3>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {otherProjects.map((project, index) => (
                            <div key={index} className="bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-orange-500 relative group overflow-hidden animate-fade-in-up">
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <div className="relative overflow-hidden rounded-md mb-5">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="border-b border-gray-700 pb-4 mb-4">
                                    <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">{project.title}</h4>
                                    <p className="text-gray-400 text-sm">{project.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-end gap-3 mt-5">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1.5 bg-gray-700 text-gray-200 rounded-full text-sm font-medium border border-gray-600 hover:bg-gray-600 transition-colors"
                                    >
                                        <Github className="w-4 h-4 mr-1.5" />
                                        Code
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium border border-blue-700 hover:bg-blue-700 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-1.5" />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* GitHub CTA */}
                <div className="text-center mt-20 animate-fade-in-up animation-delay-600">
                    <p className="text-xl text-gray-300 mb-6">Explore more of my work on GitHub!</p>
                    <a
                        href="https://github.com/WebDevGoodness?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    >
                        <Github className="w-6 h-6 mr-3" />
                        View All Projects
                    </a>
                </div>
            </div>
            {/* Custom Tailwind CSS Animations (Re-added for clarity) */}
            <style jsx>{`
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
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
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
                .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; animation-delay: 0.2s; }
                .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; animation-delay: 0.4s; }
                .animate-blob { animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
                .animation-delay-200 { animation-delay: 0.2s; }
                .animation-delay-600 { animation-delay: 0.6s; }
                .animation-delay-1000 { animation-delay: 1s; }
                .animation-delay-3000 { animation-delay: 3s; }
            `}</style>
        </section>
    );
};

export default Projects;