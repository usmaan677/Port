import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, CalendarIcon, BuildingOfficeIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

// Export the data so other components can use it
export const experienceData = [
  {
    logo: "/empiriclogo.jpeg",
    company: "Empiric Technology",
    dates: "December 2024 – July 2025",
    role: "Software Engineer Intern",
    images: ["/empiric1.png", "/empiriclogo.jpeg"],
    description: "Customized and extended Microsoft Dynamics 365 Business Central with AL to optimize business workflows and reporting.",
    impacts: [
      "Built new Business Central pages and dashboards in AL; improved data accuracy by ~30% and streamlined reporting.",
      "Developed expertise in D365 Business Central and AL to tailor ERP functionality for business needs."
    ],
    technologies: [
      "Dynamics 365 Business Central",
      "AL",
      "ERP",
      "Dashboards",
      "Data Modeling"
    ]
  },
  {
    logo: "/elitelogo.png",
    company: "Elite Robotics",
    dates: "June 2024 – Present",
    role: "Founding Member / Lead Coach",
    images: ["/Elite Robotics-2.png", "/1.png"],
    description: "Co-founded and led robotics programs for students ages 8–12 across multiple locations.",
    impacts: [
      "Doubled enrollment via digital + in‑person marketing; drove $10k+ in sign‑ups in the first month.",
      "Delivered hands‑on LEGO SPIKE and block‑coding camps across 6 locations, reaching 150+ students."
    ],
    technologies: [
      "LEGO SPIKE",
      "Block Coding",
      "Curriculum Design",
      "Social Media Marketing",
      "Event Operations"
    ]
  },
  {
    logo: "/maryamlogo.png",
    company: "MIC Center",
    dates: "August 2024 – Present",
    role: "Intern",
    images: ["/maryam1.png", "/maryam2.png"],
    description: "Supported planning and execution of community events and outreach initiatives.",
    impacts: [
      "Coordinated events for 500+ attendees with effective project management and timely execution.",
      "Collaborated with 20 volunteers on community gatherings, youth programs, and charity drives."
    ],
    technologies: [
      "Event Management",
      "Team Coordination",
      "Canva",
      "Figma",
      "Community Outreach"
    ]
  },
  {
    logo: "/umrlogo.jpg",
    company: "UMR",
    dates: "Spring 2025 – Summer 2025",
    role: "Club Intern",
    images: ["/umrimg.png", "/umr2.png"],
    description: "Assisted with local humanitarian initiatives and fundraising activities.",
    impacts: [
      "Helped lead 30 volunteers to prepare 500+ meals for homeless communities in downtown Houston.",
      "Supported bi‑weekly charity events, bake sales, and food drives for global and local causes."
    ],
    technologies: [
      "Nonprofit Operations",
      "Fundraising",
      "Logistics",
      "Volunteer Management",
      "Community Service"
    ]
  }
];

const Experience = ({ theme }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  // Normalize exported data for this component's card shape
  const experiences = experienceData.map((d, i) => ({
    id: i + 1,
    company: d.company,
    position: d.role,
    duration: d.dates,
    description: d.description,
    impact: d.impact, // optional
    skills: d.skills || d.technologies || [],
    image: Array.isArray(d.images) && d.images.length ? d.images[0] : d.image,
  }));

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section 
      id="experience"
      className={`${theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
        : "bg-gradient-to-br from-gray-50 via-white to-gray-100"} 
        py-20 px-4 md:px-20 lg:px-28 relative overflow-hidden`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-72 h-72 ${theme === "dark" ? "bg-blue-600" : "bg-blue-400"} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 ${theme === "dark" ? "bg-purple-600" : "bg-purple-400"} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000`}></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${theme === "dark" ? "from-white via-blue-200 to-purple-200" : "from-gray-800 via-blue-600 to-purple-600"} bg-clip-text text-transparent`}
          >
            Professional Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${theme === "dark" ? "from-blue-500 to-purple-500" : "from-blue-600 to-purple-600"} mb-6`}
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}
          >
            My journey through various roles and the impact I've made along the way
          </motion.p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${theme === "dark" 
                ? "bg-gray-800/50 backdrop-blur-xl border-gray-700/50 hover:bg-gray-800/70" 
                : "bg-white/70 backdrop-blur-xl border-gray-200/50 hover:bg-white/90"} 
                rounded-2xl border shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden`}
              onClick={() => toggleCard(experience.id)}
            >
              {/* Front Card Content */}
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left Side - Company & Position */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${theme === "dark" ? "bg-blue-500/20" : "bg-blue-100"}`}>
                        <BuildingOfficeIcon className={`h-6 w-6 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                          {experience.company}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <BriefcaseIcon className={`h-4 w-4 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`} />
                          <p className={`text-sm font-medium ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}>
                            {experience.position}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 mb-4">
                      <CalendarIcon className={`h-4 w-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
                      <span className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        {experience.duration}
                      </span>
                    </div>

                    {/* Impact (only when provided) */}
                    {experience.impact && (
                      <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-green-500/10 border border-green-500/20" : "bg-green-50 border border-green-200"} mb-4`}>
                        <p className={`text-sm font-medium ${theme === "dark" ? "text-green-400" : "text-green-700"}`}>
                          💡 Key Impact: {experience.impact}
                        </p>
                      </div>
                    )}

                    {/* Skills Preview */}
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${theme === "dark" 
                            ? "bg-gray-700 text-gray-300" 
                            : "bg-gray-100 text-gray-700"}`}
                        >
                          {skill}
                        </span>
                      ))}
                      {experience.skills.length > 3 && (
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${theme === "dark" ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"}`}>
                          +{experience.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Expand Button */}
                  <div className="flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: expandedCard === experience.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-3 rounded-full ${theme === "dark" ? "bg-gray-700 group-hover:bg-gray-600" : "bg-gray-100 group-hover:bg-gray-200"} transition-colors duration-300`}
                    >
                      <ChevronDownIcon className={`h-6 w-6 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`} />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedCard === experience.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-8 pt-8 border-t border-gray-300/20"
                    >
                      {/* Description */}
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                          Description
                        </h4>
                        <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                          {experience.description}
                        </p>
                      </div>

                      {/* All Skills */}
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className={`px-4 py-2 text-sm font-medium rounded-lg ${theme === "dark" 
                                ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30" 
                                : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200"}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Image */}
                      <div className="mb-4">
                        <h4 className={`text-lg font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                          Project Preview
                        </h4>
                        <div className="rounded-lg overflow-hidden">
                          <img
                            src={experience.image}
                            alt={`${experience.company} project`}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;