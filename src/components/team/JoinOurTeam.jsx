import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import college from "../../assets/team/c-1.svg"
import experience from "../../assets/team/e-1.svg"

const testimonials = [
  {
    name: "Suraj Sutar",
    role: "Technical Lead, KPIT (India)",
    img: "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/d-team-img-4.png",
    quote:
      "At KPIT, all it takes is showing your aspirations, and everything you need is placed right in front of you.",
  },
  {
    name: "Gaspar",
    role: "Engineer, KPIT (Germany)",
    img: "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/d-team-img-1.png",
    quote:
      "I chose KPIT for its pioneering vision in mobility and global collaboration prospects.",
  },
  {
    name: "Salvatore",
    role: "Manager, KPIT (Germany)",
    img: "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/d-team-img-2.png",
    quote:
      "The most thrilling moment is seeing your work come to life in a car, and spotting that car on the streets fills you with pride.",
  },
  {
    name: "Santiago Canova",
    role: "KPIT (US)",
    img: "https://www.kpit.com/wp-content/themes/kpit-wp/assets/img/d-team-img-3.png",
    quote:
      "I joined KPIT for its industry-leading innovation and opportunities to work with top automotive leaders.",
  },
];

const JoinOurTeam = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:w-full py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
   {/* LEFT CIRCLE CARD WITH PARTICLE BACKGROUND */}
<div className="flex-1 flex justify-center relative">
  {/* Centered Particle Background */}
  <motion.div
    initial={{ rotate: 0 }}
    animate={{ rotate: 180 }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute inset-0 flex justify-center items-center"
  >
    <div
      className="w-[420px] h-[420px] rounded-full"
      style={{
        backgroundImage:
          "radial-gradient(circle, #22c55e 2px, transparent 2px)",
        backgroundSize: "20px 20px",
      }}
    />
  </motion.div>

  {/* Testimonial Card */}
  <motion.div
    key={index}
    initial={{ rotateY: 0 }}
    animate={{ rotateY: 360 }}
    transition={{ duration: 1.7 }}
    className="relative w-70 h-70 rounded-full bg-[#212121] text-white flex flex-col items-center justify-center p-6 text-center shadow-xl z-10"
    style={{ backfaceVisibility: "hidden" }}
  >
    <img
      src={testimonials[index].img}
      alt={testimonials[index].name}
      className="w-20 h-20 rounded-full border-4 border-[#b0ff44] object-cover absolute -top-10 left-1/2 -translate-x-1/2"
    />
    <h3 className="mt-12 text-[#b0ff44] font-semibold">
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
        <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-600 w-fit">
          <span className="w-2 h-2 bg-[#b0ff44] rounded-full"></span>
          We’re hiring self-motivated people to join the team
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Join Our Team
        </h2>
        <p className="text-gray-600 max-w-lg">
          Transform Mobility with Us: If you have a passion for pioneering new
          frontiers in transportation, we invite you to join our team
        </p>

        <button className="bg-[#6a4be7] hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition flex items-center gap-2">
          View Overview →
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <div className="text-[b0ff44] p-3 rounded-lg">
               <img src={college}/>
              </div>
              <h3 className="font-bold text-lg">College Graduates</h3>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Kick-start your career with the pioneers of mobility technology
              and shape the future of transportation
            </p>
            <a href="#" className="text-[#6a4be7] font-semibold mt-4 inline-block">
              Know More →
            </a>
          </div>

          <div className="border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <div className="  p-3 rounded-lg">
              <img src={experience}/>
              </div>
              <h3 className="font-bold text-lg">Experienced Professionals</h3>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Take your expertise to the next gear with cutting-edge projects
              and limitless growth opportunities in the fast growing mobility
              industry.
            </p>
            <a href="#" className="text-[#6a4be7] font-semibold mt-4 inline-block">
              Know More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
