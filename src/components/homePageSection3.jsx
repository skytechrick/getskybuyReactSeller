import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample testimonials data
const testimonials = [
    {
        name: "Manik Sarkar",
        shop: "Blanket Store",
        quote: "GSB made it super easy to start selling online. I got my first order within 2 days!",
        image: "https://media.licdn.com/dms/image/v2/D5635AQF43UuGyDa7hA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1737048322878?e=1744477200&v=beta&t=EwlEsxjCjM670SuKA58bHTdWRbkGVCUpcXVTbmG1aHE",
    },
    {
        name: "Neha Jain",
        shop: "Fashion Boutique",
        quote: "Great support and fast delivery. My customers love the experience!",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQE11B9WZIDucw/profile-displayphoto-shrink_200_200/B4EZW0hEAFGgAc-/0/1742490322043?e=1749081600&v=beta&t=MGGI3zoSqa6u6KuAujQNLlOd3-MeBENBd8BBlUcoQaw",
    },
    {
        name: "Rick Sarkar",
        shop: "Daily items",
            quote: "From setup to sales — GSB took care of everything. I just focused on my products.",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHvaZ3hvB_Glg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691129450106?e=1749081600&v=beta&t=zg7SlTNW8WnZ23LnZ4Yb-dVEk18_WLfkb3jnfW-ENYs",
    },
];

export default function TestimonialsSection() {
    useEffect(() => {
        AOS.init({ duration: 600, once: true });
    }, []);

    return (
        <section className="w-full py-16 bg-orange-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-600 mb-12">
            What Our Sellers Say
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
            {testimonials.map((t, index) => (
            <div
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
            >
                <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 border-4 border-orange-400 object-cover"
                />
                <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
                <h4 className="font-semibold text-orange-600">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.shop}</p>
            </div>
            ))}
        </div>
        </section>
    );
}
