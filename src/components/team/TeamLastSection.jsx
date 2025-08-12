import React from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

const TeamLastSection = () => {
  return (
    <div className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-start gap-6 font-sans pb-16">
        <h2 className="text-4xl md:text-6xl text-primary font-Poppins">
          Want to be a part of <span className="text-[#fe3c66]">excellence?</span>
        </h2>

        <p className="max-w-4xl text-primary text-base md:text-base leading-relaxed">
          We are always on the lookout for people with the drive to{' '}
          <span className="text-[#fe3c66]">excel</span>. Talk to us about how you could be a part of
          ​one of Sri Lanka’s best study abroad/visa consulting teams!
        </p>

        <button
          onClick={showPopup}
          className="inline-flex items-center gap-2 font-Poppins bg-primary text-white px-6 py-3 rounded-full hover:bg-[#103956] transition text-sm"
        >
          Get in touch!
          <span className="bg-white text-[#18548a] rounded-full w-6 h-6 flex items-center justify-center">
            <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TeamLastSection;
