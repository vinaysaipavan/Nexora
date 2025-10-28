import './App.css';

export function WHY(){
    return(
        <>
        <section className='my-2'>
            <h1 class="text-left text-black md:text-4xl text-3xl sm:ml-20 sm:my-10 ml-6 my-6 font-normal">Why Nexora</h1>
            <div class="flex md:flex-row flex-col justify-center items-center gap-4 lg:m-10 md:ml-8 sm:ml-6 mx-2 lg:pl-7 sm:pl-4 pl-2">
                <div class="why-column1 flex flex-col relative">
                    <img src="../1.webp" alt="expert1" id="expert1"/>
                    <img src="../2.webp" alt="expert2" id="expert2"/>
                    <img src="../3.webp" alt="expert3" id="expert3"/>
                    <img src="../4.webp" alt="expert3" id="expert4"/>
                    <div className="image-profile flex sm:w-28 sm:h-28 w-14 h-14 rounded-full text-center items-center justify-center text-[2.5rem] bg-emerald-400 relative -top-[20px] sm:left-[330px] left-[190px]"><p className='text-black mt-[30px] sm:text-4xl text-2xl font-bold'>50+</p></div>
                    <p className='text-black text-left sm:text-xl text-base my-2 sm:px-9 px-3'>Experts ready to start with your project</p>
                    <h3 className='font-normal text-black text-left sm:text-4xl text-xl px-3'>We are not "blind coders" or "feature makers." We focus on creating the right product for the right people.</h3>
                 </div>
                <div class="why-column2 grid text-center justify-center gap-2.5">
                    <div class="flex gap-2.5">
                        <div class="py-2.5 px-5 flex bg-emerald-400 h-40 sm:w-[220px] w-[105px] rounded-xl items-center">
                            <img loading="lazy" src="../Shape-reason.svg" alt="" className='h-[100px] w-[130px] object-fill'/>
                        </div>
                        <div class="py-2.5 px-5 flex bg-emerald-400 h-40 sm:w-[420px] w-[200px] rounded-xl items-center">
                            <p className='text-black sm:text-base text-sm sm:mr-5 mr-2 font-medium'>Agile teams are primed for deployment within 2-3 weeks.</p>
                            <img src="../Logo.png" alt="" className='sm:h-[120px] sm:w-[130px] w-[60px] h-[65px]'/>
                        </div>
                    </div>
                    <div class="flex gap-2.5">
                        <div className="sm:flex-1 w-[150px] py-2.5 px-5 flex flex-col bg-emerald-400 rounded-xl items-center justify-center">
                            <p className='text-sm md:text-lg'>Well-defined service standards for all clients.</p>
                            <img src="../Shape-reason-3.svg" alt="" id="shape3"/>
                        </div>
                        <div className='flex-1 sm:flex hidden'>
                            <img src="../Reason.webp" alt="" id="working-img" className='rounded-xl object-cover'/>
                        </div>
                        <div className="sm:flex-1 w-[150px] py-2.5 px-5 flex flex-col bg-emerald-400  rounded-xl items-center justify-center">
                            <div class="counter text-[4rem] font-bold text-white">85%</div>
                            <p className='text-black text-left text-[1.1rem]'>of developers are senior-level.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}