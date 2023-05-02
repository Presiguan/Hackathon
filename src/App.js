import React from "react";
import Navbar from "./Components/Nav";
import Banner from "./Components/banner";
import Card from "./Components/carCards";
import HeroCard from "./Components/heroCard";
import HeroCard2 from "./Components/heroCard2";
import Hero from "./Components/hero";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <HeroCard />
      <HeroCard2 />
      <Hero />
      {/* <Card /> */}
    </>
  );
}

export default App;
