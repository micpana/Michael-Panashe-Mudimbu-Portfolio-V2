import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { getImagesForFolder } from '../utils/imageResolver';
import { slugify } from '../utils/slugify';

interface Project {
  title: string;
  category: string;
  description: string;
  main_url: string;
  backup_url: string;
  images?: string[];
  imagesFolder?: string;
  technologies: string;
  build_type: 'Solo' | 'Team';
  built_under: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [cover, setCover] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    async function resolveCover() {
      if (project.images && project.images.length > 0) {
        if (typeof project.images[0] === 'string' && project.images[0].startsWith('http')) {
          if (mounted) setCover(project.images[0]);
          return;
        }
        if (typeof project.images[0] === 'string') {
          if (mounted) setCover(project.images[0]);
          return;
        }
      }
      if (project.imagesFolder) {
        const imgs = await getImagesForFolder(project.imagesFolder);
        if (mounted && imgs && imgs.length > 0) setCover(imgs[0]);
      }
    }
    resolveCover();
    return () => { mounted = false; };
  }, [project]);

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a,button')) return;
    navigate(`/project/${slugify(project.title)}/${index}`);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    if ((e.target as HTMLElement).closest('a,button')) return;
    navigate(`/project/${slugify(project.title)}/${index}`);
  };

  return (
    <article onClick={handleClick} onKeyDown={handleKeyDown} role="button" tabIndex={0} className="group flex h-full cursor-pointer flex-col border-t-2 border-slate-200 bg-white transition-colors duration-300 hover:border-[#3159d9] focus:outline-none focus:ring-2 focus:ring-[#3159d9] dark:border-slate-700 dark:bg-[#0b1220] dark:hover:border-[#91a9ff]" aria-label={`Open project ${project.title}`}>
      <div className="relative h-56 overflow-hidden bg-[#e8ebf2] dark:bg-[#151f33] sm:h-64">
        <img src={cover ?? ''} alt={project.title} className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.035]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020]/60 via-transparent to-transparent opacity-70" />
        <span className="absolute left-4 top-4 bg-[#f2b86b] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#172033]">{project.category}</span>
        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white backdrop-blur transition group-hover:bg-white group-hover:text-[#172033]"><ArrowUpRight size={19} /></span>
      </div>
      <div className="flex flex-1 flex-col border-x border-b border-slate-200 px-5 pb-6 pt-5 dark:border-slate-800 sm:px-6 sm:pb-7">
        <div className="mb-3 flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400"><span>{project.build_type} build</span><span className="truncate">{project.built_under}</span></div>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-[#3159d9] dark:text-white dark:group-hover:text-[#91a9ff]">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description.slice(0, 170)}{project.description.length > 170 ? '…' : ''}</p>
        <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800"><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Built with</p><p className="mt-2 text-xs leading-6 text-[#3159d9] dark:text-[#91a9ff]">{project.technologies}</p></div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <Link to={`/project/${slugify(project.title)}/${index}`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#3159d9] dark:text-white dark:hover:text-[#91a9ff]">Read case study <ArrowUpRight size={16} /></Link>
          <div className="flex gap-3">
            {project.main_url && project.main_url !== '#' && <a href={project.main_url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#3159d9] dark:text-slate-400 dark:hover:text-[#91a9ff]" aria-label="View live project"><ExternalLink size={17} /></a>}
            {project.backup_url && project.backup_url !== '#' && project.backup_url.includes('github') && <a href={project.backup_url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#3159d9] dark:text-slate-400 dark:hover:text-[#91a9ff]" aria-label="View on GitHub"><Github size={17} /></a>}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
