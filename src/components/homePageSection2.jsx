import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const uspHighlights = [
    {
        icon: "🚚",
        title: "Fast Local Delivery",
        description: "Same-day or next-day delivery in your area.",
    },
    {
        icon: "🛠️",
        title: "Hassle-Free Onboarding",
        description: "Start selling in minutes — no tech skills needed.",
    },
    {
        icon: "📞",
        title: "24/7 Support",
        description: "We’re here to help anytime you need.",
    },
    {
        icon: "🤝",
        title: "Trusted by Shopkeepers",
        description: "10+ local sellers already growing with GSB.",
    },
];

export default function WhyChooseGSB() {
    useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    return (
        <section className="w-full pt-3 py-16 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-600 mb-12">
                Why Choose GSB?
            </h2>

            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
                {uspHighlights.map((usp, index) => (
                <div
                    key={index}
                    className="flex-1 min-w-[250px] max-w-sm p-6 bg-gradient-to-br from-orange-400 to-red-400 text-white rounded-2xl shadow-lg text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    <div className="text-4xl mb-3">{usp.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
                    <p className="text-sm md:text-base italic">{usp.description}</p>
                </div>
                ))}
            </div>
        </section>
    );
}
