import React, {useEffect} from 'react';
import myPhoto from '/Pfp.png';
import DecryptedText from '../reactbits/DecryptedText';
import ScrollVelocity from '../reactbits/ScrollVelocity';
import ExperienceSection from '../components/ExperienceSection.jsx';
import {useLocation} from 'react-router-dom';


const Home = ({theme, experienceRef}) => {
  const location = useLocation();
  useEffect(() =>{
    if (location.hash === '#experience'){
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  
  return (
    <div className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} min-h-screen`}>
        <section className = "flex items-center justify-center gap-1 md:gap-30 p-10 max-w-6xl mx-auto flex-col md:flex-row text-center md:text-left mb-16 ">
            <div className = "w-60 h-60 md:w-100 md:h-100 rounded-full overflow-hidden shadow-md self-center ">
                <img src = {myPhoto} alt  ="Usmaan Sayed" className = "border-2 border-white rounded-full object-cover w-full h-full "/>
            </div>
            <div className = "text-3xl md:text-5xl font-extrabold max-w-md break-words leading-tight self-center ">
                <div style={{  }}>
                    <DecryptedText
                        words={['Usmaan Sayed', 'Software Engineer', 'Creative Thinker']}
                        className="text-6xl font-bold"
                        animateOn="hover"
                        />
                    {/* <DecryptedText
                    text="Hi my name is Usmaan Sayed and I am an aspiring Software Engineer"
                    animateOn="view"
                    revealDirection="center"
                    /> */}
                </div>

                
            </div>
        </section>
        
        <section>
            <div className = 'pb-20'>
                <h2 className=' px-10 md:px-40 pb-10 text-4xl md:text-4xl '>About Me</h2>
                <p className = ' mx-10 md:mx-40 md:text-2xl md:mr-[50vh]'>Hey! I'm Usmaan Sayed, a passionate student majoring in computer science always interested in learning new technologies and building new projects.
                    However, there is also much more to me than just coding. I love basketball, lego, robotics, and spedning time with friends!
                </p>
            </div>
            <div>
                {/* <ScrollVelocity
                    texts={['Experience', 'Experience']} 
                    velocity={100} 
                    className="custom-scroll-text text-2xl leading-tight md:text-6xl lg:text-8xl"
                    /> */}
            </div>
        </section>
        <ExperienceSection  ref= {experienceRef} theme={theme} />
      </div>
  )
};

export default Home;
