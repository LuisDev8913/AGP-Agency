import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageExit } from '../../motion/motion';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import Portfolios from '../portfolio/Portfolios';
import Contacts from './Contacts';

const Main = () => (
  <motion.div
    initial='hidden'
    animate='visible'
    exit={pageExit}
    variants={pageVariants}
  >
    <main>
      <div className='intro-content'>
        <h1 className='hidden'>
          Agapornis Agency - We’ll make your business stunning.
        </h1>
        <span>Agapornis Agency</span>
        <h2>We’ll make your business stunning.</h2>
        <p>
          We are a creative team of designers, developers, and strategists,
          building elevated websites
        </p>
        <ScrollTo
          to='contacts'
          className='btn btn-primary'
          smooth={true}
          duration={300}
        >
          Hire Us
        </ScrollTo>
      </div>

      <div className='intro-img'>
        <img src='./img/birb.png' alt='Agapornis' />
      </div>
    </main>

    {/* <section className='services'>
      <h3>Services</h3>
    </section> */}

    <section className='portfolio'>
      <div className='section-header'>
        <h3>Featured Work</h3>
      </div>

      <Portfolios best={true} />

      <Link to='/portfolio' className='btn btn-secondary'>
        More
      </Link>
    </section>

    <Contacts />
  </motion.div>
);

export default Main;
