import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Brain, 
  MessageCircle, 
  Send, 
  Settings 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'I build high-performance, scalable, and visually stunning web applications using modern technologies like React.js and Flask. Whether it\'s a landing page, a complex web app, or an e-commerce platform, I create solutions that are fast, secure, and optimized for all devices.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'I develop cross-platform mobile apps using React Native, ensuring seamless performance on both Android and iOS. My focus is on creating intuitive, user-friendly, and high-performance applications that deliver exceptional user experiences.'
    },
    {
      icon: Brain,
      title: 'AI Systems Development',
      description: 'Harnessing the power of Python and AI, I develop intelligent systems that automate tasks, analyze data, and enhance decision-making. Whether it\'s predictive analytics, machine learning models, or AI-powered automation, I can build solutions tailored to your needs.'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chatbots',
      description: 'I develop WhatsApp chatbots using Python, enabling businesses to automate customer interactions, handle inquiries, process orders, and provide instant support—all within WhatsApp. These bots enhance engagement and streamline communication.'
    },
    {
      icon: Send,
      title: 'Telegram Bots',
      description: 'From automating business processes to managing communities, my Telegram bots can handle a variety of tasks. Whether you need a customer support bot, a content distribution system, or a trading assistant, I build efficient and scalable Telegram bot solutions.'
    },
    {
      icon: Settings,
      title: 'Custom Software Solutions',
      description: 'Need something unique? I design and develop custom software that meets your specific business needs. Whether it\'s an internal tool, a SaaS platform, or a blockchain-integrated solution, I build robust, scalable, and high-performing applications.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I offer comprehensive digital solutions to bring your ideas to life
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