import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Freelance Software Developer',
      company: 'Self-Employed',
      period: '2021 - Present',
      location: 'Remote',
      description: [
        'Developed 17+ web applications and mobile apps for clients across various industries',
        'Specialized in React.js, React Native, Python, and Flask development',
        'Built AI-powered solutions including trading systems and mobile health applications',
        'Implemented secure payment systems and RESTful APIs for e-commerce platforms',
        'Maintained 100% client satisfaction rate through quality delivery and communication'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Various Client Projects',
      period: '2020 - 2021',
      location: 'Remote',
      description: [
        'Collaborated with international clients to deliver custom software solutions',
        'Developed responsive web applications using modern JavaScript frameworks',
        'Created mobile applications with offline functionality and data synchronization',
        'Implemented chatbot solutions for WhatsApp and Telegram platforms',
        'Optimized application performance and implemented security best practices'
      ]
    },
    {
      title: 'Software Development Intern',
      company: 'Tech Startup',
      period: '2019 - 2020',
      location: 'Zimbabwe',
      description: [
        'Gained hands-on experience in full-stack web development',
        'Worked with senior developers on large-scale applications',
        'Learned industry best practices for code quality and testing',
        'Contributed to open-source projects and internal tools',
        'Developed strong problem-solving and debugging skills'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in software development and the experiences that shaped my expertise
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-white" size={28} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-2 sm:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {exp.location}
                  </p>

                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;