import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <footer className="text-white" style={{ background: "#0A0A0A" }}>
        
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between gap-10" data-aos="fade-up">
            
            <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">GET SKY BUY</h3>
            <p className="text-sm mb-4 italic">Empowering local sellers with fast delivery and zero hassle.</p>
            <div className="flex gap-4 text-xl">
                <a href="#" className="hover:text-orange-300 transition"><FaInstagram /></a>
                <a href="#" className="hover:text-orange-300 transition"><FaFacebookF /></a>
                <a href="#" className="hover:text-orange-300 transition"><FaWhatsapp /></a>
            </div>
            </div>

            <div className="flex-1">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline hover:text-orange-300">Home</a></li>
                <li><a href="#" className="hover:underline hover:text-orange-300">Seller Panel</a></li>
                <li><a href="#" className="hover:underline hover:text-orange-300">FAQ</a></li>
                <li><a href="#" className="hover:underline hover:text-orange-300">Contact Us</a></li>
                <li><a href="#" className="hover:underline hover:text-orange-300">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline hover:text-orange-300">Privacy Policy</a></li>
            </ul>
            </div>

            {/* Contact Info */}
            <div className="flex-1">
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
                <li>📍 Bagdogra, West Bengal, India</li>
                <li>📞 +91-9332525641</li>
                <li>✉️ support@getskybuy.in</li>
            </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-600 text-center py-4 text-sm text-gray-300">
            <b>GET SKY BUY @ 2025 All rights reserved.</b>
        </div>
        </footer>
    );
}
