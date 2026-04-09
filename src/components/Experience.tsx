import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Contract Fullstack Software Engineer (AI & Systems)',
      company: 'Nuvantica Software',
      period: '2025 - Present',
      location: 'Czech Republic',
      type: 'Remote',
      description: [
        "Primary external engineer responsible for building and deploying AI powered systems",
        "Designed and implemented fullstack applications using React, TypeScript and FastAPI",
        "Built computer vision and LLM driven workflows used in production",
        "Designed PostgreSQL data architecture and backend services",
        "Managed Ubuntu servers, Nginx and deployment infrastructure",
        "Delivered complete features independently from concept to production"
      ]
    },
    {
      title: 'Freelance Software Developer',
      company: 'Self-Employed',
      period: '2019 - Present',
      location: 'Worldwide',
      type: 'Remote',
      description: [
        "Designed and built production web and mobile applications for international clients",
        "Developed fullstack systems using React, Python and REST APIs",
        "Built AI automation tools, data systems and messaging bots",
        "Handled cloud deployment, infrastructure and production maintenance",
        "Regularly worked as the sole engineer delivering complete systems end-to-end"
      ]
    },
    {
      title: 'Contract Fullstack Software Developer',
      company: 'ESpace',
      period: '2021 - 2023',
      location: 'Harare, Zimbabwe',
      type: 'Remote',
      description: [
        "Served as the dedicated external engineer delivering software solutions for agency clients",
        "Designed and built fullstack web and mobile applications using React, React Native and Python",
        "Translated client requirements directly into production-ready systems",
        "Worked independently as the sole engineer on assigned projects",
        "Handled deployment, debugging and ongoing system improvements"
      ]
    },
    {
      title: 'Intern Fullstack Software Developer',
      company: 'Health Informatics Training and Research Advancement Center (HITRAC)',
      period: '2019 - 2020',
      location: 'Harare, Zimbabwe',
      type: 'On-site',
      description: [
        "Developed frontend components using React and mobile applications using React Native",
        "Contributed to backend development using Java Spring Boot",
        "Trained healthcare professionals on the use of Zimbabwe’s national Electronic Health Records system (Impilo)",
        "Provided on-site technical support during EHR implementation at healthcare facilities",
        "Gained experience working on real-world health information systems"
      ]
    },
    {
      title: 'Intern Web Developer',
      company: 'Hansole Investments',
      period: '2019 - 2019',
      location: 'Harare, Zimbabwe',
      type: 'On-site',
      description: [
        "Built and maintained client websites using WordPress",
        "Supported operations of a bulk SMS platform ensuring reliable message delivery",
        "Managed domain and hosting renewals and communicated directly with clients",
        "Gained early experience working with production systems and real business workflows"
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
                    {exp.location} – {exp.type}
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