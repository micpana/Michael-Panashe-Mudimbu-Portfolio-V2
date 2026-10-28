import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="bg-[#f1f5f9] py-20 dark:bg-[#111b2b]" id="contact">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Good systems start with a good conversation.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Have a product to build, a system to improve, or a technical problem worth thinking through? Send me an email and tell me what you are working on.
            </p>
          </div>
          <a href="mailto:michaelmudimbu@gmail.com" className="inline-flex w-fit items-center gap-3 rounded-lg bg-sky-700 px-5 py-4 font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400">
            <Mail size={19} /> michaelmudimbu@gmail.com <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
