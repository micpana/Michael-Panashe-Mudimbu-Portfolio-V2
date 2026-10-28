import React from 'react';
import { Code2, Network, Target } from 'lucide-react';
import { ProjectsData } from '../data/projects_data_lazy';

const principles = [
  { icon: Code2, title: 'Engineering with ownership', description: 'I work across the stack, from interfaces and backend services to data models, deployment and production maintenance. The goal is software that can be understood, operated and improved.' },
  { icon: Network, title: 'Systems before silos', description: 'Features do not exist in isolation. I think about how data moves, how services fail, how people use the product and how architecture choices affect security, reliability and future change.' },
  { icon: Target, title: 'Technology with purpose', description: 'Good engineering connects technical decisions to real needs. I translate requirements into practical systems, communicate trade-offs clearly and focus on outcomes over hype.' },
];

const About: React.FC = () => (
  <section className="bg-white py-20 dark:bg-[#0b1220]" id="about">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">A little about how I work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Build the right thing. Build it well. Keep it dependable.</h2>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">I am a software engineer and AI systems architect with 7+ years of experience delivering production web, mobile, backend and AI systems. My work spans full-stack development, LLM and computer-vision workflows, data pipelines, cloud infrastructure and production operations.</p>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">I bring a practical, collaborative approach to technical work: understand the problem, make the architecture legible, ship carefully and stay accountable for how the system behaves after release.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="border-l-2 border-sky-600 pl-4 dark:border-sky-400"><p className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">7+</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Years in software</p></div>
            <div className="border-l-2 border-sky-600 pl-4 dark:border-sky-400"><p className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{ProjectsData.length}</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Projects listed</p></div>
          </div>
        </div>
        <div className="space-y-4">
          {principles.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="grid gap-4 rounded-xl border border-slate-200 bg-[#f8fafc] p-6 dark:border-slate-700 dark:bg-slate-900 sm:grid-cols-[auto_1fr] sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300"><Icon size={22} /></div>
              <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">0{index + 1}</p><h3 className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
