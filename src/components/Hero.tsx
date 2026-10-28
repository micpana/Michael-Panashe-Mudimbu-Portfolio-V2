import React from 'react';
import { ArrowDownRight, Download, Github, Linkedin, X, Facebook, LucideMSquare, Newspaper } from 'lucide-react';
import IntroImage from '../images/intro_image.jpg';
import MichaelPanasheMudimbuCV from '../documents/Michael Panashe Mudimbu - CV.pdf';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = MichaelPanasheMudimbuCV;
    link.download = 'Michael Panashe Mudimbu - CV.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-p-mudimbu/', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/micpana/', icon: Github },
    { label: 'X', href: 'https://x.com/mudimbumichael', icon: X },
    { label: 'Facebook', href: 'https://www.facebook.com/MichaelPMudimbu', icon: Facebook },
    { label: 'Medium', href: 'https://medium.com/@michaelmudimbu', icon: LucideMSquare },
    { label: 'Substack', href: 'https://substack.com/@michaelmudimbu', icon: Newspaper },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] pt-32 pb-20 text-slate-950 dark:bg-[#0b1220] dark:text-slate-50 sm:pt-36 lg:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] translate-x-1/3 -translate-y-1/3 rounded-full border border-sky-200/70 dark:border-sky-900/50" />
      <div aria-hidden="true" className="pointer-events-none absolute right-12 top-12 h-[20rem] w-[20rem] translate-x-1/3 -translate-y-1/3 rounded-full border border-sky-200/70 dark:border-sky-900/50" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            Software engineering · AI systems · cloud
          </p>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl lg:text-7xl">
              Michael Panashe Mudimbu
              <span className="mt-3 block text-slate-500 dark:text-slate-400">Senior Software Engineer &amp; AI Systems Architect</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
              I design, build and operate production software, from thoughtful user experiences and dependable APIs to AI workflows and the infrastructure that connects them.
            </p>
            <p className="max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
              7+ years across full-stack engineering, SaaS platforms, computer vision, LLM integrations, data pipelines and production operations. I care about how the whole system behaves, not just how one feature looks.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-sky-700 px-5 py-3 font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400">
              Explore selected work <ArrowDownRight size={18} />
            </a>
            <button onClick={handleDownloadCV} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
              <Download size={18} /> Download CV
            </button>
            <a href="mailto:michaelmudimbu@gmail.com" className="inline-flex items-center rounded-lg px-4 py-3 font-semibold text-sky-800 transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-sky-300 dark:hover:bg-slate-800">
              Get in touch
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
            <span className="mr-1 text-sm text-slate-500 dark:text-slate-400">Elsewhere</span>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:border-sky-300 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-sky-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-3xl border border-slate-200 dark:border-slate-700" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/20">
            <img src={IntroImage} alt="Portrait of Michael Panashe Mudimbu" className="aspect-[4/5] w-full rounded-xl object-cover object-center" />
            <div className="grid grid-cols-2 gap-3 p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Approach</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">Systems thinking</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Focus</p>
                <p className="mt-1 font-medium text-slate-900 dark:text-white">Useful technology</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-900 sm:block">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">Engineering scope</p>
            <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Architecture → delivery → operations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
