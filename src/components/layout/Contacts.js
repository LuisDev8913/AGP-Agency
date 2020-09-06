import React from 'react';
import ContactForm from './ContactForm';
// import { mail } from '../../icons/icons';
// import Links from './Links';

const Contacts = () => {
  return (
    <section className='contact' name='contacts'>
      <div className='section-header'>
        <h3>Contacts</h3>
        <p>for more contacts please ...</p>
      </div>

      <ContactForm />
    </section>
  );
};

export default Contacts;
