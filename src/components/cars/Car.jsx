import React, { useState } from "react";
import { motion } from "framer-motion";
import car from '../../assets/3d/car.png'

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
    <div className="w-full bg-black text-white px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-gray-600 rounded full p-5">
      {/* Left Text Content */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Bringing Unparalleled Expertise To Solve <br />
          The Industry&apos;s Most Pressing Challenges.
        </h1>

        <ul className="mt-6 space-y-4 text-gray-300">
          <li className="flex items-center gap-3">
            <span className="text-green-400 text-xl">✔</span>
            Deep understanding of your success factors.
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-400 text-xl">✔</span>
            Familiarity with the global landscape.
          </li>
          <li className="flex items-center gap-3">
            <span className="text-green-400 text-xl">✔</span>
            Aligned to your technology roadmap.
          </li>
        </ul>

        <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition">
          Explore Our Expertise
        </button>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-green-400 text-2xl font-bold">20Mn+</h2>
            <p className="text-gray-400 text-sm mt-1">
              Vehicles on road with KPIT SW
            </p>
          </div>
          <div>
            <h2 className="text-green-400 text-2xl font-bold">700+</h2>
            <p className="text-gray-400 text-sm mt-1">
              Production Programs Experience
            </p>
          </div>
          <div>
            <h2 className="text-green-400 text-2xl font-bold">10+</h2>
            <p className="text-gray-400 text-sm mt-1">
              Ecosystem partnerships from chip to cloud domain
            </p>
          </div>
          <div>
            <h2 className="text-green-400 text-2xl font-bold">80+</h2>
            <p className="text-gray-400 text-sm mt-1">
              Ready Platforms, Tools & Accelerators
            </p>
          </div>
        </div>
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
  );
};

export default Car;
