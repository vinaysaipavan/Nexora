import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ImLeaf } from "react-icons/im";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import './App.css';
import { useRef, useState ,useLayoutEffect} from "react";
import gsap from "gsap";
import { Navbar } from "./navbar";

export function Letstalk(){
    const [showButton,setShowButton] = useState(false);
    const [buttonHover,setButtonHover] = useState(false);
    const [mailHover,setMailHover] = useState(false);
    const [selectedOption,setSelectedOption] = useState(null);
    const enquiryOptions = [
        "Software Development",
        "Construction"
    ]

    const handleOptionSelect = (option)=>{
        setSelectedOption(option);
        setShowButton(false);
    }

    const handleToggleDropdown = ()=>{
        setShowButton(!showButton);
    }

    const PhoneRef = useRef(null);
    const pinRef = useRef(null);
    const t1 = useRef(null);
    const t2 = useRef(null);
    const t3 = useRef(null);
    const t4 = useRef(null);

    useLayoutEffect(() => {
        gsap.set(t3.current, { x: -100, opacity: 0 });
        gsap.set(t4.current, { x: 100,  opacity: 0 });
        gsap.to([t3.current, t4.current], { x: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power2.out" });
    }, []);

    const PhoneEnter = ()=>{
        t1.current = gsap.from(PhoneRef.current,{
            x:5,
            y:4,
            rotate:4,
            duration:0.1,
            repeat:4,
            yoyo:true,
            ease:"power1.inOut",
        });
    };

    const PhoneLeave = ()=>{
        if(t1.current){
            t1.current.kill();
            gsap.set(PhoneRef.current,{
                x:0,
                rotate:0,
            });
        }
    };

    const pinEnter = ()=>{
        t2.current  = gsap.timeline();
        t2.current
         .to(pinRef.current,{
            y:-40,
            rotate:360,
            duration:0.7,
            ease:"power2.out"
        })
        .to(pinRef.current,{
            y:0,
            rotate:360,
            duration:0.4,
            ease:"bounce.out",
        })
    }

    const pinLeave = ()=>{
        if(t2.current){
            t2.current.kill();
            gsap.set(pinRef.current,{
                y:0,
                rotate:0,
            })
        }
    }
    

    return(
        <>
        <Navbar />
        <section className="py-6 xl:px-24 lg:px-16 md:px-16 talk min-h-[100vh]" id="contact-us">
            <div className="flex-col-reverse flex md:flex-row md:justify-between items-center">
                <div className="md:w-[40%] w-[85%] flex flex-col" ref={t3}>
                    <div className="Talk-box talk-b" onMouseEnter={PhoneEnter} onMouseLeave={PhoneLeave}>
                        <div><BsTelephone className="talk-icon" ref={PhoneRef}/></div>
                        <div className="talk-data">
                            <div><h2>CALL US ON</h2></div>
                            <div><p>8431322728</p></div>
                        </div>
                    </div>
                    <div className="Talk-box talk-b" onMouseEnter={()=>setMailHover(true)} onMouseLeave={()=>setMailHover(false)}>
                        <div>{mailHover ? <FaRegEnvelopeOpen className="talk-icon"/> : <BsEnvelope className="talk-icon"/>}</div>
                        <div className="talk-data">
                            <div><h2>EMAIL US AT</h2></div>
                            <div><p>info@nexoratechsolutions.com</p></div>
                        </div>
                    </div>
                    <div className="Talk-box talk-b" onMouseEnter={pinEnter} onMouseLeave={pinLeave}>
                        <div>
                            <IoLocationOutline className="talk-icon" ref={pinRef}/>
                        </div>
                        <div className="talk-data">
                            <div><h2>Find us at</h2></div>
                            <div><p>Madhapur, Hyderabad, Telengana 500081</p></div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[40%] w-[85%]" ref={t4}>
                    <div className=""><span className="flex items-center gap-1 leaf xl:text-4xl text-white lg:text-3xl text-2xl mb-4">Let's talk<ImLeaf className="text-green-500"/></span></div>
                    <div className="flex flex-col md:p-4 lg:p-6 py-4 Right-content">
                        <input type="text" placeholder="Name" className="inp" /> 
                        <input type="email" placeholder="Email address" className="inp" />
                        <input type="text" placeholder="Mobile number" className="inp"/>
                        <input type="text" placeholder="Website / URL" className="inp"/>    
                        <div className="w-full">
                            <button className="md:w-[94%] w-[92%] text-slate-500 pr-6 inp flex items-center justify-between enq transition duration-300" 
                                onClick={handleToggleDropdown}
                                onMouseEnter={() => setButtonHover(true)}
                                onMouseLeave={() => setButtonHover(false)}
                                >
                                {selectedOption || "Enquiry Type"}{buttonHover ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </button>
                            {showButton && (
                            <div className="top-full w-full left-0 ml-2 flex space-x-2 flex-col space-y-1">
                                {enquiryOptions.map((option, index) => (
                                <button 
                                    key={index}
                                    className={`py-2 px-4 ml-2 rounded w-[92%] text-left transition duration-300 ${
                                    selectedOption === option 
                                    ? 'bg-blue-500 text-white' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                onClick={() => handleOptionSelect(option)}
                                >
                                {option}
                                </button>
                            ))}
                            </div>
                        )}
                        </div>
                        <textarea name="" placeholder="How can i help?" id="" className="inp"></textarea> 
                        <button className="text-lg bg-[#58bacd] w-28 h-12 rounded-md ml-4">Send Now</button> 
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}