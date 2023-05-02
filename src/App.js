import React from "react";
import Navbar from "./Components/Nav";
import Banner from "./Components/banner";
import Card from "./Components/carCards";
import HeroCard from "./Components/heroCard";
import HeroCard2 from "./Components/heroCard2";
import Hero from "./Components/hero";
import Download from "./Components/download";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <HeroCard />
      <HeroCard2 />
      <Download />
      <Hero />
      {/* <Card /> */}
    </>
  );
}

export default App;
