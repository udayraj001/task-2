import React from "react";
import kpImg1 from "../../assets/testimonial/t-3.png"; // replace with your actual image paths
import kpImg2 from "../../assets/testimonial/t-2.png";
import kpImg3 from "../../assets/testimonial/t-1.jpg";

const Testimonials = () => {
  const cards = [
    {
      image: kpImg1,
      title: "KPIT brings the Power of Software Integration to the Mobility Ecosystem",
      link: "#",
    },
    {
      image: kpImg2,
      title: "KPIT to accelerate Honda’s transformation towards Software-Defined Mobility",
      link: "#",
    },
    {
      image: kpImg3,
      title: "Renault Group selects KPIT as a strategic technology partner for next generation Software-Defined Vehicle(SDV) program",
      link: "#",
    },
  ];

  return (
    <div className="w-full px-6 py-10 md:px-28 md:mb-36">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
          >
            {/* Image */}
            <img
              src={card.image}
              alt="testimonial"
              className="w-full h-56 object-cover p-2 rounded-2xl"
            />

            {/* Text Section */}
            <div className="p-5">
              <p className="text-[#212121] font-medium">
                {card.title}
              </p>

              <a
                href={card.link}
                className="mt-4 inline-block text-[#6A0DAD] font-medium hover:underline"
              >
                Read More <span className="ml-1">➜</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
