import React from 'react';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, X, Facebook, LucideMSquare, Newspaper, MoveUpRight } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-[#f4f2ec] text-[#151a26] dark:bg-[#090d17] dark:text-white">
      <div aria-hidden="true" className="absolute left-0 top-0 h-full w-[42%] border-r border-[#dedbd2] dark:border-white/5" />
      <div aria-hidden="true" className="absolute left-[8%] top-0 h-full w-px bg-[#dedbd2] dark:bg-white/5" />
      <div className="relative mx-auto grid min-h-[min(820px,calc(100vh-5rem))] max-w-[1600px] items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-14 lg:pb-20 lg:pt-32">
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#3159d9] dark:text-[#91a9ff]"><span className="h-px w-8 bg-current" /> Software engineer · AI systems · Cloud infrastructure</div>
          <p className="mt-8 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">Hello, I’m Michael Panashe Mudimbu.</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(3.2rem,7.5vw,7.5rem)] font-semibold leading-[0.91] tracking-[-0.075em]">I build the <span className="text-[#3159d9] dark:text-[#91a9ff]">systems</span> behind the experience.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">Senior Software Engineer &amp; AI Systems Architect. I connect product interfaces, backend services, data and AI into software people can depend on.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-3 bg-[#3159d9] px-5 py-4 font-semibold text-white transition hover:bg-[#2445b3] focus:outline-none focus:ring-2 focus:ring-[#3159d9] focus:ring-offset-2 dark:focus:ring-offset-[#090d17]">Explore selected work <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
            <button onClick={handleDownloadCV} className="inline-flex items-center gap-2 border border-slate-300 bg-transparent px-5 py-4 font-semibold text-slate-800 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#3159d9] dark:border-slate-700 dark:text-white dark:hover:bg-white/5"><Download size={17} /> Download CV</button>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-300 pt-5 dark:border-slate-700">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Find me</span>
            {socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-slate-500 transition hover:text-[#3159d9] focus:outline-none focus:ring-2 focus:ring-[#3159d9] dark:text-slate-400 dark:hover:text-[#91a9ff]"><Icon size={18} /></a>)}
            <a href="mailto:michaelmudimbu@gmail.com" className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-[#3159d9] hover:underline dark:text-[#91a9ff]">Say hello <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[610px] lg:ml-auto">
          <div className="relative min-h-[480px] overflow-hidden bg-[#101a32] sm:min-h-[600px]">
            <div aria-hidden="true" className="absolute inset-0 opacity-25" style={{backgroundImage:'linear-gradient(rgba(145,169,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(145,169,255,.25) 1px, transparent 1px)',backgroundSize:'34px 34px'}} />
            <div aria-hidden="true" className="absolute -right-24 -top-20 h-80 w-80 rounded-full border border-[#91a9ff]/30" />
            <div aria-hidden="true" className="absolute -right-10 -top-6 h-52 w-52 rounded-full border border-[#91a9ff]/30" />
            <svg aria-hidden="true" viewBox="0 0 560 600" className="absolute inset-0 h-full w-full" fill="none">
              <path d="M28 105 H180 V180 H275 V255 H390 V130 H510 M50 410 H155 V335 H260 V430 H360 V510 H520" stroke="#91a9ff" strokeOpacity=".72" strokeWidth="1.5" strokeDasharray="4 7"/>
              <path d="M180 180 V280 H260 M390 255 V345 H490" stroke="#f2b86b" strokeOpacity=".9" strokeWidth="2"/>
              {[[180,180],[275,255],[390,130],[155,335],[260,430],[360,510],[490,345]].map(([cx,cy],i)=><g key={i}><circle cx={cx} cy={cy} r="7" fill={i%3===0?"#f2b86b":"#91a9ff"}/><circle cx={cx} cy={cy} r="15" stroke={i%3===0?"#f2b86b":"#91a9ff"} strokeOpacity=".4"/></g>)}
            </svg>
            <div className="absolute left-5 top-5 z-10 border border-white/20 bg-[#101a32]/85 px-3 py-2 backdrop-blur-sm sm:left-7 sm:top-7"><p className="text-[10px] uppercase tracking-[0.2em] text-[#91a9ff]">The whole system</p><p className="mt-1 font-mono text-xs text-white">01 / ARCHITECTURE</p></div>
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between gap-4 bg-gradient-to-t from-[#080c15] via-[#080c15]/85 to-transparent p-5 pt-28 sm:p-7 sm:pt-36">
              <div className="flex items-end gap-4"><img src={IntroImage} alt="Portrait of Michael Panashe Mudimbu" className="h-28 w-24 border border-white/30 object-cover object-center sm:h-36 sm:w-28" /><div className="pb-1"><p className="text-xs uppercase tracking-[0.18em] text-[#f2b86b]">Engineer / Builder</p><p className="mt-2 max-w-[220px] text-xl font-semibold leading-tight text-white sm:text-2xl">From first principle to production.</p></div></div>
              <MoveUpRight className="mb-1 shrink-0 text-[#f2b86b]" size={25} />
            </div>
            <div className="absolute right-5 top-[37%] z-10 hidden border border-white/15 bg-[#101a32]/90 px-3 py-2 font-mono text-[10px] text-white/80 backdrop-blur sm:block"><span className="text-[#f2b86b]">●</span> DATA → LOGIC → IMPACT</div>
          </div>
          <div className="mt-4 flex flex-wrap justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.17em] text-slate-500 dark:text-slate-400"><span>7+ years building software</span><span>AI · SaaS · infrastructure</span></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
