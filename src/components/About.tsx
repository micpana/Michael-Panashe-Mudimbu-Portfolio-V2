import React from 'react';
import { Code, Briefcase, Target } from 'lucide-react';
import { ProjectsData } from '../data/projects_data_lazy';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fullstack engineer combining technical excellence with business growth expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Technical Foundation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  7+ years building fullstack applications, AI-powered systems, and SaaS platforms. 
                  I architect scalable solutions across frontend, backend, cloud infrastructure, and DevOps - 
                  always with a focus on creating products that users love and businesses value.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Business Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I combine engineering expertise with business development and consultative sales skills. 
                  I understand customer needs, translate them into technical solutions, and help organizations 
                  grow through strategic partnerships, effective communication, and automation initiatives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  My Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe the best technology isn't just well-built - it creates measurable value for users and businesses. 
                  Whether developing software, integrating AI, improving operations, or building partnerships, 
                  I focus on solutions that drive real growth and lasting impact.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Building production software</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{ProjectsData.length}+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Delivered</div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Across web, mobile & AI</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Clients & Partners</div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Startups to enterprises</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Continuous Learning</div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Passionate about growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;