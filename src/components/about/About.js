import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageExit } from '../../motion/motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContactForm from '../layout/ContactForm';

const About = () => (
  <>
    <Helmet>
      <title>Kotov.js - About</title>
    </Helmet>

    <motion.main
      className='about'
      initial='hidden'
      animate='visible'
      exit={pageExit}
      variants={pageVariants}
    >
      <div className='intro-content'>
        <h1 className='hidden'>
          Kotov.js - Design, develop and boost your business
        </h1>
        <h2>Hi, I’m Paul Kotov</h2>
        <p>
          A full stack web developer based in Chernihiv, Ukraine. I use the full
          cycle of services to create and launch a website from scratch or
          redesign a live website along with the modern trends and requirements.
          I can help visualize even the craziest ideas converting them into
          elegant designs, awesome experiences and catchy brands.
        </p>
        <Link to='/portfolio' className='btn btn-primary'>
          Check out my projects
        </Link>
      </div>

      <div className='intro-img'>
        <img src='/img/me.png' alt='kotov' />
      </div>
    </motion.main>

    <ContactForm />
  </>
);

export default About;
