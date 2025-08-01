import React from 'react';
import { 
  Code, 
  Smartphone, 
  Database, 
  Coins, 
  GitBranch, 
  Container, 
  Terminal, 
  Server,
  Database as DatabaseIcon 
} from 'lucide-react';

const Tools: React.FC = () => {
  const tools = [
    { icon: Code, name: 'ReactJs', color: 'from-blue-500 to-cyan-500' },
    { icon: Smartphone, name: 'React Native', color: 'from-blue-600 to-purple-600' },
    { icon: Code, name: 'Python', color: 'from-yellow-500 to-blue-500' },
    { icon: Coins, name: 'Solidity', color: 'from-gray-700 to-gray-900' },
    { icon: Database, name: 'MongoDB', color: 'from-green-500 to-green-600' },
    { icon: DatabaseIcon, name: 'SQL', color: 'from-orange-500 to-red-500' },
    { icon: GitBranch, name: 'Git', color: 'from-orange-600 to-red-600' },
    { icon: Container, name: 'Docker', color: 'from-blue-400 to-blue-600' },
    { icon: Terminal, name: 'Ubuntu', color: 'from-orange-500 to-orange-600' },
    { icon: Server, name: 'NGINX', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The technologies I use to build robust and scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {tool.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;