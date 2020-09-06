import React from 'react';
import ContactForm from './ContactForm';
import Links from './Links';

const Contacts = () => {
  return (
    <section className='contact' name='contacts'>
      <div className='section-header'>
        <h3>Contacts</h3>
        <p>
          Leave us a message for cooperation or send an email to our project
          manager Artem Trubilo{' '}
          <a href='mailto:artem.trubilo@gmail.com?subject=Hi, Artem Trubilo!'>
            artem.trubilo@gmail.com
          </a>
          . We will answer you as soon as possible!
        </p>
        <Links isIcon={true} />
      </div>

      <ContactForm />
    </section>
  );
};

export default Contacts;
