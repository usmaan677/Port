import React from 'react';
import myPhoto from '/Pfp.png';
import DecryptedText from '../reactbits/DecryptedText';


const Home = ({theme}) => {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"} min-h-screen`}>
        <section className = "flex items-center justify-center gap-1 md:gap-30 p-10 max-w-6xl mx-auto flex-col md:flex-row text-center md:text-left mb-16">
            <div className = "w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-md self-center ">
                <img src = {myPhoto} alt  ="Usmaan Sayed" className = "border-2 border-white rounded-full object-cover w-full h-full "/>
            </div>
            <div className = "text-3xl md:text-5xl font-extrabold max-w-md break-words leading-tight self-center ">
                <div style={{  }}>
                    <DecryptedText
                    text="Hi my name is Usmaan Sayed and I am an aspiring Software Engineer"
                    animateOn="view"
                    revealDirection="center"
                    />
                </div>

                {/* <h1 className = "text-4xl font-extrabold">Hello I'm Usmaan Sayed!</h1> */}
            </div>
        </section>
       
      </div>
  )
};

export default Home;
