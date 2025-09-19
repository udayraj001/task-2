import React, { useRef, useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Clients from "./components/Clients/Clients";
import Car from "./components/cars/Car";
import GalaxyParticles from "./components/cars/GalaxyParticles";
import SmokeTransition from "./components/cars/SmokeTransition ";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import Subscribe from "./components/subscribe/Subscribe";
import JoinOurTeam from "./components/team/JoinOurTeam";
import CarPlates from "./components/cars/CarPlates";
import CommWave from "./components/CommWave";
import Testimonials from "./components/testimonial/Testimonials";

const App = () => {
  const [stage, setStage] = useState("clients");
  const clientsRef = useRef(null);
  const galaxyRef = useRef(null);
  const carRef = useRef(null);

  const transitionVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      y: -20,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "clients") {
              setStage("clients");
            } else if (entry.target.id === "galaxy") {
              setStage("galaxy");
            } else if (entry.target.id === "car") {
              setStage("car");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (clientsRef.current) observer.observe(clientsRef.current);
    if (galaxyRef.current) observer.observe(galaxyRef.current);
    if (carRef.current) observer.observe(carRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div className=" text-white">
      <Header />
      <HeroSection />

      {/* 🔹 Clients Section */}
      <div
        id="clients"
        ref={clientsRef}
        className="h-screen flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {stage === "clients" && (
            <motion.div
              key="clients"
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Clients />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🔹 Galaxy Section with Border Glow */}
      <div
        id="galaxy"
        ref={galaxyRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <AnimatePresence mode="wait">
          {stage === "galaxy" && (
            <motion.div
              key="galaxy"
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full bg-black"
            >
              <GalaxyParticles />
              <SmokeTransition /> {/* 🔹 Border glow overlay */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🔹 Car Section */}
      <div
        id="car"
        ref={carRef}
        className="h-screen flex items-center justify-center bg-black"
      >
        <AnimatePresence mode="wait">
          {stage === "car" && (
            <motion.div
              key="car"
              variants={transitionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Car />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
             <div>
              <CarPlates/>
              <Testimonials/>
          <JoinOurTeam/>
    <Subscribe/>
<Footer/>

</div>
    </>
  );
};

export default App;
