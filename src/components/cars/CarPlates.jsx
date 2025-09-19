import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Car base image
import carBase from "../../assets/3d/car-2.png";

// Plates (replace with your images)
import plate1 from "../../assets/3d/plate-1.png";
import plate2 from "../../assets/3d/plate-2.png";
import plate3 from "../../assets/3d/plate-1.png";
import plate4 from "../../assets/3d/plate-2.png";

// Particle overlays (replace with unique ones for each section)
import particle1 from "../../assets/3d/p-1.png";
import particle2 from "../../assets/3d/p-2.png";
import particle3 from "../../assets/3d/p-3.png";
import particle4 from "../../assets/3d/p-4.png";

const sections = [
  {
    id: 0,
    title: "Domain Application",
    description: "Scaling autonomous mobility with cutting edge technology and innovation.",
    plate: plate1,
    particle: particle1,
    direction: -1,
  },
  {
    id: 1,
    title: "Vehicle OS",
    description: "We lead the transformation towards Software-Defined Vehicles, offering expertise in middleware, software integration, and AUTOSAR. As a key partner in global SDV programs, KPIT accelerates development and simplifies vehicle architecture transitions.",
    plate: plate2,
    particle: particle2,
    direction: 1,
  },
  {
    id: 2,
    title: "Cloud, Edge analytics & Data management",
    description: "Our Connected Vehicle Solutions, production-proven platforms and tools, knowledge and capabilities and vast years of experience position us the Preferred Partner for Automakers in the Cockpit, Connectivity and Cloud programs of today and tomorrow.",
    plate: plate3,
    particle: particle3,
    direction: -1,
  },
  {
    id: 3,
    title: "Vehicle Engineering & Design",
    description: "We help you to validate your concepts and validate them into real products. Our fundamental focus on designing includes the aesthetics & functionality of the product.",
    plate: plate4,
    particle: particle4,
    direction: 1,
  },
];

const CarPlates = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10 md:py-16">
      {/* Navbar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {sections.map((sec, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`px-4 py-2 rounded-full text-sm md:text-base  transition border ${
              activeIndex === i
                ? "bg-black text-white shadow-md"
                : " text-gray-400 hover:bg-gray-200"
            }`}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {/* Content + Car */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl w-full md:mt-28 ">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left ">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 md:mb-16 md:mt-12 md:pl-12">
                {sections[activeIndex].title}
              </h2>
              <p className="text-gray-600 mt-4 text-base md:text-sm lg:text-xl leading-relaxed max-w-lg mx-auto md:mb-52">
                {sections[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Car + Plates + Particles */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* Car image */}
          <img
            src={carBase}
            alt="Car"
            className="w-[280px] sm:w-[380px] md:w-[480px] lg:w-[580px] xl:w-[640px] relative z-0 opacity-90"
          />

          {/* Particle overlay (changes per section) */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={sections[activeIndex].particle}
              alt="Particles"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute top-[-60px] sm:top-[-80px] md:top-[-100px] lg:top-[-120px] 
                         w-[100px] sm:w-[140px] md:w-[180px]  z-10"
            />
          </AnimatePresence>

          {/* Plates */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 z-20">
            {sections.map((sec, i) => (
              <AnimatePresence key={i}>
                {activeIndex === i && (
                  <motion.img
                    key={i}
                    src={sec.plate}
                    alt={`Plate ${i}`}
                    initial={{ y: sec.direction * 120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: sec.direction * -120, opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px]"
                  />
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPlates;
