// Placeholder images - replace with actual project images
const placeholderImage = 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1600';

// For now, using placeholder images. Replace these with actual project images when available
const createPlaceholderImages = (count: number) => 
  Array(count).fill(placeholderImage);

// list of projects done and their attributes
export const ProjectsData = [
    {
        title: 'Wisdom Library',
        category: 'Web App',
        description: `
            The Wisdom Library (wisdomlibrary.co.zw) is a Zimbabwean platform offering transformative services and empowerment content. It provides inspiring books, Bibles, youth coaching podcasts, and book publishing services, with a focus on spiritual and personal development.
        `,
        main_url: 'https://wisdomlibrary.co.zw/',
        backup_url: '#',
        images: createPlaceholderImages(13),
        technologies: 'ReactJs, Python, Flask, SQLite, RESTful API, Paynow'
    },
    {
        title: 'Beyond Motivation',
        category: 'Website',
        description: `
            A transformative platform dedicated to helping individuals and organizations discover and fulfill their purpose. Beyond Motivation operates on the belief that true meaning is found in living within the totality of one's God-given purpose. Through mentorship, coaching, and structured programs, the platform equips and supports individuals on their journey to personal and professional growth.

            With Liberty Makuyana as the voice behind Beyond Motivation, the platform offers impactful programs such as How to Speak Effectively, Interview Coaching, The Mentorship Class, and Becoming One of the Greats, with specialized sessions for both adults and children.
        `,
        main_url: 'https://beyondmotivation.co.uk/',
        backup_url: 'https://beyondmotivation.netlify.app/',
        images: createPlaceholderImages(16),
        technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API, Paypal'
    },
    {
        title: 'Liberty Makuyana',
        category: 'Website',
        description: `
            "We don't do this to earn a living, we do this because it's why we are living." – Liberty Makuyana

            Liberty Makuyana is a seasoned speaker known for his transformative message that deeply resonates with individuals and organizations alike. His unique approach challenges conventional thinking, delivering his teachings with clarity and impactful articulation.

            Driven by the belief that each person has a God-given purpose, Liberty's mantra, 'Beyond Motivation', empowers people to live fully within their purpose, which he believes is the key to finding true meaning in life. These principles transcend individual growth, extending to organizations, communities, nations, and the world.

            Liberty is a Chartered Accountant, a published author, a business owner, and above all, a devout Christian. His programs, such as How to Speak Effectively (Group & One-on-One), Interview Coaching, The Mentorship Class, and Becoming One of the Greats, equip individuals with essential skills for personal and professional growth.
        `,
        main_url: 'https://libertymakuyana.com/',
        backup_url: 'https://libertymakuyana.netlify.app/',
        images: createPlaceholderImages(9),
        technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API, Paypal'
    },
    {
        title: 'Family Of Greatness',
        category: 'Mobile App',
        description: `
            A feature-rich mobile app designed to inspire and empower Christian youth with daily devotionals, podcasts (audio & video), quotes, and structured programs. Covering topics such as Spiritual Growth, Prayer, Relationships, Business & Finance, and University Life, the platform provides curated wisdom through categories like 3 Minutes of Wisdom, Word of the Day, Relationship Devotionals, Wisdom for Ladies & Gents, and more.

            With Sir Noble Masvingise as the voice behind the application, this app serves as a digital hub for young believers seeking spiritual and personal growth.
        `,
        main_url: '#',
        backup_url: '#',
        images: createPlaceholderImages(31),
        technologies: 'React Native, Python, Flask, MongoDB, RESTful API'
    },
    {
        title: 'Ocula Finance',
        category: 'Web App',
        description: `
            An AI-driven trading assistant that delivers high-probability trade signals with a maximum holding time of 3 hours and 30 minutes. Each trade includes predefined take-profit and stop-loss levels, maintaining a minimum 1:2 risk-to-reward ratio. The system leverages dedicated AI models for each instrument, achieving over 80% win rates. Designed for accessibility, Ocula Finance empowers traders with data-backed insights to minimize risk and maximize returns.
        `,
        main_url: 'https://oculafinance.com/',
        backup_url: 'https://github.com/micpana/Ocula-Finance',
        images: createPlaceholderImages(16),
        technologies: 'ReactJs, Python, Flask, AI / ML, MongoDB, RESTful API'
    },
    {
        title: 'Farmer Management App',
        category: 'Mobile App',
        description: `
            A React Native mobile application designed for efficient farmer data collection and management. The app supports two user roles: Clerks, who input farmer details (name, national ID, farm type, crop, and location), and Admins, who configure form options. Built with offline functionality, it stores data locally in SQLite and syncs with a Flask-based backend using MongoDB when an internet connection is available. Secure authentication ensures role-based access, and the system provides a seamless user experience for agricultural data management.
        `,
        main_url: 'https://github.com/micpana/Eport-Farmer-Management-App',
        backup_url: '#',
        images: createPlaceholderImages(19),
        technologies: 'React Native, Python, Flask, MongoDB, SQLite, RESTful API'
    },
    {
        title: 'Skin Sage',
        category: 'Mobile App',
        description: `
            A mobile application developed as part of my dissertation, Skin Sage focuses on the Zimbabwean healthcare market, specifically addressing dermatological concerns. Designed for Android devices, the app uses artificial intelligence (AI) and computer vision to analyze user-uploaded selfies and diagnose various facial skin conditions such as acne and eczema.

            The AI also determines the user's skin type (dry or oily) and provides tailored product recommendations based on the identified skin issue. Beyond product suggestions, the app offers instructional content on how to properly apply and use the recommended skincare solutions.

            Skin Sage empowers users with valuable insights into their facial skin health, including potential issues, skin type, and personalized skincare routines.
        `,
        main_url: '#',
        backup_url: '#',
        images: createPlaceholderImages(16),
        technologies: 'React Native, Python, Flask, AI / ML, Computer Vision, MongoDB, RESTful API'
    },
    {
        title: 'Eleanor Ross V1',
        category: 'Website',
        description: `
            A UK-based relocation service dedicated to making moving seamless and stress-free. Eleanor Ross assists clients with accommodation searches, car bookings, tailored city travel guides, visa collections, site visits, and IELTS preparatory training.

            Understanding the challenges of relocating to a new country, Eleanor Ross is committed to providing high-quality, personalized services that help individuals settle in with ease. Whether it's finding the right home, arranging transport from the airport, or offering essential local insights, the company ensures a smooth transition for every client.

            Core Values: Excellence, Personalization, and Commitment—guiding every service offered at Eleanor Ross Ltd.
        `,
        main_url: 'https://eleanoross.co.uk/',
        backup_url: '#',
        images: createPlaceholderImages(17),
        technologies: 'ReactJs'
    },
    {
        title: 'A & E',
        category: 'Web App',
        description: `
            A & E is a lifestyle-driven retail brand dedicated to convenience, quality, and thoughtful solutions for every need. Whether it's a last-minute gift, a luxury indulgence, or everyday essentials, A&E curates a diverse range of products across categories such as Babies' World, Gadgets Corner, Fitness, Beauty, and Kids' Corner.

            With a focus on reliability, efficiency, and personalized service, A&E ensures a seamless shopping experience while fostering meaningful relationships with customers. By offering affordable prices and helpful conversations, A & E empower buyers to make the best purchasing decisions with confidence.
        `,
        main_url: 'https://aande.co.zw/',
        backup_url: 'https://aande.netlify.app/',
        images: createPlaceholderImages(13),
        technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API'
    },
    {
        title: 'Fafa Kitchen & Home',
        category: 'Web App',
        description: `
            A brand dedicated to modernizing kitchens and living spaces with premium kitchenware, décor, and bathroom accessories. Fafa Kitchen & Home offers a curated selection of home essentials that blend style, functionality, and comfort, ensuring every space reflects elegance and practicality.
        `,
        main_url: 'https://fafakitchenandhome.co.zw/',
        backup_url: 'https://fafakitchenandhome.netlify.app/',
        images: createPlaceholderImages(10),
        technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API'
    },
    {
        title: 'Espace',
        category: 'Web App',
        description: `
            A digital solutions agency dedicated to boosting online presence, branding, and professional appeal. Espace offers a range of services, including social media video adverts, website design, social media management, content creation, and branding—all tailored to help businesses and individuals grow their influence.

            Driven by the belief that big dreams shouldn't be limited by budget, Espace provides customized, affordable solutions to enhance visibility, sales, and brand impact in the digital space. Whether you're building a business, growing a personal brand, or promoting an event, Espace helps you establish a powerful online presence.
        `,
        main_url: 'https://espacezw.co.zw/',
        backup_url: 'https://espacezw.netlify.app/',
        images: createPlaceholderImages(15),
        technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API'
    },
    {
        title: 'Ridley Valley Tutorial',
        category: 'Website',
        description: `
            A personalized learning platform designed to enhance academic success through customized tutoring programs. Ridley Valley Tutorial provides tailored study plans, test preparation, and subject-specific support to help students build confidence, improve grades, and develop effective study habits.
        `,
        main_url: 'https://ridleyvalleytutorial.co.zw/',
        backup_url: 'https://ridleyvalleytutorial.netlify.app/',
        images: createPlaceholderImages(14),
        technologies: 'ReactJs'
    },
    {
        title: 'First Medi-Careers Global',
        category: 'Website',
        description: `
            A skills development platform providing globally certified short courses in Zimbabwe, with a focus on rural communities. First Medi-Careers Global offers flexible, industry-designed training in areas like nurse aid training, building, butchery, logo design, and web design, empowering individuals to gain practical skills for local and international employment.

            With a commitment to accessible education, the platform also provides financial assistance to graduates seeking opportunities abroad.
        `,
        main_url: 'https://firstmedicareersglobal.co.zw/',
        backup_url: 'https://firstmedicareersglobal.netlify.app/',
        images: createPlaceholderImages(21),
        technologies: 'ReactJs'
    },
    {
        title: 'Onfit',
        category: 'Web App',
        description: `
            A virtual personal training platform that connects users with fitness professionals for personalized workouts, nutrition plans, and real-time progress tracking. It empowers trainers to manage clients, host live sessions, and grow their brand, all in one place.

            With Onfit, users can access on-demand training, expert guidance, and a supportive fitness community—anytime, anywhere.
        `,
        main_url: 'https://onfiit.com/',
        backup_url: 'https://onfit.netlify.app/',
        images: createPlaceholderImages(15),
        technologies: 'ReactJs, Python, Flask, MongoDB, RESTful API, Stripe'
    },
    {
        title: 'MyuzikHeadz',
        category: 'Web App',
        description: `
            MyuzikHeadz is a web-based music streaming platform that allows users to upload, play, and manage their favorite tracks. With an intuitive interface, users can create and curate playlists, add songs to favorites, and explore a seamless listening experience. Designed for music lovers, MyuzikHeads brings a personalized and engaging way to enjoy music online.
        `,
        main_url: 'https://myuzikheadz.com/',
        backup_url: '#',
        images: createPlaceholderImages(13),
        technologies: 'ReactJS, Python, Flask, MongoDB, RESTful API'
    },
    {
        title: 'Bossalf International',
        category: 'Website',
        description: `
            A furniture manufacturing platform that seamlessly blends style and functionality to create inspiring learning environments. Specializing in ergonomic and durable designs, Bossalf International provides high-quality furniture solutions for schools, universities, churches, and conferences. From polyshell chairs to versatile student desks, every piece is crafted with precision to enhance focus, collaboration, and creativity.

            With a commitment to superior materials and customizable aesthetics, Bossalf International transforms spaces into hubs of productivity and inspiration.
        `,
        main_url: 'https://bossalfinternational.co.zw/',
        backup_url: 'https://bossalfinternational.netlify.app/',
        images: createPlaceholderImages(13),
        technologies: 'ReactJs'
    },
]