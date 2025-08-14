import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import GoogleReview from '../components/GoogleReview';
import History from '../components/History';
import Services from '../components/Services';
import StudyAbroad from '../components/StudyAbroad';
import PartnersSection from '../components/PartnersSection';
// import FormSection from '../components/FormSection';
import TeamIntro from '../components/TeamIntro';
import Footer from '../components/Footer';




const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Services/>
       <GoogleReview />
      
      {/* <div id="global-presence"><History /></div>
      <GoogleReview />
      <div id="visa-services"><Services /></div>
      <div id="study-abroad"><StudyAbroad /></div>
      <div id="global-partners"><PartnersSection /></div> */}
      {/* <FormSection /> */}
      {/* <TeamIntro /> */}
      <div id="contact"><Footer /></div>
    </div>
  );
};

export default Home;
