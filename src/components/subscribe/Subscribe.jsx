import React from 'react';
import ParticleAnimation from '../ParticleAnimation';
import CommWave from '../CommWave';

const Subscribe = () => {
  return (
    <section className="bg-[#212121] relative min-h-screen overflow-hidden">
      {/* Text Content Div */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-14">
     

        {/* Main Heading */}
        <div className="text-center">
          <h1 className="font-inter text-3xl md:text-[50px] font-bold text-[#ffffff] leading-tight  tracking-tight">
            Reimagining
            <br />
            <span className="font-inter text-[#ffffff] tracking-tight">Mobility with YOU</span>
          </h1>

          <p className="text-sm md:text-[23px] text-[#c8c8c8] max-w-4xl mx-auto leading-relaxed">
Get the important updates from the world of mobility .          </p>
        </div>
             <button className="text-sm mt-6 ml-23 py-2 px-4 md:ml-[550px] justify-center items-center bg-[#6a4be7] text-white font-semibold rounded-full shadow-lg hover:bg-transparent border border-[#6a4be7] transition">
          Subscribe {">"}
        </button>

      </div>


  
        <ParticleAnimation />

    </section>
  );
};

export default Subscribe;
