import { FAQ } from "./Faq";
import { WHY } from "./Why";
import { Footer } from "./footer";
import { Process } from "./process";
import { Services } from "./service1";
import { Technologies } from "./techstacks";
import { Works } from "./works";
import { Home } from "./home";
import { Navbar } from "./navbar";
import {Sports} from "./sportsIntro";

export function MainPage1({setCurrentsite}) {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Technologies />
      <Process />
      <Works />
      <WHY />
      <Sports setCurrentsite={setCurrentsite} />
      <FAQ />
      <Footer />
    </>
  );
}
