import React from "react";
import Navbar from "./Components/Nav";
import Banner from "./Components/banner";
import Card from "./Components/carCards";
import HeroCard from "./Components/heroCard";
import HeroCard2 from "./Components/heroCard2";
import Hero from "./Components/hero";
import Download from "./Components/download";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <HeroCard />
      <HeroCard2 />
      <Download />
      <Hero />
      <Footer />

      {/* <Card /> */}
    </>
  );
}

export default App;
