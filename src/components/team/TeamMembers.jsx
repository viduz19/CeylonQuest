import React from "react";
import Slider from "react-slick";
import team1 from '../../assets/staff/team1.webp';
import team2 from '../../assets/staff/team2.webp';
import team3 from '../../assets/staff/team3.webp';
import team4 from '../../assets/staff/team4.webp';
import team5 from '../../assets/staff/team5.webp';
import team6 from '../../assets/staff/team6.webp';
import team7 from '../../assets/staff/team7.webp';
import team8 from '../../assets/staff/team8.webp';
import team9 from '../../assets/staff/team9.webp';

const TeamSection = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

const staffData = [
  {
    name: "Ayodhya Kodagoda",
    title: (
      <>
        Chief Operating Officer (Global)
        <br />
        Country Director - Sri Lanka
      </>
    ),
    image: team1,
    linkedin: "https://www.linkedin.com/in/aakodagoda/",
  },
  {
    name: "Nihal Kodagoda",
    title: "Chief Financial Officer",
    image: team2,
    linkedin: "https://www.linkedin.com/in/nihal-kodagoda-b7513813b/",
  },
  {
    name: "Damayanthi Wijenayake",
    title: "Head of Admissions - VXL Education Sri Lanka",
    image: team3,
    linkedin: "https://www.linkedin.com/in/damayanthi-wijenayaka",
  },
  {
    name: "Omar Anees",
    title: "Head of Visas - VXL Education Sri Lanka",
    image: team4,
    linkedin: "https://www.linkedin.com/in/omar-anees-16b0a4119",
  },
  {
    name: "Aadithya Sahashri",
    title: "Student Counsellor - VXL Education Sri Lanka",
    image: team5,
    linkedin: "http://linkedin.com/in/aadithya-sahashri-326395205",
  },
  {
    name: "Chanodh Jayasinghearachchi",
    title: "Visa Counsellor - VXL Education Sri Lanka",
    image: team6,
    linkedin: "http://linkedin.com/in/chanodh-jayasinghearachchi",
  },
  {
    name: "Iroshini Rupasinghe",
    title: "Chief Operating Officer (Global) / Country Director - Sri Lanka",
    image: team7,
    linkedin: "https://www.linkedin.com/in/iroshini-rupasinghe-11aa28217",
  },
  {
    name: "Dulari Dakshima",
    title: "Chief Operating Officer (Global) / Country Director - Sri Lanka",
    image: team8,
    linkedin: "https://www.linkedin.com/in/dulari-dakshima-81a14228b",
  },
  {
    name: "Malinda Bambaradeniya",
    title: "Chief Operating Officer (Global) / Country Director - Sri Lanka",
    image: team9,
    linkedin: "http://linkedin.com/in/malinda-bambaradeniya-456bz1",
  },
];

  return (
    <div className="py-12 px-4 bg-white text-center ">
      <h2 className="text-4xl md:text-6xl font-Poppins text-primary mb-5">
        <span className="text-secondary">VXL</span> Education Sri Lanka  
      </h2>

{/* First row: show two cards side by side *************************************************************/}
      <div className="flex flex-wrap justify-center  gap-6 mb-10">
        {staffData.slice(0, 2).map((staff, index) => (
          <div
            key={index}
            className="w-[280px] h-[280px] bg-white shadow-xl  rounded-xl p-6 flex flex-col items-center justify-start"
          >
            <a
              href={staff.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-cover bg-center mb-4"
              style={{ backgroundImage: `url(${staff.image})` }}
            ></a>
            <h5 className="text-primary font-base font-Poppins text-2xl">{staff.name}</h5>
            <p className="text-xs text-gray-600 mt-1 text-center leading-snug">
              {staff.title}
            </p>
          </div>
        ))}
      </div>

{/* Slider for remaining staff ************************************************************************/}
      <div className="max-w-7xl mx-auto px-2">
        <Slider {...sliderSettings}>
          {staffData.slice(2).map((staff, index) => (
            <div
              key={index}
              className="px-3 py-4 flex shadow-xl justify-center items-center"
            >
              <div className="w-[260px] h-[300px] bg-white shadow-xl rounded-xl p-6 flex flex-col items-center justify-start mx-auto">
                <a
                  href={staff.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url(${staff.image})` }}
                ></a>
                <h5 className="text-primary font-base font-Poppins text-2xl">
                  {staff.name}
                </h5>
                <p className="text-xs text-gray-600 mt-1 text-center leading-snug">
                  {staff.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamSection;
