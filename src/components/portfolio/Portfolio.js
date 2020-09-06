import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageExit } from '../../motion/motion';
import { Helmet } from 'react-helmet';
import Portfolios from './Portfolios';
import Contacts from '../layout/Contacts';

const Portfolio = () => (
  <>
    <Helmet>
      <title>AGP Agency - Portfolio</title>
    </Helmet>

    <motion.section
      className='portfolio'
      initial='hidden'
      animate='visible'
      exit={pageExit}
      variants={pageVariants}
    >
      <div className='section-header'>
        <h2>Our projects</h2>
      </div>

      <Portfolios />
    </motion.section>

    <Contacts />
  </>
);

export default Portfolio;
