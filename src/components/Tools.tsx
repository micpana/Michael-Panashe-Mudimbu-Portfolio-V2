import React from 'react';

const skillGroups = [
  { title: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'Java', 'Solidity'] },
  { title: 'Frontend & mobile', skills: ['React', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'] },
  { title: 'Backend & integration', skills: ['Node.js', 'FastAPI', 'Flask', 'REST APIs', 'Microservices', 'WebSockets', 'Webhooks', 'WhatsApp Business API', 'Telegram Bot API'] },
  { title: 'Data & storage', skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Relational modelling', 'Query optimisation', 'Data pipelines'] },
  { title: 'AI, ML & automation', skills: ['TensorFlow', 'Keras', 'OpenAI API', 'LLM integrations', 'RAG', 'Prompt engineering', 'OpenCV', 'MediaPipe', 'Recommendation workflows', 'Dataset engineering', 'Selenium', 'Playwright', 'Web scraping', 'Browser automation'] },
  { title: 'Cloud & operations', skills: ['Linux / Ubuntu', 'Docker', 'Nginx', 'AWS', 'Git & GitHub', 'CI/CD', 'GitHub Actions', 'Automated deployments', 'Monitoring', 'Cloud security'] },
  { title: 'Engineering & delivery', skills: ['Software architecture', 'Secure coding', 'Code reviews', 'Testing', 'Production debugging', 'Performance optimisation', 'Reliability', 'Requirements', 'Technical estimation', 'Backlog prioritisation', 'Agile / Scrum', 'Stakeholder collaboration', 'Data annotation', 'HITL QA', 'Data quality'] },
];

const Tools: React.FC = () => (
  <section className="bg-[#f1f5f9] py-20 dark:bg-[#111b2b]" id="tools">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">Technical toolkit</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">Tools are useful. Knowing where they fit matters more.</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">A broad, hands-on toolkit across application engineering, AI systems, data, infrastructure and delivery.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <section key={group.title} className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-base font-semibold text-slate-950 dark:text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => <span key={skill} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">{skill}</span>)}
            </div>
          </section>
        ))}
      </div>
    </div>
  </section>
);

export default Tools;
