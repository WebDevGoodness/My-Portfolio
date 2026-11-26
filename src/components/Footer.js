
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "About Me", id: "about" },
        { label: "Skills & Specialties", id: "skills" },
        { label: "Projects", id: "projects" },
        { label: "Experience", id: "experience" },
        { label: "Contact", id: "contact" },
    ];

    const socialLinks = [
        {
            label: "GitHub",
            href: "https://github.com/webdevgoodness",
            icon: Github,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/babasolagoodness/",
            icon: Linkedin,
        },
        {
            label: "Twitter",
            href: "https://twitter.com/olamideCJ",
            icon: Twitter,
        },
        {
            label: "Email",
            href: "mailto:goodness.babasola.dev@gmail.com",
            icon: Mail,
        },
    ];

    return (
        <footer className="bg-gray-950 py-12 px-4 rounded-t-3xl text-gray-300">
            <div className="container mx-auto max-w-7xl">

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-800">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
                            Goodness Babasola
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Building modern, responsive and scalable web
                            applications through thoughtful frontend and
                            backend engineering.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-5">
                            Quick Links
                        </h4>

                        <nav className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    className="text-gray-400 hover:text-teal-400 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-5">
                            Services
                        </h4>

                        <ul className="flex flex-col gap-3 text-gray-400">
                            <li>Full-Stack Development</li>
                            <li>Frontend Development</li>
                            <li>Backend API Development</li>
                            <li>Database Integration</li>
                            <li>Responsive Web Design</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-5">
                            Connect With Me
                        </h4>

                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={label === "Email" ? undefined : "_blank"}
                                    rel={label === "Email" ? undefined : "noopener noreferrer"}
                                    aria-label={label}
                                    className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-teal-500 hover:text-white transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-8 text-center">
                    <p className="text-sm text-gray-500">
                        © {currentYear} Goodness Babasola. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
