import React, { useEffect, useState } from 'react';
import myPhoto from '/Pfp.png';
import DecryptedText from '../reactbits/DecryptedText';
import ExperienceSection from '../components/ExperienceSection.jsx';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = ({ theme, experienceRef }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [expandedGroups, setExpandedGroups] = useState({});
  const toggleGroup = (cat) => setExpandedGroups((prev) => ({ ...prev, [cat]: !prev[cat] }));

  // Grouped technologies
  const techGroups = {
    Languages: ['Python','C++','JavaScript','HTML','CSS','AL Language'],
    Frontend: ['React.js','Next.js','Tailwind CSS','Framer Motion','UI/UX Design'],
    'Backend & APIs': ['Node.js','Express.js','REST APIs','Firebase','Firestore'],
    'Tools & Workflow': ['Git','GitHub','GitHub Desktop','npm','Visual Studio Code','Command Line','Puppeteer','PDF Processing'],
    Platforms: ['Vercel','Replit'],
    'Business Apps': ['Microsoft Dynamics 365 Business Central'],
    Concepts: ['Data Structures','Algorithms'],
  };

  // Accent dot colors for variety
  const dotColors = theme === 'dark'
    ? ['bg-blue-400','bg-purple-400','bg-pink-400','bg-emerald-400','bg-amber-400']
    : ['bg-blue-500','bg-purple-500','bg-pink-500','bg-emerald-500','bg-amber-500'];

  useEffect(() =>{
    if (location.hash === '#experience'){
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const handleViewWork = (e) => {
    e.preventDefault();
    if (experienceRef?.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', '#experience');
    } else {
      // Fallback to hash navigation
      window.location.hash = '#experience';
    }
  };

  const handleContact = (e) => {
    e.preventDefault();
    navigate('/contact');
  };
  
  return (
    <div className={`${theme === "dark" 
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" 
      : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800"} min-h-screen relative overflow-hidden touch-pan-y`}>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: 'paint' }}>
        <div className={`absolute top-20 left-10 w-72 h-72 ${theme === "dark" ? "bg-blue-600" : "bg-blue-400"} rounded-full mix-blend-multiply ${"blur-md md:blur-xl"} opacity-15 md:opacity-20 md:animate-pulse`} style={{ willChange: 'transform' }}></div>
        <div className={`absolute top-40 right-10 w-96 h-96 ${theme === "dark" ? "bg-purple-600" : "bg-purple-400"} rounded-full mix-blend-multiply ${"blur-md md:blur-xl"} opacity-15 md:opacity-20 md:animate-pulse delay-1000`} style={{ willChange: 'transform' }}></div>
        <div className={`absolute -bottom-32 left-1/2 w-80 h-80 ${theme === "dark" ? "bg-pink-600" : "bg-pink-400"} rounded-full mix-blend-multiply ${"blur-md md:blur-xl"} opacity-15 md:opacity-20 md:animate-pulse delay-500`} style={{ willChange: 'transform' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto mb-20 px-6 md:px-10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Text Column */}
          <div className="order-2 md:order-1 text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <div className="space-y-6">
              <div className="relative">
                <h1 className={`text-5xl md:text-7xl font-extrabold bg-gradient-to-r ${theme === "dark" ? "from-white via-blue-200 to-purple-200" : "from-gray-800 via-blue-600 to-purple-600"} bg-clip-text text-transparent leading-tight`}>
                  <DecryptedText className="block" />
                </h1>
              </div>
              <div className={`text-xl md:text-2xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"} font-medium leading-relaxed`}>
                <span className="block mb-2">Passionate Computer Science Student</span>
                <span className={`inline-block px-4 py-2 rounded-full ${theme === "dark" ? "bg-blue-600/20 text-blue-300" : "bg-blue-100 text-blue-700"} text-sm font-semibold`}>
                  Building the Future, One Line at a Time
                </span>
              </div>
              <div className="relative z-0 flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                <button onClick={handleViewWork} className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${theme === "dark" 
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl" 
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"}`}>
                  View My Work
                </button>
                <button onClick={handleContact} className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${theme === "dark" 
                  ? "border-gray-300 text-gray-300 hover:bg-white hover:text-gray-800" 
                  : "border-gray-700 text-gray-700 hover:bg-gray-800 hover:text-white"}`}>
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2 justify-self-center md:justify-self-end transform md:-translate-y-8 md:-translate-x-6 lg:-translate-y-10 lg:-translate-x-8">
            <div className="relative">
              {/* Soft gradient halo */}
              <div
                className={`absolute -inset-8 md:-inset-10 rounded-full ${theme === "dark" ? "bg-gradient-to-tr from-blue-600/30 via-purple-600/30 to-pink-600/30" : "bg-gradient-to-tr from-blue-300/40 via-purple-300/40 to-pink-300/40"} blur-3xl opacity-70`}
                aria-hidden="true"
              ></div>

              {/* Profile image */}
              <div className="relative z-10 rounded-full overflow-hidden shadow-2xl ring-1 ring-white/10 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <img src={myPhoto} alt="Usmaan Sayed" className="object-cover w-full h-full"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Tools Section */}
      <section className="relative px-10 md:px-20 lg:px-40 pb-16">
        <div className={`${theme === "dark" ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl border ${theme === "dark" ? "border-gray-700/50" : "border-gray-200/50"}`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${theme === "dark" ? "from-white to-gray-300" : "from-gray-800 to-gray-600"} bg-clip-text text-transparent`}>
            Technologies & Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techGroups).map(([category, items]) => (
              <div key={category}>
                <h3 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{category}</h3>
                {/* Single list clamped to one row when collapsed */}
                <div
                  className={`flex flex-wrap gap-3 transition-all duration-300 ${expandedGroups[category] ? '' : 'overflow-hidden max-h-10 md:max-h-12'}`}
                >
                  {items.map((t, i) => (
                    <span
                      key={t}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 ${theme === "dark" 
                        ? "bg-gradient-to-r from-gray-800/60 to-gray-700/60 text-gray-200 border border-gray-600/50 shadow-sm" 
                        : "bg-gradient-to-r from-white to-gray-50 text-gray-700 border border-gray-200 shadow-sm"}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${dotColors[i % dotColors.length]}`}></span>
                      {t}
                    </span>
                  ))}
                </div>
                {items.length > 4 && (
                  <button
                    type="button"
                    className={`${theme === 'dark' ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'} text-sm font-semibold mt-2`}
                    onClick={() => toggleGroup(category)}
                  >
                    {expandedGroups[category] ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Me Section with enhanced design */}
      <section className="relative px-10 md:px-20 lg:px-40 pb-24">
        <div className={`${theme === "dark" ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border ${theme === "dark" ? "border-gray-700/50" : "border-gray-200/50"}`}>
          <div className="max-w-4xl">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r ${theme === "dark" ? "from-white to-gray-300" : "from-gray-800 to-gray-600"} bg-clip-text text-transparent`}>
              About Me
            </h2>
            <div className="relative">
              <p className={`text-xl md:text-2xl leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"} font-light`}>
                Hey! I'm <span className={`font-semibold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>Usmaan Sayed</span>, a passionate student majoring in computer science always interested in learning new technologies and building new projects.
              </p>
              <p className={`text-xl md:text-2xl leading-relaxed mt-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"} font-light`}>
                However, there is also much more to me than just coding. I love <span className={`font-semibold ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}>basketball</span>, <span className={`font-semibold ${theme === "dark" ? "text-green-400" : "text-green-600"}`}>lego</span>, <span className={`font-semibold ${theme === "dark" ? "text-yellow-400" : "text-yellow-600"}`}>robotics</span>, and spending time with friends!
              </p>
              
              {/* Decorative quote mark */}
              <div className={`absolute -top-4 -left-4 text-6xl ${theme === "dark" ? "text-blue-600/20" : "text-blue-500/20"} font-serif`}>“</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section (centralized) */}
      <div ref={experienceRef} id="experience">
        <ExperienceSection theme={theme} />
      </div>
    </div>
  );
};

export default Home;
