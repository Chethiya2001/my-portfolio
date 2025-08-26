'use client';

import { useState, useEffect } from 'react';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
}

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Code Fusion PTE LTD.',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Developed and maintained multiple client projects ranging from e-commerce platforms to business management systems.',
      achievements: [
        'Delivered 2+ full-stack solutions, including .NET APIs, Angular/React web apps, and Flutter mobile applications',
        'Boosted client satisfaction by 25% through timely delivery and high-quality solutions',
        'Implemented automated testing pipelines, reducing bug reports by 50%',
        'Enhanced UI/UX by collaborating with designers and ensuring pixel-perfect Angular and React implementations',
        'Optimized deployment workflows using Docker and AWS, cutting release time by 40%'
      ],

      technologies: ['.Net', 'ReactJs', 'Angular', 'MySQL', 'MongoDb', 'AWS', 'Docker', 'Flutter'],
      companyUrl: '#'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My journey through various roles and companies, each contributing to my growth
              as a developer and professional.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 hidden md:block z-10"></div>

                  <div className="md:ml-20 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-2" />
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                              >
                                {exp.company}
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            ) : (
                              <span>{exp.company}</span>
                            )}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="list-none space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}