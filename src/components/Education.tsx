import React from 'react';
import { GraduationCap, Award, BookOpen, BookIcon } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology Honours Degree in Information Technology',
      institution: 'Harare Institute of Technology',
      period: '2016 - 2025 (deferment inbetween)',
      location: 'Harare, Zimbabwe',
      description: [
        'Dissertation: "AI-Powered Skin Facial Condition Diagnosis Mobile Application"',
        // 'Relevant coursework: Data Structures, Algorithms, Database Systems, Machine Learning'
      ],
      icon: GraduationCap
    },
    {
      degree: 'Advanced Level Certificate',
      institution: 'Kwekwe High School',
      period: '2014 - 2015',
      location: 'Kwekwe, Zimbabwe',
      description: [
        // 'Mathematics, Physics, and Computer Science',
      ],
      icon: BookOpen
    },
    {
      degree: 'Ordinary Level Certificate',
      institution: 'Rio Tinto Zhombe High School',
      period: '2010 - 2013',
      location: 'Zhombe, Zimbabwe',
      description: [
        // 'Mathematics, Physics, Biology, Integrated Science, Geography, Accounting, History, English Language, and Shona Language'
      ],
      icon: BookIcon
    }
  ];

  const certifications = [
    {
      name: 'Computer Operations and Packages',
      issuer: 'HEXCO',
      year: '2013',
      description: 'Foundational training in essential computer skills, and basic IT operations'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => {
                const IconComponent = edu.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                          {edu.period} • {edu.location}
                        </p>
                        
                        <ul className="space-y-1">
                          {edu.description.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Award className="text-blue-600 dark:text-blue-400" size={28} />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-white" size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {cert.issuer} • {cert.year}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Summary */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                I believe in lifelong learning and staying updated with the latest technologies. 
                I take every opportunity I can to enhance my skills and knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;