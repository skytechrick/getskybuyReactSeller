import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function CTASection() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="w-full py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <div
                className="max-w-5xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6"
                data-aos="fade-up"
            >
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Start Selling Today</h2>
                    <p className="text-lg md:text-xl italic">Join 2+ shopkeepers growing their business with GSB.</p>
                </div>

                <Link
                    to="/onboarder/register"
                    className="mt-4 md:mt-0 inline-block px-6 py-3 text-lg font-semibold bg-white text-orange-600 rounded-full shadow-lg hover:scale-105 hover:bg-orange-100 transition duration-300"
                >
                🚀 Become a Seller
                </Link>
            </div>
        </section>
    );
}
