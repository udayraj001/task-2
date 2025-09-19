import React from "react";

// Import your images (replace with correct paths)
import carImage from "../../assets/3d/car-2.png"; 
import softwareIcon from "../../assets/services/s-1.svg";
import virtualIcon from "../../assets/services/s-2.svg";
import diagnosticsIcon from "../../assets/services/s-3.svg";
import validationIcon from "../../assets/services/s-4.svg";
// import arrowIcon from "../../assets/services/arrow.svg";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Software & Systems Integration",
      icon: softwareIcon,
      link: "#",
    },
    {
      id: 2,
      title: "Virtual Engineering",
      icon: virtualIcon,
      link: "#",
    },
    {
      id: 3,
      title: "[iDART]",
      icon: diagnosticsIcon,
      link: "#",
    },
    {
      id: 4,
      title: "Validation",
      icon: validationIcon,
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen bg-white px-6 lg:px-20 py-12">
      {/* Left Car Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={carImage}
          alt="Car"
          className="w-full max-w-xl lg:max-w-3xl object-contain"
        />
      </div>

      {/* Right Services List */}
      <div className="flex-1 flex flex-col gap-6 w-full max-w-lg mt-10 lg:mt-0">
        {services.map((service) => (
          <a
            key={service.id}
            href={service.link}
            className="flex items-center justify-between bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition"
          >
            {/* Left Icon + Text */}
            <div className="flex items-center gap-4">
              {/* Green Background with Icon */}
              <div className="w-19 h-19 rounded-lg flex items-center justify-center ">
                <img src={service.icon} alt={service.title} className="w-19 h-19" />
              </div>
              {/* Title */}
              <h3 className="text-base md:text-lg font-bold text-gray-900">
                {service.title}
              </h3>
            </div>

            {/* Arrow */}
            {/* <img src={arrowIcon} alt="Arrow" className="w-4 h-4" /> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
