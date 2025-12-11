import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Developer (Fullstack & AI)',
      company: 'Nuvantica Software',
      period: '2025 - Present',
      location: 'Czech Republic',
      type: 'Remote',
      description: [
        "Architecting and developing AI-dense software solutions using a fullstack architecture comprising React, TypeScript, and Tailwind CSS on the frontend, with Python and FastAPI on the backend.",
        "Implementing advanced AI capabilities, including Computer Vision and LLM integrations.",
        "Managing production deployments on Ubuntu servers using Nginx and ASGI, ensuring high availability and performance.",
        "Designing and maintaining robust PostgreSQL database schemas for complex data requirements."
      ]
    },
    {
      title: 'Freelance Software Developer',
      company: 'Self-Employed',
      period: '2019 - Present',
      location: 'Worldwide',
      type: 'Remote',
      description: [
        "Developing web applications using a ReactJS, Python, MongoDB, and REST API technology stack",
        "Building and maintaining websites and web applications for various clients",
        "Developing mobile applications using React Native, Python, MongoDB, and REST API technology stack",
        "Creating AI-driven systems using Python for various domains, including data analysis and automation"
      ]
    },
    {
      title: 'Fullstack Software Developer ',
      company: 'ESpace',
      period: '2021 - 2023',
      location: 'Harare, Zimbabwe',
      type: 'Remote',
      description: [
        "Collaborated remotely as the primary Fullstack Developer, delivering web and mobile solutions for clients sourced by the agency.",
        "Built scalable applications using ReactJS, React Native, Python, and MongoDB.",
        "Translated client requirements into functional, high-performance software products within strict deadlines."
      ]
    },
    {
      title: 'Intern FullStack Developer',
      company: 'Health Informatics Training and Research Advancement Center (HITRAC)',
      period: '2019 - 2020',
      location: 'Harare, Zimbabwe',
      type: 'On-site',
      description: [
        "Developed frontend components using ReactJS and mobile applications with React Native",
        "Assisted in backend development using Java Spring Boot",
        "Trained healthcare professionals on the use of Impilo, Zimbabwe's Electronic Health Records (EHR) system",
        "Provided on-the-ground support for EHR implementation at Arcadia Clinic and Mbare Poly Clinic"
      ]
    },
    {
      title: 'Intern Web Developer',
      company: 'Hansole Investments',
      period: '2019 - 2019',
      location: 'Harare, Zimbabwe',
      type: 'On-site',
      description: [
        "Developed websites for clients using WordPress",
        "Managed bulk SMS platform operations, ensuring seamless delivery and performance",
        "Handled client communications, including renewal notices for domains and hosting"
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