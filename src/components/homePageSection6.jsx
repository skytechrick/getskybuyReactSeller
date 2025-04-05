import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
    {
        question: "Do I need GST to start selling?",
        answer: "No, GST is not mandatory for local sales. You can start with basic registration.",
    },
    {
        question: "How are deliveries handled?",
        answer: "GSB handles pickup and delivery using trusted partners like Shiprocket, Delhivery, and local agents.",
    },
    {
        question: "How long does onboarding take?",
        answer: "You can complete onboarding in 10–15 minutes, and the verification process takes 1–2 days.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-16 bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-600 mb-10">
                Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto px-4 space-y-6" data-aos="fade-up">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-orange-200 rounded-xl shadow-md overflow-hidden"
                    >
                        <button
                            className="w-full flex justify-between items-center p-4 font-medium text-left text-orange-700 bg-orange-50 hover:bg-orange-100 transition"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            <span>{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="p-4 text-gray-700 bg-white border-t border-orange-100">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
