import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { ProjectsData } from '../data/projects_data_lazy';

const FeaturedProjects: React.FC = () => {
  // Show first 5 projects as featured
  const featuredProjects = ProjectsData.slice(0, 6);

  return (
    <section className="py-20 bg-white dark:bg-slate-900" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of some of my most impactful work across web development, mobile apps, and AI solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-sky-700 dark:bg-sky-400 dark:text-slate-950 text-white px-8 py-3 rounded-lg font-medium hover:bg-sky-800 dark:hover:bg-sky-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;