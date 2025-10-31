import {HomePage} from "./HomePage"
import { Process } from "./Process"
import { Service } from "./Service"
import { Works } from "./Works"
import { Footer } from "./Footer"
import { Techpage } from "./techpage"
import {FAQ} from "./faq"


export function MainPage2({setCurrentsite}){
    return(
        <>
        <HomePage />
        <Service />
        <Process />
        <Works />
        <Techpage setCurrentsite={setCurrentsite}/>
        <FAQ />
        <Footer setCurrentsite={setCurrentsite}/>
        </>
    )
}