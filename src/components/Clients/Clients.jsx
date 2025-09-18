import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Marquee from "react-fast-marquee";

// ✅ Import card images
import img1 from "../../assets/cards/card-1.jpg";
import img2 from "../../assets/cards/card-2.png";
import img3 from "../../assets/cards/card-3.png";

// ✅ Import logo images
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
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="w-full bg-gray-50 py-12">

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mb-28">
        
        {/* Desktop Cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-white text-gray-800"
            >
              <div className="flex h-32">
                <div className="w-32 flex-shrink-0 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <h3 className="text-sm font-semibold leading-tight mb-2">
                    {card.title}
                  </h3>
                  <button className="group flex items-center text-sm font-medium self-start text-[#6A4BE7] hover:text-purple-700 transition-colors duration-200">
                    {card.link}
                    <ChevronRight className="ml-1 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="w-full flex-shrink-0 px-4 bg-white text-gray-800"
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <div className="flex h-32">
                      <div className="w-32 flex-shrink-0 overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4 flex flex-col justify-between">
                        <h3 className="text-sm font-semibold leading-tight mb-2">
                          {card.title}
                        </h3>
                        <button className="group flex items-center text-sm font-medium self-start text-blue-400 hover:text-blue-300 transition-colors duration-200">
                          {card.link}
                          <ChevronRight className="ml-1 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Trusted By Mobility
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
          Leaders Worldwide
        </h3>
      </div>

      {/* Logo Marquee */}
      <div className="relative overflow-hidden bg-white">
        <Marquee gradient={false} speed={50} className="flex items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ padding: "14px" }}
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-12 md:h-24 object-contain grayscale hover:grayscale-0 transition duration-300 md:pl-1.5"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
