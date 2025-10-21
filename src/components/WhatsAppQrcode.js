

import contact_icon from '../img/WhatsAppQRcode.jpg'
import { MessageSquare } from 'lucide-react'; // Assuming you have lucide-react for icons

const WhatsAppQRCode = () => {
    return (
        <div className="bg-gray-800 rounded-xl shadow-2xl p-7 transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-green-500 relative group overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-600 to-teal-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center justify-center gap-3">
                <MessageSquare className="w-7 h-7 text-green-400" /> WhatsApp
            </h3>
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-inner border border-gray-300 transform group-hover:scale-105 transition-transform duration-300">
                    <img
                        src={contact_icon}
                        alt="QR Code to WhatsApp"
                        className="w-48 h-48 object-contain" // Adjusted size for better visual
                    />
                </div>
                <p className="text-md text-gray-300 text-center max-w-xs">Scan the QR code to connect with me instantly on WhatsApp for inquiries or project discussions.</p>
            </div>
            {/* Custom Tailwind CSS Animations (if not already in parent component or global stylesheet) */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
            `}</style>
        </div>
    );
};

export default WhatsAppQRCode;