import React, { useLayoutEffect } from 'react';
import TeamHeroSection from '../components/team/TeamHeroSection';
import TeamAbout from '../components/team/TeamAbout';
import TeamMembers from '../components/team/TeamMembers';
import TeamLastSection from '../components/team/TeamLastSection';
import Footer from '../components/Footer';

const Team = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Instantly reset scroll position before render
  }, []);

  return (
    <div>
      <TeamHeroSection />
      <TeamAbout />
      <div id="team">
        <TeamMembers />
      </div>
      <TeamLastSection />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Team;
