import React, { useState, forwardRef } from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceData } from './Experience.jsx';

const ExperienceSection = forwardRef(({ theme }, ref) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => setExpandedCard(expandedCard === id ? null : id);

  return (
    <section ref={ref} className='relative px-10 md:px-20 lg:px-40 pb-32'>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 right-0 w-64 h-64 ${theme === "dark" ? "bg-blue-600" : "bg-blue-400"} rounded-full mix-blend-multiply filter blur-3xl opacity-10`}></div>
        <div className={`absolute bottom-1/4 left-0 w-80 h-80 ${theme === "dark" ? "bg-purple-600" : "bg-purple-400"} rounded-full mix-blend-multiply filter blur-3xl opacity-10`}></div>
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${theme === "dark" ? "from-white via-blue-200 to-purple-200" : "from-gray-800 via-blue-600 to-purple-600"} bg-clip-text text-transparent`}>
            Experience
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${theme === "dark" ? "from-blue-500 to-purple-500" : "from-blue-600 to-purple-600"}`}></div>
          <p className={`mt-6 text-xl ${theme === "dark" ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto leading-relaxed`}>
            Discover my journey through various roles and organizations where I've contributed to meaningful projects and made lasting impacts.
          </p>
        </div>

        {/* Vertical list of expandable cards (Home.jsx style) */}
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={exp.id ?? index}
              id={exp.id ?? index}
              company={exp.company}
              position={exp.position || exp.role}
              duration={exp.duration || exp.dates}
              description={exp.description}
              impacts={exp.impacts || []}
              technologies={exp.technologies || exp.skills || []}
              image={exp.image || (Array.isArray(exp.images) && exp.images.length ? exp.images[0] : undefined)}
              theme={theme}
              expanded={expandedCard === (exp.id ?? index)}
              onToggle={toggleCard}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-6`}>
            Want to learn more about my experience?
          </p>
          <a href="#/resume" className={`inline-block px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${theme === "dark" 
            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl" 
            : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl"}`}>
            View Full Resume
          </a>
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;
