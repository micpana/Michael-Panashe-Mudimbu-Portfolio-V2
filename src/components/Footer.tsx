import React from 'react';
import { Github, Linkedin, X, Facebook, LucideMSquare, Newspaper } from 'lucide-react';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-p-mudimbu/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/micpana/', icon: Github },
  { label: 'X', href: 'https://x.com/mudimbumichael', icon: X },
  { label: 'Facebook', href: 'https://www.facebook.com/MichaelPMudimbu', icon: Facebook },
  { label: 'Medium', href: 'https://medium.com/@michaelmudimbu', icon: LucideMSquare },
  { label: 'Substack', href: 'https://substack.com/@michaelmudimbu', icon: Newspaper },
];

const Footer: React.FC = () => (
  <footer className="border-t border-slate-200 bg-[#f7f8fa] py-10 dark:border-slate-800 dark:bg-[#0b1220]">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row lg:px-10">
      <div className="text-center md:text-left">
        <p className="font-semibold text-slate-950 dark:text-white">Michael Panashe Mudimbu</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Software engineering · AI systems · cloud infrastructure</p>
      </div>
      <nav aria-label="Social links" className="flex flex-wrap justify-center gap-2">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:border-sky-300 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-sky-300">
            <Icon size={18} />
          </a>
        ))}
      </nav>
      <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Michael Panashe Mudimbu</p>
    </div>
  </footer>
);

export default Footer;
