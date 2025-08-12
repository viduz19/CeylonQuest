import React from 'react';

const FormSection = () => {
  return (
    <div className="flex flex-col w-full h-auto px-5 justify-center items-center m-0 select-none bg-white overflow-x-hidden py-12">

      <h1 className="text-4xl md:text-6xl text-center mb-16 text-primary  font-normal ">
        Services....
      </h1>

      <div className="flex flex-col md:flex-row w-full gap-4 g-white  ">
{/* Left Column ***************************************************/}

        <div className="w-full md:w-1/3 mb-4 ">
          <h2 className="text-center mb-3 text-primary text-2xl font-normal">
            Education Consultants
          </h2>
          <iframe 
            src="https://app.swiftams.com/leads/form/cfe8c9f8-4553-4585-b590-389df9781bda"
            width="100%"
            height="600px"
            className=" w-full border border-primary  border-opacity-30 bg-white"
            allowFullScreen
            title="Education Consultants"
            
          ></iframe>
        </div>

{/* Right Column *************************************************/}
        <div className="w-full md:w-2/3 mb-4">
          <h2 className="text-center mb-3 text-primary text-2xl font-normal">
            Search courses
          </h2>
          <iframe
            src="https://app.swiftams.com/course-finder/form/eb098116-a2b4-40f9-a4dd-afd066d0f28a"
            width="100%"
            height="600px"
            className="w-full border border-primary border-opacity-30 bg-white"
            allowFullScreen
            title="Search Courses"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
