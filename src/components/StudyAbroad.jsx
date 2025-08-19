import React from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


import study1 from '../assets/food.webp';
import study2 from '../assets/food.webp';

const onshoreServices = [
  {
    key: "Insurance",
    title: "Your <span style='color: #EE3457;'>OSHC/Insurance</span>",
    image: study1,
    description:
      "The student health insurance process is tricky as is – this is why we have partnered with two of the largest OSHC providers to help you access expert guidance plus exclusive access to the best rates and features to ensure the best of health and well-being for you during your academic journey.",
  },
  {
    key: "Accommodation",
    title: "Your <span style='color: #EE3457;'>Accommodation</span>",
    image: study2,
    description:
      "VXL is committed to providing the most comprehensive and long-term support for you. This is why we have partnered with third parties to facilitate access to a network of properties spanning across Australia. We are dedicated to ensuring that your accommodation needs are met with excellence throughout your academic journey.",
  },
];

const showPopup = () => {
  Swal.fire({
    title: "Book Appointment",
    text: "Choose a location to proceed:",
    showCloseButton: true,
    confirmButtonText: "Nugegoda",
    showDenyButton: true,
    denyButtonText: "Galle",
    customClass: {
      confirmButton: "purple-button",
      denyButton: "purple-button",
      closeButton: "cancel-button",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      handleOptionClick(
        "https://outlook.office365.com/owa/calendar/Consultations@bmweducation.lk/bookings/"
      );
    } else if (result.isDenied) {
      handleOptionClick(
        "https://outlook.office365.com/owa/calendar/VXLEducationSriLankaGalle@vxl.lk/bookings/"
      );
    }
  });
};

const handleOptionClick = (url) => {
  window.open(url, '_blank');
};

const StudyAbroad = () => {
  return (
    <div className="py-10 px-6 lg:px-24 bg-white text-primary">
      <h2 className="text-4xl md:text-6xl font-Poppins text-center mb-12">
        How you <span className="text-secondary">Excel</span> Onshore
      </h2>

      <div className="flex flex-col gap-16">
        {onshoreServices.map((service, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-start gap-10">

{/* Image *****************************************************************************/}
            <div className="flex-shrink-0 w-full lg:w-[500px] h-[300px]">
              <img
                src={service.image}
                alt={service.key}
                className="w-full h-full object-contain rounded-md"
              />
            </div>

{/* Content **************************************************************************/}
            <div className="flex-1">
              <h3
                className="text-xl md:text-2xl font-Poppins mb-3"
                dangerouslySetInnerHTML={{ __html: service.title }}
              />
              <p className="mb-6 text-base font-Poppins leading-relaxed">
                {service.description}
              </p>
              <button
                onClick={showPopup}
                className="inline-flex items-center gap-2 font-Poppins bg-primary text-white px-6 py-3 rounded-full hover:bg-[#103956] transition text-sm"
              >
                Book my free session
                <span className="bg-white text-[#18548a] rounded-full w-6 h-6 flex items-center justify-center">
                  <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyAbroad;
