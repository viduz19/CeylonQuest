import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandsHoldingCircle,
  faUsers,
  faNewspaper,
  faGraduationCap,
  faLocationDot,
  faGlobe,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const trackrecords = [
  { image: faHandsHoldingCircle, subcontent: 'Establised', content: '2019' },
  { image: faUsers, subcontent: 'Satisfied Clients', content: '1234+' },
  { image: faNewspaper, subcontent: 'Visa Grants', content: '567+' },
  { image: faGraduationCap, subcontent: 'Scholarships', content: '89+' },
  { image: faLocationDot, subcontent: 'Global Offices', content: '14' },
  { image: faGlobe, subcontent: 'Global Locations', content: '4' },
];

const showPopup = () => {
  Swal.fire({
    title: 'Book Appointment',
    text: 'Choose a location to proceed:',
    showCloseButton: true,
    confirmButtonText: 'Nugegoda',
    showDenyButton: true,
    denyButtonText: 'Galle',
    customClass: {
      confirmButton: 'purple-button',
      denyButton: 'purple-button',
      closeButton: 'cancel-button',
    },
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(
        'https://outlook.office365.com/owa/calendar/Consultations@bmweducation.lk/bookings/',
        '_blank'
      );
    } else if (result.isDenied) {
      window.open(
        'https://outlook.office365.com/owa/calendar/VXLEducationSriLankaGalle@vxl.lk/bookings/',
        '_blank'
      );
    }
  });
};

const History = () => {
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
  const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 6,
      },
    },
     {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  return (
    <div className=" py-10 bg-white px-5 lg:px-20 text-center">
      <h2 className="text-4xl md:text-6xl text-primary font-Poppins mb-10">
        We <span className="text-secondary">Excel</span> around the world
      </h2>

      {/* Grid for lg+, Carousel for smaller screens */}
      {isLgScreen ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto mb-10">
          {trackrecords.map((record, index) => (
            <div
              key={index}
              className="border border-primary p-6 rounded-md flex flex-col items-center justify-center text-center bg-white h-[200px]"
            >
              <FontAwesomeIcon icon={record.image} className="text-primary  h-[50px]  text-4xl mb-4" />
              <h3 className="text-secondary text-3xl md:text-base font-Poppins mb-2">{record.content}</h3>
              <p className="text-primary text-base font-Poppins">{record.subcontent}</p>
            </div>
          ))}
        </div>
      ) : (
        <Slider {...sliderSettings}>
          {trackrecords.map((record, index) => (
            <div key={index} className="p-4">
              <div className="border border-primary p-6 rounded-md flex flex-col items-center justify-center text-center bg-white mx-2 h-[240px]">
                <FontAwesomeIcon icon={record.image} className="text-primary text-4xl mb-4" />
                <h3 className="text-secondary text-base font-Poppins-bold mb-1">{record.content}</h3>
                <p className="text-primary">{record.subcontent}</p>
              </div>
            </div>
          ))}
        </Slider>
      )}

      <p className="max-w-3xl mx-auto text-primary leading-relaxed text-base mb-6 mt-10">
        It took years for us to get where we are today. Over the years we have perfected our processes,
        checks and due-diligence to bring you a <span className="text-secondary">true experience of excellence</span>.
        <br />
        Talk to us today. <span className="text-secondary">You Excel with VXL.</span>
      </p>

      <button
        onClick={showPopup}
        className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full hover:bg-[#103956] transition"
      >
        Experience Excellence
        <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center">
          <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
        </span>
      </button>
    </div>
  );
};

export default History;
