import React from 'react';

const Resume = ({theme}) => {
  return (
    <div className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} min-h-screen`}>
        <div className = "p-10">
            <h1 className = "text-center font-bold pb-10 text-4xl"> My Resume, feel free to reach out!</h1>
            <div className = "w-full max-w-5xl mx-auto aspect-[3/4] sm:aspect-[4/3]">
                <iframe
                    src = "/Usmaan_Resume-4.pdf#view=Fit"
                    title="Usmaan's Resume"
                    width = "100%"
                    height = "800px"
                    className = "border rounded shadow-md"
                    />
            </div>
        </div>
    </div>
  )
};

export default Resume;
