import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Brain, 
  MessageCircle, 
  Send, 
  Settings,
  Handshake,
  TrendingUp
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web & Fullstack Development',
      description: 'I build high-performance, scalable web applications using React, Python, and cloud technologies. From MVP to enterprise, I create solutions that are fast, secure, and optimized for growth.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile solutions using React Native that deliver seamless experiences on iOS and Android. Focus on intuitive design, performance, and user retention.'
    },
    {
      icon: Brain,
      title: 'AI & Automation Systems',
      description: 'Develop AI-powered applications that automate processes, analyze data, and enhance decision-making. From computer vision to LLM integration, I build intelligent systems that create competitive advantage.'
    },
    {
      icon: Handshake,
      title: 'Business Development & Partnerships',
      description: 'Combine technical expertise with strategic thinking to identify growth opportunities, build partnerships, and create pathways for business expansion. I understand both sides of the table.'
    },
    {
      icon: TrendingUp,
      title: 'Sales Consulting & Solution Selling',
      description: 'Help sales and leadership teams close deals by translating business needs into technical solutions. I provide technical credibility, customer insight, and strategic guidance to drive revenue growth.'
    },
    {
      icon: Settings,
      title: 'Custom Solutions & Strategy',
      description: 'Tailor-made software, automation initiatives, and technology strategies for your unique business needs. Whether SaaS, internal tools, or digital transformation, I build solutions that deliver measurable ROI.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technology solutions combined with business growth expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-xl group border border-transparent hover:border-blue-100 dark:hover:border-blue-900/20"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;