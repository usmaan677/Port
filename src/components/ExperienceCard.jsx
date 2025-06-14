import React, { useState } from 'react';

const ExperienceCard = ({ logo, company, dates, description, theme, role, images }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className={`
          ${theme === "dark" ? "bg-gray-600" : "bg-gray-400"} 
          relative group rounded-xl overflow-hidden shadow-lg cursor-pointer
        `}
      >
        {/* Logo */}
        <img src={logo} alt={company} className="w-full h-48 object-contain p-4" />

        {/* Text Content */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold">{company}</h3>
          <p className="text-sm text-gray-200">{dates}</p>
        </div>

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
        >
          <p className="text-sm">{description}</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={`${theme === "dark" ? "bg-black/30" : "bg-white/30"} fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm`}
>
          <div className={`${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-100 text-black"} max-w-3xl w-full p-6 rounded-lg relative shadow-2xl`}
          >
            <button
              className="absolute cursor-pointer top-2 right-4 text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">{company}</h2>
            <p className="italic mb-4">{role}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${company} work ${index + 1}`}
                  className="w-full h-48 object-cover rounded"
                />
              ))}
            </div>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceCard;
