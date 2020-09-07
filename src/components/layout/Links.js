import React from 'react';
import PropTypes from 'prop-types';
import { dribbble, instagram, facebook } from '../../icons/icons';

const Links = ({ isIcon = false }) => (
  <div className={`links ${isIcon && 'icons'}`}>
    <a
      href='https://dribbble.com/apostlekotov'
      target='_blank'
      rel='noopener noreferrer'
    >
      {isIcon ? (
        <div dangerouslySetInnerHTML={{ __html: dribbble }}></div>
      ) : (
        'dribbble'
      )}
    </a>
    {/* <a
      href='https://www.linkedin.com/in/kotovjs/'
      target='_blank'
      rel='noopener noreferrer'
    >
      {isIcon ? (
        <div dangerouslySetInnerHTML={{ __html: linkedin }}></div>
      ) : (
        'linkedin'
      )}
    </a> */}
    <a
      href='https://www.instagram.com/agp.agency/'
      target='_blank'
      rel='noopener noreferrer'
    >
      {isIcon ? (
        <div dangerouslySetInnerHTML={{ __html: instagram }}></div>
      ) : (
        'instagram'
      )}
    </a>
    <a
      href='https://www.facebook.com/agapornis.agency/'
      target='_blank'
      rel='noopener noreferrer'
    >
      {isIcon ? (
        <div dangerouslySetInnerHTML={{ __html: facebook }}></div>
      ) : (
        'facebook'
      )}
    </a>
  </div>
);

Links.propTypes = {
  isIcon: PropTypes.bool.isRequired,
};

export default Links;
