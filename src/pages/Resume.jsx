import React from 'react';

const Resume = ({theme}) => {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} min-h-screen`}>
        <div className = "p-10">
            <h1 className = "text-center font-bold pb-10 text-4xl"> My Resume, feel free to reach out!</h1>
            <iframe
                src = "/Usmaan_Resume-4.pdf"
                title="Usmaan's Resume"
                width = "100%"
                height = "800px"
                className = "border rounded shadow-md"
                />
        </div>
    </div>
  )
};

export default Resume;
