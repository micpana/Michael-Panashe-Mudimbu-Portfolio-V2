import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import { ProjectsData } from '../data/projects_data';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = parseInt(id || '0');
  const project = ProjectsData[projectIndex];

  if (!project) {
    return (
      <>
        <Helmet>
          <title>Project Not Found - Michael Panashe Mudimbu</title>
          <meta name="description" content="The project you're looking for doesn't exist." />
        </Helmet>
        <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Project Not Found
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-200"
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
      <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Images */}
            <div>
              <ImageGallery images={project.images} projectTitle={project.title} />
            </div>

            {/* Project Information */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h1>

                {/* --- Build Metadata ---------------- */}
                <div className="flex flex-wrap gap-4 text-sm mt-4">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                      Build Type:
                    </span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-100">
                      {project.build_type}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">
                      Under:
                    </span>
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-100">
                      {project.built_under}
                    </span>
                  </div>
                </div>
                {/* ----------------------------------- */}
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  About This Project
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {project.description.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    )
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.split(', ').map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.main_url && project.main_url !== '#' && (
                  <a
                    href={project.main_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={18} />
                    View Live Project
                  </a>
                )}
                {project.backup_url && project.backup_url !== '#' && (
                  <a
                    href={project.backup_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      project.backup_url.includes('github')
                        ? 'bg-gray-900 hover:bg-gray-800 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {project.backup_url.includes('github') ? (
                      <>
                        <Github size={18} />
                        View on GitHub
                      </>
                    ) : (
                      <>
                        <ExternalLink size={18} />
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