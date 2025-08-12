import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const TeamIntro = () => {
  return (
    <div className="px-4 bg-white text-center py-10 ">
      <h2 className="text-4xl md:text-6xl text-primary font-Poppins  mb-4">
        Meet the Team
      </h2>

      <p className="max-w-4xl mx-auto text-primary mb-6 text-base md:text-xl leading-relaxed">
        We excel in providing exceptional assistance through all aspects of the student journey —
        from gaining a thorough understanding of career outcomes linked to the courses they select,
        entry requirements and how to meet them, to collecting and presenting the right information
        for applications and, most importantly, preparing for life in a new country.
      </p>
     <Link to="/team" onClick={() => window.scrollTo(0, 0)}>
  <button className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full hover:bg-[#103956] transition duration-300 mb-10">
    Meet the Team
    <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center">
      <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
    </span>
  </button>
</Link>
    </div>
  );
};

export default TeamIntro;
