import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage1 } from "./website1/Components";
import { MainPage2 } from "./website2/Components";
import { About } from "./website1/About";
import { Letstalk } from "./website1/LetsTalk";
import { Landingpage } from "./Landingpage";
import { Contactus } from "./website2/contactus";
import { Quotation } from "./website2/quotation";
import { HomeHero } from "./website2/HomeHero";

function App() {
  const [currentsite, setCurrentsite] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "smooth" for animation
    });
  }, [currentsite]);

  if (currentsite === null) {
    return <Landingpage setCurrentsite={setCurrentsite} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {currentsite === "tech" && (
          <>
            <Route
              path="/"
              element={<MainPage1 setCurrentsite={setCurrentsite} />}
            />
            <Route path="/about" element={<About setCurrentsite={setCurrentsite}/>} />
            <Route path="/contact" element={<Letstalk />} />
          </>
        )}

        {currentsite === "construct" && (
          <>
            <Route
              path="/*"
              element={<MainPage2 setCurrentsite={setCurrentsite} />}
            />
            <Route path="/about" element={<About setCurrentsite={setCurrentsite}/>} />
            <Route path="/home" element={<HomeHero />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/quotation" element={<Quotation />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
