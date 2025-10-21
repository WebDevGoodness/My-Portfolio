import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaCloudUploadAlt, FaLaptopCode } from 'react-icons/fa'; // Added FaLaptopCode
import { SiTailwindcss, SiNetlify, SiPrettier, SiEslint, SiVercel } from 'react-icons/si'; // Removed SiVscode
import { IoHardwareChipOutline } from "react-icons/io5"; // For general tools

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <FaReact className="text-blue-400" />,
            skills: [
                { name: "React", icon: <FaReact />, level: "Advanced" },
                { name: "JavaScript", icon: <FaJsSquare />, level: "Advanced" },
                { name: "HTML5", icon: <FaHtml5 />, level: "Expert" },
                { name: "CSS3", icon: <FaCss3Alt />, level: "Expert" },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Advanced" }
            ]
        },
        {
            title: "Version Control & Deployment",
            icon: <FaGitAlt className="text-orange-500" />,
            skills: [
                { name: "Git", icon: <FaGitAlt />, level: "Advanced" },
                { name: "GitHub", icon: <FaGithub />, level: "Advanced" },
                { name: "Netlify", icon: <SiNetlify />, level: "Intermediate" },
                { name: "Vercel", icon: <SiVercel />, level: "Intermediate" }
            ]
        },
        {
            title: "Tools & Best Practices",
            icon: <IoHardwareChipOutline className="text-gray-400" />,
            skills: [
                { name: "VS Code", icon: <FaLaptopCode />, level: "Expert" }, // Changed to FaLaptopCode
                { name: "Prettier", icon: <SiPrettier />, level: "Advanced" },
                { name: "ESLint", icon: <SiEslint />, level: "Intermediate" }
            ]
        }
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case "Expert": return "bg-green-600 border-green-700";
            case "Advanced": return "bg-blue-600 border-blue-700";
            case "Intermediate": return "bg-yellow-600 border-yellow-700";
            default: return "bg-gray-600 border-gray-700";
        }
    };

    return (
        <section id="skills" className="py-20 px-4 bg-gray-900 text-gray-100 relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-1/4 -left-32 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 animate-fade-in-down">
                        My Skills & Expertise
                    </h2>
                    <div className="w-28 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto mb-6 animate-fade-in-down animation-delay-200"></div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up">
                        A comprehensive overview of the technologies, tools, and practices I leverage to build
                        robust and engaging web applications. Always keen to learn more!
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 animate-fade-in-up animation-delay-400">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-xl shadow-2xl p-7 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500 relative overflow-hidden group"
                        >
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <div className="flex items-center gap-4 mb-5 text-2xl">
                                <span className="text-3xl p-2 rounded-full bg-gray-700 group-hover:bg-blue-600 transition-colors duration-300 text-gray-200 group-hover:text-white">
                                    {category.icon}
                                </span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="inline-flex items-center space-x-2 bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-md font-medium border border-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 group-hover:bg-gray-600"
                                    >
                                        <span className="text-lg text-blue-400 group-hover:text-teal-300">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                        <span className={`text-xs font-bold text-white px-2 py-0.5 rounded-full ${getLevelColor(skill.level)}`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-20px); }
                    100% { opacity: 1; transform: translateY(0); }
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
                .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
                .animate-blob { animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
                .animation-delay-200 { animation-delay: 0.2s; }
                .animation-delay-400 { animation-delay: 0.4s; }
                .animation-delay-2000 { animation-delay: 2s; }
            `}</style>
        </section>
    );
};

export default Skills;