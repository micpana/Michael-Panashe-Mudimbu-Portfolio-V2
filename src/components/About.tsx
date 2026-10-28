import React from 'react';
import { ArrowUpRight, Blocks, GitBranch, ShieldCheck } from 'lucide-react';

const principles = [
  { number: '01', icon: Blocks, title: 'See the whole system', description: 'Map the relationships between users, interfaces, services, data and infrastructure before optimising a single part.' },
  { number: '02', icon: GitBranch, title: 'Make complexity legible', description: 'Turn ambiguous requirements into clear architecture, maintainable code and decisions a team can reason about.' },
  { number: '03', icon: ShieldCheck, title: 'Design for what happens next', description: 'Think beyond the release: security, failure modes, monitoring, operating cost and the ability to evolve safely.' },
];

const About: React.FC = () => (
  <section className="relative overflow-hidden bg-[#e9edf5] py-24 dark:bg-[#111b2b]" id="about">
    <div aria-hidden="true" className="absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full border border-[#3159d9]/15 dark:border-[#91a9ff]/10" />
    <div aria-hidden="true" className="absolute -right-8 top-16 h-[19rem] w-[19rem] rounded-full border border-[#3159d9]/15 dark:border-[#91a9ff]/10" />
    <div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-14">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3159d9] dark:text-[#91a9ff]">How I think / 02</p>
        <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-slate-950 dark:text-white sm:text-6xl">The interface is only one part of the story.</h2>
        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">I’m a software engineer and AI systems architect with 7+ years of experience across production web, mobile, backend and AI systems. My work moves between code, architecture, data and the infrastructure that keeps products running.</p>
        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">I like understanding the real problem, making the moving parts visible, and building something useful that can be maintained and improved by the people who rely on it.</p>
        <a href="#experience" className="mt-8 inline-flex items-center gap-2 border-b border-[#3159d9] pb-2 text-sm font-semibold text-[#3159d9] transition hover:gap-3 dark:border-[#91a9ff] dark:text-[#91a9ff]">Explore my experience <ArrowUpRight size={16} /></a>
      </div>
      <div className="border-t border-slate-300 dark:border-slate-700">
        {principles.map(({number, icon: Icon, title, description}) => (
          <article key={number} className="grid gap-4 border-b border-slate-300 py-7 dark:border-slate-700 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-8">
            <div className="flex items-center gap-3 sm:block"><span className="font-mono text-xs text-slate-400">{number}</span><Icon size={22} className="text-[#3159d9] dark:text-[#91a9ff] sm:mt-5" /></div>
            <div><h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl">{title}</h3><p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">{description}</p></div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default About;
