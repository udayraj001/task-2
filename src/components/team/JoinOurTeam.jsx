import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react"; // icons

// Example employee data
const testimonials = [
  {
    id: 1,
    name: "Suraj Sutar",
    role: "Technical Lead, KPIT (India)",
    quote:
      "At KPIT, all it takes is showing your aspirations, and everything you need is placed right in front of you.",
    img: "/employee1.jpg", // replace with actual path
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Software Engineer, KPIT (Germany)",
    quote:
      "Working at KPIT has given me the chance to innovate daily while being part of a global family.",
    img: "/employee2.jpg",
  },
];

const JoinOurTeam = () => {
  const [index, setIndex] = useState(0);

  // Auto flip every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
      {/* LEFT CIRCLE CARD */}
      <div className="flex-1 flex justify-center">
        <motion.div
          key={index}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 1.7 }}
          className="relative w-80 h-80 rounded-full bg-black text-white flex flex-col items-center justify-center p-6 text-center shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={testimonials[index].img}
            alt={testimonials[index].name}
            className="w-20 h-20 rounded-full border-4 border-green-500 object-cover absolute -top-10 left-1/2 -translate-x-1/2"
          />
          <h3 className="mt-12 text-green-500 font-semibold">
            {testimonials[index].name}
          </h3>
          <p className="text-sm">{testimonials[index].role}</p>
          <p className="mt-4 text-sm font-medium leading-relaxed">
            {testimonials[index].quote}
          </p>
        </motion.div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 space-y-8">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-600 w-fit">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          We’re hiring self-motivated people to join the team
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Join Our Team
        </h2>
        <p className="text-gray-600 max-w-lg">
          Transform Mobility with Us: If you have a passion for pioneering new
          frontiers in transportation, we invite you to join our team
        </p>

        {/* Overview Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition flex items-center gap-2">
          View Overview →
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* College Graduates */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <div className="bg-green-200 text-green-700 p-3 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-bold text-lg">College Graduates</h3>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Kick-start your career with the pioneers of mobility technology
              and shape the future of transportation
            </p>
            <a
              href="#"
              className="text-purple-600 font-semibold mt-4 inline-block"
            >
              Know More →
            </a>
          </div>

          {/* Experienced Professionals */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <div className="bg-green-200 text-green-700 p-3 rounded-lg">
                <Briefcase size={24} />
              </div>
              <h3 className="font-bold text-lg">Experienced Professionals</h3>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Take your expertise to the next gear with cutting-edge projects
              and limitless growth opportunities in the fast growing mobility
              industry.
            </p>
            <a
              href="#"
              className="text-purple-600 font-semibold mt-4 inline-block"
            >
              Know More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
