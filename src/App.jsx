import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Clients from "./components/Clients/Clients";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />

      {/* Clients */}
      <Clients />
    </div>
  );
};

export default App;
