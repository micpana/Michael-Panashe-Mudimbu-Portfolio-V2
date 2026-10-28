import React from 'react';
import { Briefcase, CalendarDays } from 'lucide-react';

const experiences = [
  {
    title: 'Customer Experience Associate & Sales Consultant',
    company: 'Omni Contact Centre (Econet Group)',
    period: 'April 2026 – Present',
    context: 'Customer engagement · CRM · consultative communication',
    description: [
      'Global Sales Consultant on the Diaspora Insurance UK financial-services campaign from July 2026, conducting outbound sales and client engagement while maintaining CRM accuracy and professional communication in a compliance-conscious environment.',
      'Worked in outbound customer experience from April to June 2026, managing high-volume customer engagement, service quality and operational efficiency.',
      'Resolved retention challenges through negotiation and proactive problem-solving, strengthening stakeholder communication and customer-facing judgement.',
    ],
  },
  {
    title: 'Contract Fullstack Software Engineer (AI & Systems)',
    company: 'Nuvantica Software (Renovality Group)',
    period: 'September 2025 – August 2026',
    context: 'Remote contract · AI systems · production software',
    description: [
      'Served as primary independent engineer designing, developing, deploying and scaling AI-powered enterprise software and backend services.',
      'Architected and delivered Skinraya, a production AI skincare platform, owning end-to-end development across React frontend, backend APIs, PostgreSQL schema and cloud infrastructure.',
      'Developed computer-vision and LLM workflows, integrating AI-driven recommendations into production app functionality.',
      'Managed Linux production environments, Nginx reverse proxies, Docker containerisation, cloud infrastructure and security monitoring.',
      'Implemented proactive server monitoring and automated deployment practices focused on reliability, uptime and maintainability.',
      'Conducted technical reviews, upheld code-quality standards and collaborated with remote stakeholders to deliver production-ready features.',
    ],
  },
  {
    title: 'Independent Fullstack Software Engineer',
    company: 'Freelance Client Projects',
    period: 'July 2023 – August 2025',
    context: 'Independent delivery · international clients',
    description: [
      'Designed and delivered production SaaS applications, AI-powered WhatsApp and Telegram bots, and business-automation tools for clients.',
      'Translated business requirements into technical specifications, system architectures, database designs, APIs and implementation plans; estimated work and prioritised backlogs.',
      'Built backend services with Python, FastAPI, Flask and Node.js, and frontend applications with React and TypeScript.',
      'Developed chatbot workflows, third-party API integrations, web scraping and browser automation for business-process interoperability.',
      'Managed Git workflows, CI/CD, cloud infrastructure, testing, deployment and production maintenance, with a reported 99.9% uptime across cloud-hosted Linux environments.',
    ],
  },
  {
    title: 'Freelance Fullstack Software Engineer',
    company: 'ESpace',
    period: 'February 2021 – July 2023',
    context: 'Agency client projects · web and mobile',
    description: [
      'Delivered full-stack software solutions and client-facing web and mobile applications under Agile/Scrum timelines.',
      'Designed and deployed applications using React, React Native, Python and backend APIs.',
      'Collaborated with product managers and remote stakeholders to review requirements, prioritise technical tasks and meet project specifications.',
      'Maintained Git and branch workflows, deployment scripts, application performance and ongoing maintenance.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Independent Client Projects',
    period: 'July 2019 – January 2021',
    context: 'Web applications · business systems',
    description: [
      'Developed bespoke websites, web applications and business systems for local and international clients.',
      'Engineered REST APIs, relational database schemas and responsive interfaces using HTML, CSS, JavaScript and Python.',
      'Managed software architecture, CI/CD, Git version control, cloud infrastructure, hosting and maintenance, with attention to system security and reliability.',
    ],
  },
  {
    title: 'Intern Fullstack Software Developer',
    company: 'Health Informatics Training and Research Advancement Centre (HITRAC)',
    period: 'August 2018 – July 2019',
    context: 'Health informatics · national EHR systems',
    description: [
      'Contributed to frontend and backend development for national health information systems using Java and React.',
      'Supported technical deployment and maintenance of Zimbabwe’s national Electronic Health Records system, Impilo.',
      'Assisted with secure data pipelines and server environments aligned with national health informatics standards.',
    ],
  },
  {
    title: 'Intern Web Developer',
    company: 'Hansole Investments (PVT) Ltd',
    period: 'June 2018',
    context: 'Websites · hosting · customer communications',
    description: [
      'Built and maintained WordPress websites for business clients.',
      'Supported a bulk SMS platform for customer communications, including hosting, domains and client support.',
    ],
  },
];

const Experience: React.FC = () => (
  <section className="bg-white py-20 dark:bg-[#0b1220]" id="experience">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">Career timeline</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Experience built across products, systems and people.</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">My background includes hands-on engineering, independent delivery for clients and customer-facing work. Software remains the centre of my professional direction.</p>
      </div>
      <div className="mt-10 space-y-5">
        {experiences.map((exp) => (
          <article key={exp.company + exp.period} className="grid gap-5 rounded-xl border border-slate-200 bg-[#f8fafc] p-6 dark:border-slate-700 dark:bg-slate-900 sm:p-8 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300"><Briefcase size={21} /></div>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-950 dark:text-white">{exp.title}</h3>
              <p className="mt-1 font-medium text-sky-800 dark:text-sky-300">{exp.company}</p>
              <p className="mt-3 flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400"><CalendarDays size={16} className="mt-0.5 shrink-0" />{exp.period}</p>
              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{exp.context}</p>
            </div>
            <ul className="space-y-3 border-t border-slate-200 pt-5 dark:border-slate-700 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              {exp.description.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600 dark:bg-sky-400" /><span>{item}</span></li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
