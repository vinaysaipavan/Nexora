import './App.css';
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

export function FAQ(){
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
        {
            question: "1. What services does your company offer?",
            answer: "We specialize in game development, 2D & 3D animation, UI/UX design, AI automation software, digital marketing, and IoT engineering — delivering complete digital innovation under one roof."
        },
        {
            question: "2. Do you work with startups as well as established companies?",
            answer:"Yes! Whether you’re a startup with a bold idea or an enterprise looking to scale, we tailor our solutions to match your vision, budget, and growth goals."
        },
        {
            question: "3. How long does a typical project take?",
            answer:  "Project timelines vary depending on scope and complexity. After understanding your requirements, we provide a detailed project roadmap with clear milestones and delivery dates."
        },
        {
            question: "4. Can you handle both design and development?",
            answer: "Absolutely. Our team blends creative design with strong technical expertise — ensuring your product looks amazing and performs flawlessly across platforms."
        },
        {
            question: "5. Do you offer post-launch support or maintenance?",
            answer: "Yes, we provide ongoing maintenance, updates, and performance optimization to keep your project secure, scalable, and future-ready."
        },
        {
            question: "6. How can I get started with your team?",
            answer: "Simply reach out through our contact form or email us your project idea. We’ll schedule a free consultation to discuss your goals and craft a custom solution for you."
        }
    ]
    return(
        <>
        <section className="py-6 xl:px-24 lg:px-16 md:px-12 px-6" id="faq">
            <h1 className='H lg:text-4xl text-2xl font-medium md:font-normal py-6'>FAQ</h1>
            <div className='flex flex-col lg:w-[80%] md:w-[85%] sm:w-[90%] w-[97%]'>
                {faqs.map((item, index) => (
                    <div key={index}>
                        <div className="questions flex items-center justify-between cursor-pointer py-4 border-b border-gray-300" onClick={() =>setActiveIndex(activeIndex === index ? null : index)}>
                            <h1 className="md:text-lg sm:text-base text-sm md:font-semibold font-normal">{item.question}</h1>
                            {activeIndex === index ? (<LuMinus className="text-xl sm:ml-0 ml-2" />) : (<LuPlus className="text-xl sm:ml-0 ml-2" />)}
                        </div>
                        <div className={`p1 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-40 mt-2" : "max-h-0"}`}>
                            <p className="bg-white p-4 rounded-lg shadow text-gray-600">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}