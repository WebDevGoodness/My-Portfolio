import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close mobile menu after selection
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-xl' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo/Name */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-300 hover:to-blue-400 transition-colors duration-300 focus:outline-none"
                    aria-label="Goodness Babasola - Back to top"
                >
                    Goodness Babasola
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <NavItem onClick={() => scrollToSection('about')}>About</NavItem>
                    <NavItem onClick={() => scrollToSection('skills')}>Skills</NavItem>
                    <NavItem onClick={() => scrollToSection('projects')}>Projects</NavItem>
                    <NavItem onClick={() => scrollToSection('experience')}>Experience</NavItem>
                    <NavItem onClick={() => scrollToSection('contact')}>Contact</NavItem>
                </nav>

                {/* Social Links */}
                <div className="hidden md:flex items-center space-x-5">
                    <SocialLink href="https://github.com/webdevgoodness" ariaLabel="GitHub">
                        <Github className="w-6 h-6" />
                    </SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/babasolagoodness/" ariaLabel="LinkedIn">
                        <Linkedin className="w-6 h-6" />
                    </SocialLink>
                    <SocialLink href="mailto:goodness.babasola.dev@gmail.com" ariaLabel="Email">
                        <Mail className="w-6 h-6" />
                    </SocialLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-200 hover:text-teal-400 focus:outline-none transition-colors duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>

                {/* Mobile Navigation */}
                <div
                    className={`fixed inset-0 bg-gray-950/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
                >
                    <div className="flex justify-end p-6">
                        <button
                            className="p-2 text-gray-200 hover:text-teal-400 focus:outline-none"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="w-7 h-7" />
                        </button>
                    </div>
                    <nav className="flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-gray-100 h-full -mt-20">
                        <MobileNavItem onClick={() => scrollToSection('about')}>About</MobileNavItem>
                        <MobileNavItem onClick={() => scrollToSection('skills')}>Skills</MobileNavItem>
                        <MobileNavItem onClick={() => scrollToSection('projects')}>Projects</MobileNavItem>
                        <MobileNavItem onClick={() => scrollToSection('experience')}>Experience</MobileNavItem>
                        <MobileNavItem onClick={() => scrollToSection('contact')}>Contact</MobileNavItem>
                        <div className="flex space-x-8 pt-8">
                            <SocialLink href="https://github.com/webdevgoodness" ariaLabel="GitHub" mobile>
                                <Github className="w-7 h-7" />
                            </SocialLink>
                            <SocialLink href="https://www.linkedin.com/in/babasolagoodness/" ariaLabel="LinkedIn" mobile>
                                <Linkedin className="w-7 h-7" />
                            </SocialLink>
                            <SocialLink href="mailto:goodness.babasola.dev@gmail.com" ariaLabel="Email" mobile>
                                <Mail className="w-7 h-7" />
                            </SocialLink>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

// Helper components for cleaner JSX
const NavItem = ({ children, onClick }) => (
    <button
        onClick={onClick}
        className="relative text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium group text-lg focus:outline-none"
    >
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
    </button>
);

const MobileNavItem = ({ children, onClick }) => (
    <button
        onClick={onClick}
        className="text-gray-100 hover:text-teal-400 transition-colors duration-300 focus:outline-none"
    >
        {children}
    </button>
);

const SocialLink = ({ children, href, ariaLabel, mobile = false }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-300 ${
            mobile ? 'text-gray-100' : ''
        }`}
    >
        {children}
    </a>
);

export default Header;