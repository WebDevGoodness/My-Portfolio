import { Calendar, MapPin, Briefcase, GraduationCap, } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            title: "Frontend Developer",
            company: "Bank Of Industry",
            location: "Ogbomoso, Oyo State",
            duration: "May 2025 - August 2025",
            type: "Internship",
            description: [
                "Developed responsive web applications, enhancing user experience across various devices.",
                "Collaborated closely with UI/UX designers to translate wireframes into pixel-perfect and interactive user interfaces.",
                "Optimized website performance and SEO, resulting in faster load times and improved search engine rankings.",
                "Maintained and updated existing client websites, ensuring functionality and security."
            ],
            technologies: ["JavaScript", "HTML5", "CSS3", "React", "Tailwind CSS"] // Added more relevant tech
        }
    ];

    const education = [
        {
            degree: "Bachelor of Technology in Computer Science",
            school: "Ladoke Akintola University of Technology, Ogbomoso", // Full name
            duration: "2019 - 2024",
            relevant: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering", "Object-Oriented Programming"] // Added more relevant courses
        }
    ];

    // const certifications = [
    //     "AWS Certified Solutions Architect - Associate", // More specific
    //     "Google Cloud Associate Cloud Engineer",        // More specific
    //     "Meta Front-End Developer Professional Certificate", // More specific
    //     "MongoDB Certified Developer - Associate"        // More specific
    // ];

    return (
        <section id="experience" className="py-20 px-4 bg-gray-900 text-gray-100 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-fade-in-down">
                        My Journey & Credentials
                    </h2>
                    <div className="w-28 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-auto mb-6 animate-fade-in-down animation-delay-200"></div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up">
                        Exploring my professional history, academic achievements, and continuous learning through certifications.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Work Experience */}
                    <div className="lg:col-span-2 space-y-10 animate-fade-in-left">
                        <h3 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                            <Briefcase className="w-7 h-7 text-purple-400" /> Professional Experience
                        </h3>

                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-gray-800 rounded-xl shadow-2xl p-7 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-pink-500 relative group overflow-hidden">
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-600 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <div className="border-b border-gray-700 pb-5 mb-5">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                                        <div>
                                            <h4 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">{exp.title}</h4>
                                            <p className="text-purple-300 text-lg">{exp.company}</p>
                                        </div>
                                        <span className="inline-block bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold border border-purple-700 shadow-md">{exp.type}</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 text-md text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5 text-teal-400" />
                                            {exp.duration}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-blue-400" />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ul className="space-y-3 mb-5">
                                        {exp.description.map((item, itemIndex) => (
                                            <li key={itemIndex} className="text-gray-300 flex items-start gap-3">
                                                <span className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
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

                    {/* Education & Certifications */}
                    <div className="space-y-10 animate-fade-in-right">
                        {/* Education */}
                        <div>
                            <h3 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                                <GraduationCap className="w-7 h-7 text-blue-400" /> Education
                            </h3>
                            {education.map((edu, index) => (
                                <div key={index} className="bg-gray-800 rounded-xl shadow-2xl p-7 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500 relative group overflow-hidden">
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    <div className="border-b border-gray-700 pb-5 mb-5">
                                        <div className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{edu.degree}</div>
                                        <p className="text-teal-300 text-lg">{edu.school}</p>
                                        <div className="flex items-center gap-2 text-md text-gray-400 mt-2">
                                            <Calendar className="w-5 h-5 text-purple-400" />
                                            {edu.duration}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-md text-gray-400 mb-3">Relevant Coursework:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.relevant.map((course, courseIndex) => (
                                                <span
                                                    key={courseIndex}
                                                    className="inline-block bg-gray-700 text-gray-200 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-600 transition-transform transform hover:scale-105 hover:bg-gray-600"
                                                >
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Certifications */}
                        {/* <div>
                            <h3 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                                <Award className="w-7 h-7 text-green-400" /> Certifications
                            </h3>
                            <div className="bg-gray-800 rounded-xl shadow-2xl p-7 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-green-500 relative group overflow-hidden">
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-600 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <ul className="space-y-4">
                                    {certifications.map((cert, index) => (
                                        <li key={index} className="flex items-start gap-3 text-lg text-gray-200 group-hover:text-green-300 transition-colors duration-300">
                                            <Award className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Custom Tailwind CSS Animations */}
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
                .animation-delay-2000 { animation-delay: 2s; }
            `}</style>
        </section>
    );
};

export default Experience;