import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactGA from "react-ga4";
import ProjectCard from '../components/ProjectCard';
import { ProjectsData } from '../data/projects_data';

ReactGA.initialize("G-1KT6SKGTKG");

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(ProjectsData.map(project => project.category)))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? ProjectsData 
    : ProjectsData.filter(project => project.category === filter);

  return (
    <>
      <Helmet>
        <title>Projects - Michael Panashe Mudimbu</title>
        <meta name="description" content="Explore my complete portfolio of web applications, mobile apps, and digital solutions. 17+ projects showcasing expertise in React, Python, AI, and more." />
        <meta name="keywords" content="projects, portfolio, web applications, mobile apps, React, Python, AI, software development" />
        <meta property="og:title" content="Projects - Michael Panashe Mudimbu" />
        <meta property="og:description" content="Explore my complete portfolio of web applications, mobile apps, and digital solutions." />
        <link rel="canonical" href="https://michaelmudimbu.netlify.app/projects" />
      </Helmet>
      <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              All Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore my complete portfolio of web applications, mobile apps, and digital solutions
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-sm opacity-75">
                    ({ProjectsData.filter(p => p.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={`${project.title}-${index}`} 
                project={project} 
                index={ProjectsData.indexOf(project)} 
              />
            ))}
          </div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;