import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import service1 from '../assets/service_1.webp';
import service2 from '../assets/service_2.webp';
import service3 from '../assets/service_3.webp';
import service4 from '../assets/service_4.webp';

const services = [
  {
    key: 'career',
    title: "Your <span style='color: #EE3457;'>Courses and Career Counseling</span>",
    image: service1,
    description:
      "VXL provides excellent guidance on navigating the vast landscape of options to find the one that aligns best with your academic and career aspirations, and your financial capabilities.<br/><br/>Our guidance is tailored to empower you with the knowledge and resources needed to make informed decisions ensuring that your educational journey is fulfilling and successful.",
  },
  {
    key: 'university',
    title: "Your <span style='color: #EE3457;'>University Applications</span>",
    image: service2,
    description:
      "Our meticulous approach to document gathering in managing applications is designed to maximize your chances of excelling in achieving your dreams. We leave no stone unturned to ensure your application is in impeccable order, providing you with the best shot at securing admission to your desired academic institution.",
  },
  {
    key: 'visa',
    title: "Your <span style='color: #EE3457;'>Visa Applications</span>",
    image: service3,
    description:
      "The VXL team has built a solid reputation with a 99% success rate – and that’s no easy feat. We do our due diligence to make sure that your application is successful, and we provide guidance for visit visas, student visas and even subsequent-entrant/dependent visas. For a full list of the supported countries and the visa categories, please click here.",
  },
  {
    key: 'ielts',
    title: "<span style='color: #EE3457;'>IELTS and PTE</span> for You",
    image: service4,
    description:
      "VXL is an authorized registration centre for British Council IELTS – and we provide training sessions specifically tailored to you. Convenient timing, easy to reach location, virtual learning portal access, face-to-face personalized coaching sessions are just some of the reasons which make IELTS with VXL such an easy decision. Please click here for more information.",
  },
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

const Services = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 650, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-10 px-4 bg-white text-center">
      <h2 className="text-4xl md:text-6xl text-primary font-Poppins mb-4">
        How we help you <span className="text-secondary">Excel</span>
      </h2>
      <p className="max-w-4xl mx-auto text-primary mb-2 text-sm md:text-base">
        VXL is your one-stop partner during every step of your educational journey.
      </p>
      <p className="max-w-4xl mx-auto text-primary mb-2 text-sm md:text-base">
        We guide you with everything from the eligibility assessments to course and university selections, prepare you for IELTS/PTE success, streamline applications and simplify visa processes with expert assistance, and even provide on-shore assistance – all so that you can focus on realizing your dreams.
      </p>
      <p className="max-w-4xl mx-auto text-primary mb-10 text-sm md:text-base">
        We also have a ready-to-use network to assist in ticket bookings and accommodation.
      </p>

      <Slider ref={sliderRef} {...sliderSettings}>
        {services.map((service, index) => (
          <div key={index} className="px-5">
            <div className="bg-white border border-shadow rounded-xl shadow-md overflow-hidden flex flex-col h-[500px]">
              <img
                src={service.image}
                alt={service.key}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col justify-between flex-grow overflow-hidden">
                <div
                  className="text-xl text-center font-bold text-primary mb-2"
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />
                <div
                  className="text-sm text-primary text-justify mb-4 overflow-y-auto"
                  style={{ maxHeight: '200px' }}
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
                {/* Accessible only if in view */}
                <button
                  onClick={showPopup}
                  tabIndex={index === currentSlide ? 0 : -1}
                  aria-hidden={index !== currentSlide}
                  className="mt-auto inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full hover:bg-[#103956] transition text-sm w-fit"
                >
                  Book my free session
                  <span className="bg-white text-primary rounded-full w-7 h-7 flex items-center justify-center">
                    <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
