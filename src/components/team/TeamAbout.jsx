import React from 'react';
import teamAboutBg from '../../assets/t_about_bg.webp';

const TeamAbout = () => {
  return (
    <div className="pt-0 bg-white">
      <div className="mt-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 font-sans mb-5">
        
{/* Image on the Left */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] relative">
          <img
            src={teamAboutBg}
            alt="Team Hero Background"
            className="absolute top-0 left-0 w-full h-full object-cover "
          />
        </div>

{/* Text on the Right */}
        <div className="w-full lg:w-1/2 text-left z-10">
          <p className="text-2xl text-primary mt-6">
            "Coming together is the beginning;​ staying together is progress;
            working ​together is success."
            <br />
            <span className="text-secondary">- Henry Ford</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default TeamAbout;
