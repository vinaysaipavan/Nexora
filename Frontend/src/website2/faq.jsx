import './faq.css';
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

export function FAQ(){
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
        {
            question: "1. What does your company specialize in?",
            answer: "We specialize in providing intelligent construction estimation software that helps clients accurately forecast project costs, timelines, and resource requirements before construction begins."
        },
        {
            question: "2. How does your estimation software work?",
            answer:"Our software uses advanced algorithms and data analytics to analyze material costs, labor rates, and project parameters. It then generates precise cost estimates and reports to support better decision-making."
        },
        {
            question: "3. Who can benefit from your solutions?",
            answer:  "Our solutions are designed for contractors, builders, project managers, and infrastructure developers who want to improve accuracy, reduce risk, and optimize budget management in their construction projects."
        },
        {
            question: "4. What makes your software different from others?",
            answer: "We combine modern technology with deep industry expertise to deliver highly accurate, user-friendly, and customizable estimation tools that adapt to your specific project needs."
        },
        {
            question: "5. Do you offer integration with other construction management tools?",
            answer: "Yes. Our platform can integrate with various project management and accounting tools, enabling seamless data flow and efficient workflow management."
        },
        {
            question: "6. How can I get started with your services?",
            answer: "You can request a free demo or consultation through our website. Our team will walk you through the features, setup process, and customization options to best suit your project requirements."
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