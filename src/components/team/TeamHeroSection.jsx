import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import teamHeroBg from '../../assets/team_bg.webp';

const TeamHeroSection = () => {
  const scrollToTeam = () => {
    const section = document.getElementById("team");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 bg-white">
      <div className="mt-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 font-sans mb-5">
        
{/* Left Section *****************************************************************/}
        <div className="w-full lg:w-1/2 text-left z-10">
          <p className="text-secondary mb-2">VXL Education Sri Lanka</p>
          <h1 className="md:text-6xl text-6xl leading-tight text-primary">
            The <span className="text-secondary">A</span> Team <br />
          </h1>
          <p className="text-base text-primary mt-6">
            Want to study abroad? <span className="text-secondary">Having trouble deciding where or how?</span>
            <br /> VXL is ready to help you along every step of your study abroad journey. Meet the team behind the scenes.
          </p>

          <button
            onClick={scrollToTeam}
            className="mt-8 inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full hover:bg-[#103956] transition"
          >
            Who is VXL
            <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center">
              <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            </span>
          </button>
        </div>

{/* Right Section *********************************************************************************/}
        <div className="w-full lg:w-1/2 h-[400px] relative hidden md:block">
          <img
            src={teamHeroBg}
            alt="TeamHero-bg"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamHeroSection;
