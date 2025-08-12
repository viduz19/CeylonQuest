import React from 'react';
import profile from '../assets/logo_c.png';

const About = () => {
  return (
    <div className=" text-primary py-5 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
{/* Left Section  ***********************************************************************/}
        <div className="w-full md:w-1/2 justify-center md:justify-start relative hidden md:block">
          {/* <div className="rounded-full overflow-hidden "> */}
              <div className="w-[380px] h-[380px] md:w-[380px] md:h-[380px]  overflow-hidden ">
            <img
              src={profile}
              alt="Ayodhya Kodagoda"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

{/* Right Section  ************************************************************************/}
        <div className="w-full  text-left md:text-left font-Poppins">
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Your Journey Through the Island of Ceylon
          </h1>
          <p className="mb-4 text-base">
            {/* At VXL Education Sri Lanka, we put your dreams first. We want to see you excel in turning your migration and higher studies dreams into reality.
          </p>
          <p className="mb-4 text-base">
            With personalized guidance for accessing top universities, tailored solutions and exceptional visa and counselling support from the VXL team, your success is our promise.
          </p>
          <p className="mb-4 text-base">
            Our 99% visa success rate is a testament to our brand promise.
          </p>
          <p className="mt-6 text-white text-xl">
            Ayodhya Kodagoda
          </p>
          <p>Global COO</p> */}
          At CeylonQuest, we are passionate about unveiling the true essence of Sri Lanka — an island rich in culture, history, and breathtaking landscapes. From the tranquil shores of the south coast to the lush highlands of the hill country, our mission is to guide travelers through authentic, immersive experiences.

        We believe travel is more than just sightseeing — it's about storytelling, connection, and discovery. Whether you're a solo explorer, a nature enthusiast, or a cultural seeker, CeylonQuest curates every journey with care, local insight, and a deep love for the island we call home.

        Let us be your guide on this unforgettable quest across the pearl of the Indian Ocean.</p>
        </div>

      </div>
    </div>
  );
};

export default About;
