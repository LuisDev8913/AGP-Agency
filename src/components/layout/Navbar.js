import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import { motion } from 'framer-motion';
import { menuVariants } from '../../motion/motion';
import { menu, x } from '../../icons/icons';
import Links from './Links';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <div className='logo'>
          <div className='img-logo'>
            <img src='/img/logo.svg' alt='AGP Agency logo' />
          </div>
          <span>
            AGP
            <br />
            Agency
          </span>
        </div>

        <div
          id='menu'
          dangerouslySetInnerHTML={{ __html: !isOpen ? menu : x }}
          onClick={() => setIsOpen(!isOpen)}
        ></div>

        <motion.nav
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
        >
          <NavLink to='/' exact={true} onClick={() => setIsOpen(!isOpen)}>
            Home
          </NavLink>
          <NavLink to='/portfolio' onClick={() => setIsOpen(!isOpen)}>
            Portfolio
          </NavLink>
          <ScrollTo
            to='contacts'
            className='btn btn-secondary'
            smooth={true}
            duration={300}
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact
          </ScrollTo>
        </motion.nav>
      </header>

      <Links />
    </>
  );
};

export default Navbar;
