import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, MapPinIcon, CalendarIcon, BriefcaseIcon, SparklesIcon } from '@heroicons/react/24/solid';

const ExperienceCard = ({
  id,
  company,
  position,
  duration,
  location,
  impact, // backward compatibility
  impacts = [],
  description,
  technologies = [],
  image,
  theme = 'dark',
  expanded = false,
  onToggle = () => {},
  index = 0,
}) => {
  const normalizedImpacts = Array.isArray(impacts) && impacts.length > 0
    ? impacts
    : (impact ? [impact] : []);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative ${theme === 'dark' 
        ? 'bg-gray-800/50 hover:bg-gray-800/70 border-gray-700/50' 
        : 'bg-white/70 hover:bg-white/90 border-gray-200/50'} 
        backdrop-blur-xl rounded-2xl border transition-all duration-300 overflow-hidden group cursor-pointer`}
      onClick={() => onToggle(id)}
    >
      {/* Main Card Content */}
      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <BriefcaseIcon className={`h-6 w-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {company}
              </h3>
            </div>
            <p className={`text-xl font-semibold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'} mb-2`}>
              {position}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {duration && (
                <div className={`flex items-center gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <CalendarIcon className="h-4 w-4" />
                  {duration}
                </div>
              )}
              {location && (
                <div className={`flex items-center gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPinIcon className="h-4 w-4" />
                  {location}
                </div>
              )}
            </div>
          </div>

          {/* Click indicator */}
          <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
            <span>Click to {expanded ? 'collapse' : 'expand'}</span>
            <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {/* Impact Highlight (show up to 2 bullets) */}
        {normalizedImpacts.length > 0 && (
          <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/30' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50'} mb-6`}>
            <div className="flex items-start gap-3">
              <SparklesIcon className={`h-6 w-6 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'} flex-shrink-0 mt-1`} />
              <div>
                <h4 className={`font-semibold ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-700'} mb-1`}>
                  {normalizedImpacts.length > 1 ? 'Key Impacts' : 'Key Impact'}
                </h4>
                <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} list-disc pl-5 space-y-1`}>
                  {normalizedImpacts.slice(0, 2).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Technologies Preview */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' 
                  ? 'bg-gray-700/50 text-gray-300 border border-gray-600/50' 
                  : 'bg-gray-100 text-gray-700 border border-gray-200'}`}
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                +{technologies.length - 4} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className={`px-8 pb-8 border-t ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Detailed Description */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                About This Role
              </h4>
              {description && (
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                  {description}
                </p>
              )}
              {technologies && technologies.length > 0 && (
                <>
                  <h5 className={`text-sm font-semibold mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wide`}>
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'dark' 
                          ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30' 
                          : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-300/50'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Project Image */}
            {image && (
              <div className="lg:pl-8">
                <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Project Preview
                </h4>
                <div className={`rounded-xl overflow-hidden ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-100'} aspect-video`}>
                  <img
                    src={image}
                    alt={`${company} project`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
