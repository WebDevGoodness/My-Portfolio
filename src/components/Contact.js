
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Briefcase } from "lucide-react"; // Added MessageSquare, Briefcase, DollarSign
import WhatsAppQRCode from "./WhatsAppQrcode";

const Contact = () => {

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "goodness.babasola.dev@gmail.com",
            href: "mailto:goodness.babasola.dev@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+234 (70) 3335-7952",
            href: "tel:+2347033357952"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Ogbomoso, Oyo State",
            href: null
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/webdevgoodness"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/babasolagoodness/"
        },
        {
            icon: Twitter,
            label: "Twitter",
            href: "https://twitter.com/olamideCJ"
        }
    ];

    return (
        <section id="contact" className="py-20 px-4 bg-gray-900 text-gray-100 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-fade-in-down">
                        Let's Connect
                    </h2>
                    <div className="w-28 h-1.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 animate-fade-in-down animation-delay-200"></div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up">
                        I'm always eager to discuss new ideas, collaborations, or simply chat about the latest in web development. Don't hesitate to reach out!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left Column: WhatsApp QR and Socials */}
                    <div className="space-y-10 animate-fade-in-left">

                        {/* WhatsApp QR Code */}                             
                            <WhatsAppQRCode />

                        {/* Social Links */}
                        <div className="bg-gray-800 rounded-xl shadow-2xl p-7 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-purple-500 relative group overflow-hidden">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                                <Twitter className="w-6 h-6 text-purple-400" /> Follow Me
                            </h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-8 h-8" />
                                    </a>
                                ))}
                            </div>
                            <p className="text-md text-gray-400 text-center mt-8">
                                Connect with me on social media to stay updated on my latest projects and tech insights.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Contact Info & Availability */}
                    <div className="space-y-10 animate-fade-in-right">
                        {/* Contact Information */}
                        <div className="bg-gray-800 rounded-xl shadow-2xl p-7 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500 relative group overflow-hidden">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                                <Mail className="w-6 h-6 text-blue-400" /> Direct Contact
                            </h3>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                            <item.icon className="w-6 h-6 text-teal-400 group-hover:text-blue-300 transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-0.5">{item.label}</p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-lg font-medium text-white">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-gray-800 rounded-xl shadow-2xl p-7 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-orange-500 relative group overflow-hidden">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                                <Briefcase className="w-6 h-6 text-orange-400" /> Availability
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 animate-pulse"></div>
                                    <span className="text-md text-gray-200">Available for new projects</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 bg-yellow-500 rounded-full flex-shrink-0 animate-pulse"></div>
                                    <span className="text-md text-gray-200">Open to freelance opportunities</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 animate-pulse"></div>
                                    <span className="text-md text-gray-200">Considering full-time roles</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-6">Response time: Usually within 24 hours.</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-20 p-10 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 animate-fade-in-up animation-delay-600">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                        Ready to Transform Your Ideas?
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        Whether it's a groundbreaking web application or refining an existing digital product, I'm here to bring your vision to life with precision and creativity.
                    </p>
                    <a
                        href="mailto:goodness.babasola.dev@gmail.com"
                        className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full font-bold text-xl shadow-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                        <Mail className="w-6 h-6 mr-3" />
                        Let's Work Together
                    </a>
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
                .animation-delay-600 { animation-delay: 0.6s; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            `}</style>
        </section>
    );
};

export default Contact;