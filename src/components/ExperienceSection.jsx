import React from 'react';
import {forwardRef} from 'react';
import ExperienceCard from './ExperienceCard'; // ✅ Import the card

const ExperienceSection = forwardRef (({ theme }, ref) => {
  const experiences = [
    {
      logo: "/empiriclogo.jpeg",
      company: "Empiric Technology",
      dates: "Summer 2025",
      description: "Customized ERP systems using AL and Business Central. Built secure role centers and optimized client workflows."
    },
    {
      logo: "/elitelogo.png",
      company: "Elite Robotics",
      dates: "Fall 2024 – Spring 2025",
      description: "Led weekly robotics sessions for kids and organized recruitment campaigns using social media outreach."
    },
    {
      logo: "/maryamlogo.png",
      company: "Maryam Masjid",
      dates: "2022 – Present",
      description: "Organized religious events for 500+ community members, managed volunteer teams, and coordinated logistics."
    },
    {
      logo: "/umrlogo.jpg",
      company: "UMR",
      dates: "2023 – Present",
      description: "Planned and participated in fundraisers and food drives benefiting global and local underprivileged communities."
    }
  ];

  return (
    <section ref = {ref} className='px-10 md:px-40 pb-20'>
      <h2 className="text-4xl pb-10">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            logo={exp.logo}
            company={exp.company}
            dates={exp.dates}
            description={exp.description}
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
});

export default ExperienceSection;