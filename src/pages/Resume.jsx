import React from 'react';

const Resume = ({ theme }) => {
  return (
    <div className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} min-h-screen`}>
      <div className="p-10">
        <h1 className="text-center font-bold pb-10 text-4xl">
          My Resume, feel free to reach out!
        </h1>

        {/* Responsive iframe wrapper */}
        <div className="w-full px-4 md:px-0 max-w-5xl mx-auto aspect-[1/1.414]"> {/* A4 aspect ratio */}
          <iframe
            src="/Usmaan_Resume-4.pdf#view=Fit"
            title="Usmaan's Resume"
            className="w-full h-full border rounded shadow-md"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
