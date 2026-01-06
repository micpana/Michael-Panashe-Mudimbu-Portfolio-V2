import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReactGA from "react-ga4";
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Layers, User } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import { ProjectsData } from '../data/projects_data';

ReactGA.initialize("G-1KT6SKGTKG");

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = parseInt(id || '0');
  const project = ProjectsData[projectIndex];

  // Error State: Project Not Found
  if (!project) {
    return (
      <>
        <Helmet>
          <title>Project Not Found - Michael Panashe Mudimbu</title>
          <meta name="description" content="The project you're looking for doesn't exist." />
        </Helmet>
        <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Project Not Found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              The project you're looking for doesn't exist or may have been moved.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all duration-200 w-full sm:w-auto"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - Michael Panashe Mudimbu</title>
        <meta name="description" content={project.description.slice(0, 160).replace(/\s+/g, ' ').trim() + '...'} />
        <meta name="keywords" content={`${project.title}, ${project.category}, ${project.technologies}, software development`} />
        <meta property="og:title" content={`${project.title} - Michael Panashe Mudimbu`} />
        <meta property="og:description" content={project.description.slice(0, 160).replace(/\s+/g, ' ').trim() + '...'} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://michaelmudimbu.netlify.app/project/${projectIndex}`} />
      </Helmet>

      <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button - Increased hit area and margin */}
          <div className="mb-6 md:mb-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium py-2"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </Link>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Column 1: Project Images */}
            <div className="w-full">
              <ImageGallery images={project.images} projectTitle={project.title} />
            </div>

            {/* Column 2: Project Information */}
            <div className="flex flex-col space-y-8 md:space-y-10">
              
              {/* Title and Category */}
              <section>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-600/10 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400 text-xs font-bold tracking-wider rounded-full uppercase">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  {project.title}
                </h1>

                {/* Build Metadata - Better mobile layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <Layers className="text-blue-500" size={18} />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Build Type</p>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{project.build_type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <User className="text-blue-500" size={18} />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Under</p>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{project.built_under}</p>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200 dark:border-gray-800" />

              {/* Description */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  About This Project
                </h2>
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  {project.description.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-base md:text-lg">
                        {paragraph.trim()}
                      </p>
                    )
                  ))}
                </div>
              </section>

              {/* Technologies */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.technologies.split(', ').map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Action Links - Full width on mobile */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {project.main_url && project.main_url !== '#' && (
                  <a
                    href={project.main_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/20 w-full sm:w-auto text-center"
                  >
                    <ExternalLink size={20} />
                    View Live Project
                  </a>
                )}
                {project.backup_url && project.backup_url !== '#' && (
                  <a
                    href={project.backup_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-200 w-full sm:w-auto text-center border ${
                      project.backup_url.includes('github')
                        ? 'bg-gray-900 border-transparent hover:bg-black text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm'
                    }`}
                  >
                    {project.backup_url.includes('github') ? (
                      <>
                        <Github size={20} />
                        View Source
                      </>
                    ) : (
                      <>
                        <ExternalLink size={20} />
                        Alternative Link
                      </>
                    )}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;