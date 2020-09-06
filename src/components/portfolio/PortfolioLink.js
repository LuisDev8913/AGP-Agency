import React from 'react';
import { motion } from 'framer-motion';
import { variantItems } from '../../motion/motion';
import PropTypes from 'prop-types';

const PortfolioLink = ({ custom, best, title, logo, url, img }) => (
  <motion.div
    className={`portfolio-link ${best ? 'best' : ''}`}
    custom={custom}
    initial='hidden'
    animate='visible'
    variants={variantItems}
  >
    <a href={url} rel='noopener noreferrer' target='_blank'>
      <div className='portfolio-img'>
        <img
          src={
            img
              ? img
              : 'https://kotovjs-portfolio.s3.eu-central-1.amazonaws.com/large_sedam_93d158cc85.jpg'
          }
          alt={title}
        />
      </div>
      <div className='label'>
        <div className='logo'>
          <img src={logo.url} alt={title} />
        </div>
        <span>
          <b>{title}</b>
        </span>
      </div>
    </a>
  </motion.div>
);

PortfolioLink.propTypes = {
  best: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PortfolioLink;
