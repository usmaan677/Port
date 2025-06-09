import React from 'react';

const Home = ({theme}) => {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"} min-h-screen`}>
        <div className="p-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p>This is some content that will also change color based on the selected theme.</p>
        </div>
       
      </div>
  )
};

export default Home;
