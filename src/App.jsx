import React from "react";
import Hero from "./Components/Hero";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Card3 from "./Components/Card3";
import Qusin from "./Components/Qusin";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="m-auto">

      <header className="px-6 md:px20 lg:px-20 py-4">
        <div className="flex justify-between items-center">

          <img className=""src="/hero img/logo 1.png"alt="Logo" />

          <button className="bg-green-800 text-white px-5 py-2 rounded-lg text-sm sm:text-base"> Get Started</button>
        </div>
      </header>

      <Hero />
      <Card1 />
      <Card2 />
      <Card3 />
      <Qusin />
      <Footer />
    </div>
  );
}

export default App;
