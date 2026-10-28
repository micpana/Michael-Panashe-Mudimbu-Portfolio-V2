import React from 'react';
import { ArrowUpRight, BrainCircuit, CloudCog, Database, Layers3, Workflow } from 'lucide-react';

const capabilities = [
  { number: '01', icon: Layers3, title: 'Product engineering', description: 'Full-stack web and mobile applications, from responsive interfaces to backend APIs and data models.', tags: 'React · TypeScript · Python · React Native' },
  { number: '02', icon: BrainCircuit, title: 'Applied AI systems', description: 'LLM integrations, retrieval workflows, computer vision and recommendations connected to useful product behaviour.', tags: 'LLMs · RAG · TensorFlow · OpenCV' },
  { number: '03', icon: Database, title: 'Data & integrations', description: 'Reliable pipelines, relational schemas, third-party APIs, webhooks and communication platform integrations.', tags: 'PostgreSQL · REST · WhatsApp · Telegram' },
  { number: '04', icon: CloudCog, title: 'Cloud & operations', description: 'Deployment, containerisation, reverse proxies, monitoring and practical work to keep production systems dependable.', tags: 'Linux · Docker · Nginx · CI/CD' },
  { number: '05', icon: Workflow, title: 'Automation & workflows', description: 'Connect repetitive processes and disconnected tools with browser automation, bots and purpose-built internal software.', tags: 'Playwright · Selenium · APIs · Bots' },
];

const Services: React.FC = () => (
  <section className="bg-[#101a32] py-24 text-white dark:bg-[#080c15]" id="services">
    <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
      <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
        <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f2b86b]">Areas of practice / 03</p><h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl">Where engineering meets the real world.</h2></div>
        <p className="max-w-xl text-base leading-8 text-slate-300">I work across the boundaries that make modern software useful: product experience, AI behaviour, data, integrations and the environment that runs it.</p>
      </div>
      <div className="mt-5">
        {capabilities.map(({number,icon:Icon,title,description,tags})=>(
          <article key={number} className="group grid gap-5 border-b border-white/15 py-7 transition-colors hover:bg-white/[0.03] sm:grid-cols-[3rem_3rem_0.8fr_1.2fr] sm:items-start sm:gap-6 sm:py-9">
            <span className="pt-1 font-mono text-xs text-slate-500">{number}</span>
            <Icon size={24} className="text-[#f2b86b] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h3>
            <div><p className="max-w-2xl leading-7 text-slate-300">{description}</p><p className="mt-4 font-mono text-[11px] leading-6 tracking-wide text-[#91a9ff]">{tags}</p></div>
          </article>
        ))}
      </div>
      <a href="mailto:michaelmudimbu@gmail.com" className="mt-9 inline-flex items-center gap-3 bg-[#f2b86b] px-5 py-4 font-semibold text-[#172033] transition hover:bg-[#ffd08e]">Have a problem worth solving? <ArrowUpRight size={18} /></a>
    </div>
  </section>
);
export default Services;
