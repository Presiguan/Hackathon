import React from "react";
import Navbar from "./Components/Nav";
import Banner from "./Components/banner";
import Card from "./Components/carCards";
import HeroCard from "./Components/heroCard";
import HeroCard2 from "./Components/heroCard2";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <HeroCard />
      <HeroCard2 />
      {/* <Card /> */}
    </>
  );
}

export default App;
