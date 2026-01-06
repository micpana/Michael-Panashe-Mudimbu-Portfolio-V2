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
        <title>Michael Panashe Mudimbu - Software Developer Portfolio</title>
        <meta name="description" content="Software developer passionate about building intuitive and efficient digital solutions. Specializing in web development, mobile apps, AI systems, and custom software solutions." />
        <meta name="keywords" content="software developer, web development, mobile development, AI systems, React, Python, full stack developer, Michael Panashe Mudimbu" />
        <meta property="og:title" content="Michael Panashe Mudimbu - Software Developer Portfolio" />
        <meta property="og:description" content="Software developer passionate about building intuitive and efficient digital solutions. Specializing in web development, mobile apps, AI systems, and custom software solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://michaelmudimbu.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Michael Panashe Mudimbu - Software Developer Portfolio" />
        <meta name="twitter:description" content="Software developer passionate about building intuitive and efficient digital solutions." />
        <link rel="canonical" href="https://michaelmudimbu.netlify.app/" />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
        <About />
        <FeaturedProjects />
        <Services />
        <FeaturedArticles />
        <Tools />
        <Experience />
        <Education />
        <Contact />
      </div>
    </>
  );
};

export default Home;