import React from "react";
import { ChevronRight } from "lucide-react";
import Marquee from "react-fast-marquee";

// Card images
import img1 from "../../assets/cards/card-1.jpg";
import img2 from "../../assets/cards/card-2.png";
import img3 from "../../assets/cards/card-3.png";

// Logos
import logo1 from "../../assets/logo/renault.svg";
import logo2 from "../../assets/logo/bmw.svg";
import logo3 from "../../assets/logo/honda.svg";
import logo4 from "../../assets/logo/cummins.svg";
import logo5 from "../../assets/logo/vw.svg";
import logo6 from "../../assets/logo/partner-11.svg";
import logo7 from "../../assets/logo/jaguar.svg";
import logo8 from "../../assets/logo/mercedes.svg";
import logo9 from "../../assets/logo/gm.svg";
import logo10 from "../../assets/logo/paccar.svg";
import logo11 from "../../assets/logo/partner-6.svg";

const Clients = () => {
  const cards = [
    {
      id: 1,
      image: img1,
      title: "KPIT's New Technology Center in Sweden unlocks Mobility Innovation",
      link: "Read More",
    },
    {
      id: 2,
      image: img2,
      title: "KPIT collaborates with Mercedes-Benz Research and Development India",
      link: "Read More",
    },
    {
      id: 3,
      image: img3,
      title: "Chairman's message",
      link: "Read More",
    },
  ];

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11,
  ];

  return (
    <div className="w-full bg-gray-50 py-12 overflow-x-hidden">
      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-[5px] sm:px-4 md:px-6 lg:px-8 mb-12">
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[85%] sm:min-w-[60%] md:min-w-0 snap-start rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white text-gray-800"
            >
              <div className="flex flex-col md:flex-row items-start">
                {/* Image */}
                <div className="w-full md:w-36 h-48 md:h-auto flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text Content */}
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-base sm:text-lg font-semibold leading-snug mb-2">
                    {card.title}
                  </h3>
                  <button className="group flex items-center text-sm font-medium self-start text-[#6A4BE7] hover:text-purple-700 transition">
                    {card.link}
                    <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted By Heading */}
      <div className="text-center mt-16 mb-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Trusted By Mobility
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Leaders Worldwide
        </h3>
      </div>

      {/* Logo Marquee */}
      <div className="bg-white py-4 overflow-x-hidden w-full">
        <div className="max-w-screen mx-auto">
          <Marquee
            gradient={false}
            speed={40}
            className="flex items-center w-full"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-4 sm:px-6 py-2"
              >
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-10 sm:h-14 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Clients;
