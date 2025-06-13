import React from 'react';

const Resume = ({theme}) => {
  return (
    <div className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} min-h-screen`}>
        <div className = "p-10">
            <h1 className = "text-center font-bold pb-4 text-4xl"> My Resume, feel free to reach out!</h1>
            <div className = "flex flex-col md:flex-row space-y-7 md:space-y-0 justify-center text-center p-5 md:p-10 text-xl md:text-2xl font-semibold">
                <a href = 'https://drive.google.com/file/d/14pdmVeCkJucrdUdb-EiVE0h1mvYcRGvZ/view?usp=sharing' className = "rounded-full border md:mr-2 p-3 hover:bg-gray-300 hover:text-gray-800 transition-colors duration-300">
                    View Full Resume Here
                </a>
                <a href = "/Usmaan_Resume-4.pdf" download = "Usmaan_Sayed_Resume.pdf" className = "rounded-full border md:ml-2 p-3 hover:bg-gray-300 hover:text-gray-800 transition-colors duration-300">
                    Download My Resume
                </a>
            </div>
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
