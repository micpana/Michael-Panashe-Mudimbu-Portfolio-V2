// articles_data.tsx

export const ArticlesData = [
  {
    id: 1,
    title: 'What Fullstack Development Really Means in 2025',
    excerpt: '“Fullstack developer” gets thrown around a lot, but what does it actually mean in practice today? In this article, I break down the real skills, decisions, and mindset behind being effective across the stack.',
    content: `
      In 2025, “fullstack” isn’t just a title—it’s a responsibility. You’re expected to move comfortably between frontend and backend, wire up databases, manage deployments, and sometimes even touch AI or DevOps. But doing everything isn’t the point. Knowing how to think across layers is.

      ## The Modern Stack

      Today, a practical fullstack developer is usually working with a setup like this:
      - **Frontend:** React or Vue (I personally use React)
      - **Backend:** Node.js, Python, or something compiled (Java, Go)
      - **Database:** SQL (PostgreSQL or SQLite) and/or NoSQL (MongoDB)
      - **APIs:** REST or GraphQL
      - **Hosting:** AWS, Vercel, Heroku, etc.

      You don’t need to know everything deeply, but you should understand how these parts fit together and communicate.

      ## Fullstack ≠ Knowing All Frameworks

      It’s not about listing 20 libraries on your CV. It’s about:
      - Structuring apps so that frontend and backend scale independently
      - Making database choices based on access patterns and performance
      - Writing APIs that are easy to consume and secure by design
      - Handling deployment in a way that doesn’t block shipping

      ## Mindset Over Tools

      Fullstack thinking is about tradeoffs:
      - Should I go local-first with SQLite or cloud-first with MongoDB?
      - Do I build this as a microservice or just add a module?
      - Can this be done in the frontend or should the backend handle it?

      You don’t need a perfect answer, just a reasoned one.

      ## Where AI Fits

      In 2025, it’s becoming normal for fullstack devs to integrate AI tooling. Not build models from scratch, but:
      - Connect to LLM APIs
      - Use embeddings to add smart search
      - Automate common workflows
      You won’t need a PhD, but you should know how to wire up a useful agent or AI-powered feature.

      ## Final Thoughts

      If you’re aiming to be a solid fullstack dev, focus on:
      - Clear fundamentals (HTTP, databases, JavaScript, Python)
      - Curiosity and willingness to learn horizontally
      - Comfort jumping between roles: dev, debugger, ops, sometimes even product

      It’s not about knowing everything. It’s about making it all work together.
    `,
    category: 'Fullstack Development',
    date: '2025-08-02',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1600',
    tags: ['Fullstack', 'React', 'Python', 'MongoDB', 'SQL', 'APIs', 'Developer Mindset']
  }
]
