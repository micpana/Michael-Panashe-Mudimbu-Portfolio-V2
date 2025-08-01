import React from 'react';
import { User, Award, Target } from 'lucide-react';
import { ProjectsData } from '../data/projects_data';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate software developer with a focus on creating innovative digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <User className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Who I Am
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm Michael Panashe Mudimbu, a software developer passionate about building intuitive and efficient digital solutions. 
                  I craft seamless web and mobile experiences, from backend logic to frontend finesse, bringing ideas to life with clean, efficient code.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  My Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To create digital solutions that not only meet technical requirements but also provide exceptional user experiences. 
                  I believe in the power of technology to transform businesses and improve lives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  My Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I focus on understanding the unique needs of each project and client. Whether it's a complex web application, 
                  a mobile app, or an AI-powered solution, I ensure every project is built with scalability, security, and user experience in mind.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{ProjectsData.length}+</div>
              <div className="text-gray-600 dark:text-gray-300">Public Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">9+</div>
              <div className="text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;