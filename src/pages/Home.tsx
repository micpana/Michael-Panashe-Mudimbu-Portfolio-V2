import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReactGA from "react-ga4";
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Services from '../components/Services';
import FeaturedArticles from '../components/FeaturedArticles';
import Tools from '../components/Tools';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

ReactGA.initialize("G-1KT6SKGTKG");

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Michael Panashe Mudimbu | Software Engineer & AI Systems Architect</title>
        <meta name="description" content="Senior Software Engineer and AI Systems Architect with 7+ years delivering production web, mobile, backend and AI systems." />
        <meta name="keywords" content="Michael Panashe Mudimbu, Senior Software Engineer, AI Systems Architect, Python, TypeScript, React, FastAPI, LLM, computer vision, SaaS" />
        <meta property="og:title" content="Michael Panashe Mudimbu | Software Engineer & AI Systems Architect" />
        <meta property="og:description" content="Senior Software Engineer and AI Systems Architect with 7+ years delivering production web, mobile, backend and AI systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://michaelmudimbu.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Michael Panashe Mudimbu | Software Engineer & AI Systems Architect" />
        <meta name="twitter:description" content="Production software, AI workflows and cloud systems designed with a systems-thinking approach." />
        <link rel="canonical" href="https://michaelmudimbu.vercel.app/" />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
        <About />
        <FeaturedProjects />
        <Experience />
        <Tools />
        <Services />
        <Education />
        <FeaturedArticles />
        <Contact />
      </div>
    </>
  );
};

export default Home;