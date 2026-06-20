import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Contract Fullstack Software Engineer (AI & Systems)',
      company: 'Nuvantica Software (Renovality Group)',
      period: 'September 2025 - Present',
      location: 'Czech Republic',
      type: 'Remote',
      description: [
        "Lead engineer responsible for building and deploying AI-powered production systems for commercial use.",
        "Architected and delivered the Skinraya AI skincare analysis platform, independently owning frontend, backend, AI workflows, database architecture and deployment infrastructure.",
        "Developed computer vision and LLM-powered workflows that automate skincare analysis and recommendation generation.",
        "Designed PostgreSQL data architecture and backend APIs supporting production workloads.",
        "Managed Linux infrastructure, Nginx, Docker deployments and cloud-hosted services to ensure reliable system availability.",
        "Consistently deliver complete features independently from requirements gathering through production release."
      ]
    },
    {
      title: 'Customer Experience Associate – Outbound',
      company: 'Omni Contact Centre',
      period: 'April 2026 – Present',
      location: 'Harare, Zimbabwe',
      type: 'Onsite',
      description: [
        "Concurrent role focused on customer engagement, communication, sales and relationship management.",
        "Conduct high-volume customer engagement campaigns while maintaining service quality standards.",
        "Resolve customer issues, enquiries and retention challenges through effective communication and problem solving.",
        "Maintain CRM accuracy and compliance with operational procedures.",
        "Collaborate with internal teams to improve customer experience outcomes.",
        "Strengthened communication, negotiation and relationship management skills applicable to client-facing software projects."
      ]
    },
    {
      title: 'Independent Fullstack Software Engineer',
      company: 'Freelance Client Projects',
      period: 'July 2023 – August 2025',
      location: 'Worldwide',
      type: 'Remote',
      description: [
        "Designed and delivered production SaaS, AI and business systems for clients across multiple industries.",
        "Built fullstack applications using React, TypeScript, Python, FastAPI, Flask, MongoDB and PostgreSQL.",
        "Developed AI-powered automation tools, messaging platforms and workflow systems to improve operational efficiency.",
        "Managed software architecture, cloud infrastructure, deployment pipelines and ongoing production maintenance.",
        "Delivered complete solutions independently from requirements gathering through deployment and support."
      ]
    },
    {
      title: 'Contract Fullstack Software Developer',
      company: 'ESpace',
      period: 'February 2021 – July 2023',
      location: 'Harare, Zimbabwe',
      type: 'Remote',
      description: [
        "Served as the primary external engineer delivering software solutions for agency clients.",
        "Built and deployed fullstack web and mobile applications using React, React Native and Python.",
        "Translated client requirements into production-ready software solutions.",
        "Worked independently as the sole engineer on assigned projects.",
        "Managed deployment, debugging, maintenance and feature enhancements throughout project lifecycles."
      ]
    },
    {
      title: 'Freelance Software Developer',
      company: 'Independent Client Projects',
      period: 'July 2019 – January 2021',
      location: 'Worldwide',
      type: 'Remote',
      description: [
        "Developed websites, web applications and business systems for local and international clients.",
        "Built frontend interfaces using React and backend services using Python and REST APIs.",
        "Worked directly with clients to gather requirements and translate business needs into software solutions.",
        "Managed application deployment, hosting, maintenance and troubleshooting.",
        "Established practical experience delivering production software independently."
      ]
    },
    {
      title: 'Intern Fullstack Software Developer',
      company: 'Health Informatics Training and Research Advancement Centre (HITRAC)',
      period: 'August 2018 – July 2019',
      location: 'Harare, Zimbabwe',
      type: 'On-site',
      description: [
        "Developed frontend applications using React and mobile applications using React Native.",
        "Contributed to backend development using Java Spring Boot.",
        "Supported implementation of Zimbabwe's national Electronic Health Records system (Impilo).",
        "Trained healthcare professionals on EHR usage and provided technical support during deployments.",
        "Gained practical experience building and supporting large-scale health information systems."
      ]
    },
    {
      title: 'Intern Web Developer',
      company: 'Hansole Investments',
      period: 'June 2019 - June 2019',
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