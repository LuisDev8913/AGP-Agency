import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { variantItems } from '../../motion/motion';

import PropTypes from 'prop-types';
import PortfolioLink from './PortfolioLink';
import Spinner from '../layout/Spinner';
import PortfolioContext from '../../context/portfolio/portfolioContext';

const Portfolios = ({ best = false }) => {
  const portfolioContext = useContext(PortfolioContext);

  useEffect(() => {
    if (best === true) {
      portfolioContext.getBestLinks();
    } else {
      portfolioContext.getAllLinks();
    }
    // eslint-disable-next-line
  }, []);

  const { loading, portfolio } = portfolioContext;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : portfolio ? (
        <motion.div
          className={`grid ${best && 'preview'}`}
          variants={variantItems}
        >
          {portfolio.map((link, i) => (
            <PortfolioLink
              custom={i}
              key={link.id}
              best={link.best}
              title={link.title}
              img={link.photo ? link.photo.formats.medium.url : 'hello'}
              logo={link.logo}
              url={link.url}
            />
          ))}
        </motion.div>
      ) : (
        <span>404</span>
      )}
    </>
  );
};

Portfolios.protoTypes = {
  best: PropTypes.bool.isRequired,
};

export default Portfolios;
