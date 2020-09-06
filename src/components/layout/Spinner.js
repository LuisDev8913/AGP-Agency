import React from 'react';
import { motion } from 'framer-motion';

const Spinner = () => (
  <motion.div
    className='spinner'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <img src='./img/elements/thinking.png' alt='spinner' />
  </motion.div>
);

export default Spinner;
