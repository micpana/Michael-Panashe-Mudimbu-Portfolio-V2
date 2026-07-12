/* eslint-disable @typescript-eslint/no-explicit-any */
export const ProjectsData: Array<any> = [
  {
    title: 'Skinraya',
    category: 'AI-Powered Web App',
    description: `
      A B2B SaaS platform that acts as a virtual dermatologist for e-commerce skincare brands. Skinraya / Renovality Health Hub uses real-time computer vision to guide users through capturing a consistent, high-quality selfie by validating lighting, face position, and camera distance before triggering an automatic capture.

      Captured images are processed through advanced segmentation and analysis to identify skin type and visible conditions such as wrinkles, texture, and hydration indicators. These objective skin metrics are translated by AI into clear, empathetic health summaries, personalized skincare recommendations, and step-by-step routines aligned with the client’s product catalog. The result is a scalable, data-driven skincare experience that delivers measurable value to users and brands.
    `,
    main_url: '#',
    backup_url: '#',
    imagesFolder: 'Skinraya',
    technologies: 'ReactJs, TypeScript, Tailwind CSS, Python, FastAPI, PostgreSQL, Computer Vision, LLM Integration',
    build_type: 'Solo',
    built_under: 'Nuvantica Software',
  },
  {
    title: 'Skin Segmentation Dataset Builder',
    category: 'Machine Learning Tool',
    description: `
      An automated Python toolkit that converts skin classification datasets into clean, background-free segmentation datasets with masks and preview artifacts.

      It ingests folder-based skin classification data (for example dry, normal, oily, acne), extracts skin-only regions, generates pixel-level segmentation masks, and restructures the output for segmentation model training.

      The tool is built for rapid prototyping and research, prioritizing facial skin segmentation while supporting partial and skin-only images. It eliminates background noise, prevents background class domination, and provides human-readable previews for quality verification.
    `,
    main_url: 'https://github.com/micpana/Skin-Segmentation-Dataset-Builder',
    backup_url: '#',
    imagesFolder: 'Skin Segmentation Dataset Builder',
    technologies: 'Python, OpenCV, MediaPipe, NumPy, Computer Vision, Dataset Engineering',
    build_type: 'Solo',
    built_under: 'Personal',
  },
  {
    title: 'Herbal-AI',
    category: 'AI-Powered Web App',
    description: `
      A full-stack AI-driven platform that serves as a virtual herbalist, delivering personalized herbal remedy recommendations based on symptoms, age, gender, and pregnancy status.

      The app uses AI to match user inputs with a curated herb database, generating safe, empathetic suggestions with usage instructions and disclaimers. The frontend, built with React and Vite, includes an intuitive user experience for submitting queries and an admin dashboard for managing herbs, product assets, and usage analytics. The backend, powered by FastAPI, handles JWT authentication, image uploads, and AI-powered recommendations while maintaining data integrity via SQLAlchemy and a structured database layer.
    `,
    main_url: '#',
    backup_url: 'https://github.com/micpana/Herbal-AI',
    imagesFolder: 'Herbal AI',
    technologies: 'React, Vite, TypeScript, Tailwind CSS, Python, FastAPI, SQLAlchemy, JWT Authentication, File Uploads, AI Integration, Axios, Lucide Icons',
    build_type: 'Solo',
    built_under: 'Personal',
  },
  {
    title: 'Skin Sage',
    category: 'AI-Powered Mobile App',
    description: `
      A dissertation project focused on the Zimbabwean healthcare market, Skin Sage is an Android application that analyzes selfies with AI and computer vision to diagnose facial skin conditions such as acne and eczema.

      The app identifies skin type, recommends tailored products, and provides step-by-step guidance on applying skincare solutions. By turning visual and diagnostic insights into practical routines, Skin Sage empowers users with a better understanding of their skin health and how to care for it.
    `,
    main_url: 'https://github.com/micpana/AI-Powered-Skin-Facial-Condition-Diagnosis-Mobile-Application',
    backup_url: '#',
    imagesFolder: 'Skin Sage',
    technologies: 'React Native, Python, Flask, AI / ML, Computer Vision, MongoDB, RESTful API',
    build_type: 'Solo',
    built_under: 'Personal',
  },
  {
    title: 'Golden Knot Holdings',
    category: 'Web App',
    description: `
      A centralized executive dashboard built to modernize Golden Knot Holdings’ operations and replace fragmented manual processes with a unified digital platform.

      The system centralizes financial workflows, collections revenue tracking, expense approvals, and client claims management across multiple currencies. It includes role-based authentication and branch-level access controls, ensuring users only see data relevant to their assigned branch while executives retain a consolidated view across the business. Built with React 18, TypeScript, Supabase, and PostgreSQL, the dashboard improves operational efficiency, data security, and decision-making across the organization.
    `,
    main_url: 'https://github.com/micpana/Golden-Knot-Holdings',
    backup_url: '#',
    imagesFolder: 'Golden Knot Holdings',
    technologies: 'ReactJs, TypeScript, Tailwind CSS, Supabase, PostgreSQL',
    build_type: 'Solo',
    built_under: 'Freelancing',
  },
  {
    title: 'Wisdom Library',
    category: 'Web App',
    description: `
      Wisdom Library is a Zimbabwean platform for books, podcasts, and publishing services focused on spiritual and personal development.

      The platform delivers inspiring content, youth coaching resources, and publishing support designed to help users grow emotionally, spiritually, and mentally.
    `,
    main_url: 'https://wisdomlibrary.co.zw/',
    backup_url: '#',
    imagesFolder: 'Wisdom Library',
    technologies: 'ReactJs, Python, Flask, SQLite, RESTful API, Paynow',
    build_type: 'Solo',
    built_under: 'Freelancing',
  },
  {
    title: 'Beyond Motivation',
    category: 'Website',
    description: `
      A mentorship and coaching platform that helps people discover their purpose and make progress in life.

      Beyond Motivation offers structured programs like How to Speak Effectively, Interview Coaching, The Mentorship Class, and Becoming One of the Greats. The website supports both adults and children with coaching, mentorship, and curated development tools.
    `,
    main_url: 'https://beyondmotivation.co.uk/',
    backup_url: 'https://beyondmotivation.netlify.app/',
    imagesFolder: 'Beyond Motivation',
    technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API, Paypal',
    build_type: 'Solo',
    built_under: 'ESpace',
  },
  {
    title: 'Liberty Makuyana',
    category: 'Website',
    description: `
      A personal brand website for speaker and coach Liberty Makuyana, centered on purpose-driven leadership and personal growth.

      The site presents Liberty’s philosophy, programs, and speaking services while supporting his message that true meaning is found in living fully within one’s purpose. It highlights his background as a Chartered Accountant, published author, and business owner, and promotes development programs such as How to Speak Effectively, Interview Coaching, The Mentorship Class, and Becoming One of the Greats.
    `,
    main_url: 'https://libertymakuyana.com/',
    backup_url: 'https://libertymakuyana.netlify.app/',
    imagesFolder: 'Liberty Makuyana',
    technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API, Paypal',
    build_type: 'Solo',
    built_under: 'Freelancing',
  },
  {
    title: 'Family Of Greatness',
    category: 'Mobile App',
    description: `
      A feature-rich mobile app designed to inspire and empower Christian youth with devotionals, podcasts, quotes, and structured growth programs.

      The app includes content for Spiritual Growth, Prayer, Relationships, Business & Finance, and University Life. It also offers curated categories like 3 Minutes of Wisdom, Word of the Day, Relationship Devotionals, and Wisdom for Ladies & Gents.
    `,
    main_url: '#',
    backup_url: '#',
    imagesFolder: 'Family of Greatness',
    technologies: 'React Native, Python, Flask, MongoDB, RESTful API',
    build_type: 'Solo',
    built_under: 'Freelancing',
  },
  {
    title: 'Ocula Finance',
    category: 'AI-Powered Web App',
    description: `
      An AI-driven trading assistant that generates high-probability trade signals with a maximum holding period of 3 hours and 30 minutes.

      Each signal includes pre-defined take-profit and stop-loss levels, maintaining a minimum 1:2 risk-to-reward ratio. The system uses dedicated AI models per instrument and is built to help traders make data-informed decisions while reducing risk and improving consistency.
    `,
    main_url: 'https://oculafinance.com/',
    backup_url: 'https://github.com/micpana/Ocula-Finance',
    imagesFolder: 'Ocula Finance',
    technologies: 'ReactJs, Python, Flask, AI / ML, MongoDB, RESTful API',
    build_type: 'Solo',
    built_under: 'Personal',
  },
  {
    title: 'Farmer Management App',
    category: 'Mobile App',
    description: `
      A React Native app for efficient farmer data collection and management, designed for offline-first use.

      The app supports Clerks who capture farmer details and Admins who configure form options. It stores data locally in SQLite and syncs with a Flask backend when internet connectivity is available. Secure authentication and role-based access ensure reliable agricultural data workflows for field teams.
    `,
    main_url: 'https://github.com/micpana/Eport-Farmer-Management-App',
    backup_url: '#',
    imagesFolder: 'Farmer Management App',
    technologies: 'React Native, Python, Flask, MongoDB, SQLite, RESTful API',
    build_type: 'Solo',
    built_under: 'Personal',
  },
  {
    title: 'Eleanor Ross V1',
    category: 'Website',
    description: `
      A UK relocation service platform built to make moving easier and less stressful.

      Eleanor Ross supports clients with accommodation search, transport bookings, city travel guides, visa collection, site visits, and IELTS preparation. The website reflects a commitment to personalized, high-quality service that helps people settle into new environments with confidence.
    `,
    main_url: 'https://eleanoross.co.uk/',
    backup_url: '#',
    imagesFolder: 'Eleanor Ross',
    technologies: 'ReactJs',
    build_type: 'Solo',
    built_under: 'ESpace',
  },
  {
    title: 'A & E',
    category: 'Web App',
    description: `
      A lifestyle retail platform focused on convenience, quality, and curated solutions.

      A & E brings together categories such as Babies' World, Gadgets Corner, Fitness, Beauty, and Kids' Corner. The site is designed to help customers find the right products quickly while supporting thoughtful purchasing decisions and reliable service.
    `,
    main_url: 'https://aande.co.zw/',
    backup_url: 'https://aande.netlify.app/',
    imagesFolder: 'A & E',
    technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API',
    build_type: 'Solo',
    built_under: 'ESpace',
  },
  {
    title: 'Fafa Kitchen & Home',
    category: 'Web App',
    description: `
      A digital storefront for premium kitchenware, décor, and home essentials.

      Fafa Kitchen & Home modernizes living spaces through curated products that balance style, functionality, and comfort, helping customers create elegant, practical homes.
    `,
    main_url: 'https://fafakitchenandhome.co.zw/',
    backup_url: 'https://fafakitchenandhome.netlify.app/',
    imagesFolder: 'Fafa Kitchen and Home',
    technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API',
    build_type: 'Solo',
    built_under: 'ESpace',
  },
  {
    title: 'Espace',
    category: 'Web App',
    description: `
      A digital services agency website built to elevate online presence, branding, and professional impact.

      Espace supports businesses with website design, social media adverts, content creation, and brand development. The platform is focused on accessible, tailored digital solutions that help organizations grow their visibility and sales.
    `,
    main_url: 'https://espacezw.co.zw/',
    backup_url: 'https://espacezw.netlify.app/',
    imagesFolder: 'Espace',
    technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API',
    build_type: 'Solo',
    built_under: 'ESpace',
  },
  {
    title: 'Ridley Valley Tutorial',
    category: 'Website',
    description: `
      A customized tutoring platform that helps students improve academic performance through tailored study plans and test preparation.

      Ridley Valley Tutorial delivers personalized learning support, subject-specific coaching, and effective study habits for long-term success.
    `,
    main_url: 'https://ridleyvalleytutorial.co.zw/',
    backup_url: 'https://ridleyvalleytutorial.netlify.app/',
    imagesFolder: 'Ridley Valley Tutorial',
    technologies: 'ReactJs',
    build_type: 'Solo',
    built_under: 'Freelancing',
  },
  {
    title: 'First Medi-Careers Global',
    category: 'Website',
    description: `
      A skills development platform offering globally certified short courses in Zimbabwe, with a focus on rural communities.

      The site supports practical training programs in nurse aid, building, butchery, logo design, and web design, helping learners gain skills that support local and international employment opportunities.
    `,
    main_url: 'https://firstmedicareersglobal.co.zw/',
    backup_url: 'https://firstmedicareersglobal.netlify.app/',
    imagesFolder: 'First Medi-Careers Global',
    technologies: 'ReactJs',
    build_type: 'Solo',
    built_under: 'Freelancing',
  },
  {
    title: 'Onfit',
    category: 'Web App',
    description: `
      A virtual personal training platform that connects clients with fitness professionals for personalized workouts, nutrition guidance, and progress tracking.

      Onfit enables trainers to manage clients, host live sessions, and grow their brands while giving users a convenient online fitness experience.
    `,
    main_url: 'https://onfiit.com/',
    backup_url: 'https://onfit.netlify.app/',
    imagesFolder: 'Onfit',
    technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API, Stripe',
    build_type: 'Solo',
    built_under: 'Freelancing',
  },
  {
    title: 'MyuzikHeadz',
    category: 'Web App',
    description: `
      A music streaming platform where users can upload, curate, and enjoy tracks online.

      MyuzikHeadz provides playlist management, favorites, and a smooth listening experience designed for music lovers who want a personalized, engaging digital audio service.
    `,
    main_url: 'https://myuzikheadz.com/',
    backup_url: '#',
    imagesFolder: 'MyuzikHeadz',
    technologies: 'ReactJS, Python, Flask, MongoDB, RESTful API',
    build_type: 'Solo',
    built_under: 'Freelancing',
  },
  {
    title: 'Bossalf International',
    category: 'Website',
    description: `
      A furniture manufacturing platform focused on ergonomic, durable solutions for institutions.

      Bossalf International offers furniture designed for schools, universities, churches, and conferences. The site presents high-quality product options that enhance comfort, collaboration, and productivity in learning and work environments.
    `,
    main_url: 'https://bossalfinternational.co.zw/',
    backup_url: 'https://bossalfinternational.netlify.app/',
    imagesFolder: 'Bossalf International',
    technologies: 'ReactJs',
    build_type: 'Solo',
    built_under: 'Freelancing',
  },
];
