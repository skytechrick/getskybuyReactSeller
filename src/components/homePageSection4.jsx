import CountUp from "react-countup";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
    { icon: "🛍️", value: 2, suffix: "+", label: "Sellers" },
    { icon: "📦", value: 20, suffix: "+", label: "Products Listed" },
    { icon: "🏪", value: 1, suffix: "+", label: "Markets Covered" },
    { icon: "🚚", value: 40, suffix: "+", label: "Orders Delivered" },
];

export default function GSBStatsSection() {
    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    return (
        <section className="w-full py-16 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-600 mb-12">
                GSB statistics
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-6 px-4 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 w-64 bg-gradient-to-br from-orange-400 to-red-400 text-white rounded-2xl shadow-lg text-center"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                >
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <h3 className="text-3xl font-bold mb-1">
                        <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                    </h3>
                    <p className="text-base md:text-lg italic">{stat.label}</p>
                </div>
                ))}
            </div>
        </section>
    );
}
