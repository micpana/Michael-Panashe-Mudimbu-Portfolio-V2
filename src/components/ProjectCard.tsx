import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  main_url: string;
  backup_url: string;
  images: string[];
  technologies: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description.slice(0, 150)}...
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">Technologies:</p>
          <p className="text-sm text-blue-600 dark:text-blue-400">{project.technologies}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Link
            to={`/project/${index}`}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-200 text-sm"
          >
            View Details
          </Link>

          <div className="flex gap-2">
            {project.main_url && project.main_url !== '#' && (
              <a
                href={project.main_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="View live project"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.backup_url && project.backup_url !== '#' && project.backup_url.includes('github') && (
              <a
                href={project.backup_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                aria-label="View on GitHub"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;