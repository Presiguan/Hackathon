import React from "react";
import Navbar from "./Components/Nav";
import Banner from "./Components/banner";
import Card from "./Components/carCards";
import HeroCard from "./Components/heroCard";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <HeroCard />
      {/* <Card /> */}
    </>
  );
}

export default App;
