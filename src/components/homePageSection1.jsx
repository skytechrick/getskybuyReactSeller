import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
    {
        icon: "👤",
        title: "Register",
        description: "Create your account in just a few clicks.",
    },
    {
        icon: "📑",
        title: "KYC Verification",
        description: "Upload your documents for verification.",
    },
    {
        icon: "📦",
        title: "Add Products",
        description: "Easily list your products using our seller panel.",
    },
    {
        icon: "🚀",
        title: "Start Selling",
        description: "Go live and start receiving orders from customers near you.",
    },
];

export default function StartSelling() {
    useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    return (
        <section className="w-full pt-16 pb-12 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-600 mb-12">
                Start Selling in Just 4 Steps
            </h2>
            <div className="relative w-full max-w-5xl mx-auto px-4">
                <div className="border-l-4 border-orange-400 absolute left-1/2 transform -translate-x-1/2 h-full"></div>

                {steps.map((step, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`mb-12 flex flex-col md:flex-row items-center md:items-start ${
                                isLeft ? "md:justify-start" : "md:justify-end"
                            }`}
                            data-aos={isLeft ? "fade-right" : "fade-left"}
                        >
                            <div
                                className={`w-full md:w-1/2 p-4 md:p-6 rounded-2xl shadow-lg bg-gradient-to-r from-orange-400 to-red-400 text-white relative z-10 ${
                                    isLeft ? "md:mr-12" : "md:ml-12"
                                }`}
                            >
                                <div className="text-3xl mb-2">{step.icon}</div>
                                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                                <p className="text-sm md:text-base italic">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
