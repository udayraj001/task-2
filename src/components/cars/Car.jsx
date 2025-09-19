import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import car from "../../assets/3d/car.png";
import truck from "../../assets/3d/truck.png";
// import car3 from "../../assets/3d/car-3.png";
// import car4 from "../../assets/3d/car-4.png";

const cars = [
  {
    title: "Passenger Car",
    description:
      "Driving innovation in software and systems for next generation passenger cars.",
    image: car,
  },
  {
    title: "Trucks & Off-highway",
    description: "Optimizing software and systems for trucks and off-highway vehicles: Simplify, Innovate, and Accelerate",
    image: truck,
  },
  {
    title: "Commercial Vehicle",
    description:
      "Advanced electronics for safe and efficient commercial transport.",
    image: car,
  },
  {
    title: "Autonomous Vehicle",
    description:
      "Next-gen ADAS and autonomous systems for future-ready mobility.",
    image: car,
  },
];

const Car = () => {
  const [index, setIndex] = useState(0);

  // Change card every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cars.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Heading */}
      <div className="text-3xl ml-3.5 font-bold md:text-4xl md:ml-[280px] md:mt-16">
        Innovative, Tailored Solutions
        <br className="hidden md:block" />
        <span className="md:ml-[50px]">for Mobility Ecosystem</span>
      </div>

      {/* Single Card with Animation */}
      <div className="relative w-full flex justify-center py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-black text-white border border-gray-600 rounded-3xl p-6 flex flex-col md:flex-row items-start justify-start gap-10 max-w-5xl w-full mx-6"
          >
            {/* Left Content */}
            <div className="flex-1 text-left">
              <h1 className="text-2xl md:text-4xl font-bold leading-snug text-[#b0ff44]">
                {cars[index].title}
              </h1>
              <p className="mt-3 text-gray-300 text-sm md:text-base">
                {cars[index].description}
              </p>
              <button className="text-sm mt-6 py-2 px-6 bg-[#6a4be7] text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition">
                Know More {">"}
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src={cars[index].image}
                alt={cars[index].title}
                className="w-full max-w-md md:max-w-lg lg:max-w-xl"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Car;
