import React, { useState } from 'react';

const ExperienceCard = ({ logo, company, dates, description, theme }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`${theme === "dark" ? "bg-gray-600" : "bg-gray-400"} relative group rounded-xl overflow-hidden shadow-lg`}
    >
      {/* Logo */}
      <img src={logo} alt={company} className="w-full h-48 object-contain p-4" />

      {/* Text Content */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{company}</h3>
        <p className="text-sm text-gray-200">{dates}</p>
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent text-white transition-opacity duration-300 flex flex-col justify-end p-4 gap-4
        ${showDetails ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} md:group-hover:opacity-100 md:pointer-events-auto`}
      >
        <p className="text-sm">{description}</p>

        {/* Show/Hide Button (visible only on mobile) */}
        <div className="md:hidden text-center">
          <button
            onClick={() => setShowDetails(false)}
            className="mt-2 px-4 py-1 rounded-full text-sm border bg-white text-gray-800 hover:bg-gray-100"
          >
            Hide Details
          </button>
        </div>
      </div>

      {/* View Details Button (only visible when overlay is hidden) */}
      {!showDetails && (
        <div className="md:hidden text-center pb-4">
          <button
            onClick={() => setShowDetails(true)}
            className="mt-2 px-4 py-1 rounded-full text-sm border bg-white text-gray-800 hover:bg-gray-100"
          >
            View Details
          </button>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
