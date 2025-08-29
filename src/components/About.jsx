import profile from '../assets/logo_c.png'; 


const About = () => { 
  return ( 
  <div  id="about" className="text-primary py-5 px-6 md:px-10 lg:px-20 min-h-screen flex items-center justify-center"> 
  <div className="max-w-7xl flex flex-col md:flex-row items-center gap-10"> 
    {/* Left Section */} 
    <div className="w-full md:w-1/2 justify-center md:justify-start relative hidden md:flex"> 
    <div className="w-[380px] h-[380px] overflow-hidden rounded-full"> 
      <img src={profile} alt="CeylonQuest Logo" className="w-full h-full object-cover" /> 
      </div> 
      </div>
       {/* Right Section */} 
      <div className="w-full text-center md:text-left font-Poppins">
         <h1 className="text-4xl md:text-6xl text-secondary mb-6"> Your Journey Through the Island of Ceylon 

         </h1>
          <p className="mb-4 text-base text-primary leading-relaxed"> At CeylonQuest, we are passionate about unveiling the true 
            essence of Sri Lanka — an island rich in culture, history, and breathtaking landscapes. From the tranquil shores of the 
            south coast to the lush highlands of the hill country, our mission is to guide travelers through authentic, 
            immersive experiences. 
            </p> 
          <p className="mb-4 text-base text-primary leading-relaxed"> 
            We believe travel is more than just sightseeing — 
            it's about storytelling, connection, and discovery. Whether you're a solo explorer, 
            a nature enthusiast, or a cultural seeker, CeylonQuest curates every journey with care, 
            local insight, and a deep love for the island we call home. 
            </p> 
            
            <p className="mb-4 text-base text-primary leading-relaxed"> 
              Let us be your guide on this unforgettable quest across the pearl of the Indian Ocean. 
              </p> 
              </div> 
              </div> 
              </div> 
              ); 
            }; export default About;