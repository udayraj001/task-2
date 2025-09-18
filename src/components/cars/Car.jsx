import React, { useState } from "react";
import { motion } from "framer-motion";
import car from "../../assets/3d/car.png";

const Car = () => {
  const [rotation, setRotation] = useState(0);

  // Handle scroll wheel rotation
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setRotation((prev) => prev + 15); // scroll down → rotate right
    } else {
      setRotation((prev) => prev - 15); // scroll up → rotate left
    }
  };

  return (
  <>
  <div className="text-3xl ml-3.5 justify-center items-center font-bold md:text-4xl md:ml-64 md:">Innovative, Tailored <span>Solutions</span> <span>for Mobility Ecosystem</span>
</div>
    <div className="m-3 md:ml-56 md:w-2/3 mt-16 md:py-36 md:px-48 bg-black text-white md:mt-36 flex flex-col md:flex-row items-center justify-between  border border-gray-600 rounded-3xl p-4">
      {/* Left Text Content */}
      <div className="flex-1">
        <h1 className="text-2xl md:text-5xl font-bold leading-snug">
          Passenger Car
        </h1>

        <ul className="mt-2 space-y-4 text-gray-300">
          <li className="flex items-center gap-3 tracking-tight text-sm">
            Driving innovation in software and systems for next generation
            passenger cars.{" "}
          </li>
        </ul>

        <button className="text-sm mt-6 ml-16 py-2 px-4 justify-center items-center bg-[#6a4be7] text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition">
          Know More {">"}
        </button>

      
     
      </div>

      {/* Right Car Image */}
      <motion.div
        className="flex-1 flex justify-center"
        whileHover={{ scale: 1.05 }}
        onWheel={handleWheel}
      >
        <motion.img
          src={car} // 👉 replace with your car image path
          alt="Car"
          className="w-full max-w-lg"
          animate={{ rotateY: rotation }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          style={{ transformStyle: "preserve-3d" }}
        />
      </motion.div>
    </div>
    </>
  );
};

export default Car;
