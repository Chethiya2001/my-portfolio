'use client';

import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  const skills: Skill[] = [
    // Frontend
    { name: 'React/Next.js', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend' },
    { name: 'Vue.js', level: 75, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 92, category: 'backend' },
    { name: 'Python', level: 85, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 78, category: 'backend' },
    
    // Tools
    { name: 'AWS', level: 82, category: 'tools' },
    { name: 'Docker', level: 75, category: 'tools' },
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Figma', level: 70, category: 'tools' },
    
    // Soft Skills
    { name: 'Problem Solving', level: 95, category: 'soft' },
    { name: 'Team Leadership', level: 85, category: 'soft' },
    { name: 'Communication', level: 88, category: 'soft' },
    { name: 'Project Management', level: 80, category: 'soft' },
  ];

  const categoryColors = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-green-500 to-emerald-500',
    tools: 'from-purple-500 to-violet-500',
    soft: 'from-orange-500 to-red-500',
  };

  const categoryLabels = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & Technologies',
    soft: 'Soft Skills',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill levels
          skills.forEach((skill, index) => {
            setTimeout(() => {
              let current = 0;
              const increment = skill.level / 30;
              const timer = setInterval(() => {
                current += increment;
                if (current >= skill.level) {
                  current = skill.level;
                  clearInterval(timer);
                }
                setAnimatedLevels(prev => ({
                  ...prev,
                  [skill.name]: Math.round(current)
                }));
              }, 50);
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional competencies, 
              constantly evolving with industry trends and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <div
                key={category}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} mr-3`}></div>
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                  
                  <div className="space-y-4">
                    {categorySkills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{ transitionDelay: `${categoryIndex * 200 + index * 100}ms` }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            {animatedLevels[skill.name] || 0}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} transition-all duration-1000 ease-out`}
                            style={{ width: `${animatedLevels[skill.name] || 0}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'GraphQL', 'Redis', 'Kubernetes', 'Jenkins', 'Terraform', 'Microservices',
                'REST APIs', 'WebSockets', 'Progressive Web Apps', 'Mobile Development',
                'Machine Learning', 'Data Visualization', 'Agile/Scrum', 'DevOps'
              ].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 cursor-default transform hover:scale-105 ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${600 + index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}