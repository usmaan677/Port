import React from 'react';
import { forwardRef } from 'react';
import ExperienceCard from './ExperienceCard';

const ExperienceSection = forwardRef(({ theme }, ref) => {
  const experiences = [
    {
      logo: "/empiriclogo.jpeg",
      company: "Empiric Technology",
      dates: "Summer 2025",
      role: "Technical Consultant Intern",
      images: ["/empiric1.png", "/empiriclogo.jpeg"],
      description: "Customized ERP systems using AL and Business Central. Built secure role centers and optimized client workflows."
    },
    {
      logo: "/elitelogo.png",
      company: "Elite Robotics",
      dates: "Summer 2024 – Present",
      role: "Founding Member/Lead Coach",
      images: ["/Elite Robotics-2.png", "/1.png"],
      description: "Led weekly robotics sessions for kids and organized recruitment campaigns using social media outreach."
    },
    {
      logo: "/maryamlogo.png",
      company: "Maryam Masjid",
      dates: "2024 – Present",
      role: "Event Organizer",
      images: ["/maryam1.png", "/maryam2.png"],
      description: "Organized community events for 500+ community members, managed volunteer teams, and coordinated logistics."
    },
    {
      logo: "/umrlogo.jpg",
      company: "UMR",
      dates: "Spring 2025 – Summer 2025",
      role: "Club Intern",
      images: ["/umrimg.png", "/umr2.png"],
      description: "Planned and participated in fundraisers and food drives benefiting global and local underprivileged communities."
    }
  ];

  return (
    <section ref={ref} className='px-10 md:px-40 pb-20'>
      <h2 className="text-4xl pb-10">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            logo={exp.logo}
            company={exp.company}
            dates={exp.dates}
            role={exp.role}
            description={exp.description}
            images={exp.images}
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
});

export default ExperienceSection;
