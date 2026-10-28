import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { ProjectsData } from '../data/projects_data_lazy';

const FeaturedProjects: React.FC = () => {
  const featuredProjects = ProjectsData.slice(0, 6);
  return (
    <section className="bg-white py-24 dark:bg-[#0b1220]" id="projects">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <div className="mb-12 flex flex-col justify-between gap-7 border-b border-slate-200 pb-8 dark:border-slate-800 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3159d9] dark:text-[#91a9ff]">Selected work / 01—06</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-slate-950 dark:text-white sm:text-6xl">Ideas, engineered into reality.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600 dark:text-slate-300">A selection of products and systems built across application engineering, AI, automation and infrastructure.</p>
        </div>
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-slate-200 pt-7 dark:border-slate-800 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">More projects, implementation details and technical context.</p>
          <Link to="/projects" className="inline-flex w-fit items-center gap-3 bg-[#3159d9] px-5 py-3.5 font-semibold text-white transition hover:bg-[#2445b3] dark:bg-[#91a9ff] dark:text-[#101a32] dark:hover:bg-white">Explore all projects <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProjects;
