import React from 'react';
import ParticleAnimation from './ParticleAnimation';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden mt-10">
      {/* Text Content Div */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-14">
        {/* News Banner */}
        <div className="flex justify-center mb-5">
          <div className="bg-[#FFFFFF] rounded-full px-5 py-2 shadow-sm  flex items-center space-x-1">
            <div className="w-3 h-3 bg-[#B0FF44] rounded-full"></div>
            <span className="text-[7px] text-gray-700 md:text-[12px] md:font-semibold tracking-tight">
              JSW Motors & KPIT Technologies forge strategic collaboration
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center">
          <h1 className="font-inter text-3xl md:text-[76px] font-bold text-gray-900 leading-tight  tracking-tight">
            Shaping The Future
            <br />
            <span className="font-inter text-gray-800 tracking-tight">Of Mobility</span>
          </h1>

          <p className="text-sm md:text-[18px] text-[#464646] max-w-4xl mx-auto leading-relaxed">
            We are reimagining mobility for creating a cleaner, smarter and safer world.
          </p>
        </div>
      </div>

      {/* Animation Div - Separate from text */}
      <div className="relative w-full">
        <ParticleAnimation />
      </div>
    </section>
  );
};

export default HeroSection;
