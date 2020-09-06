import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { submit, loading, sendMail } = contactContext;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const mail = { to: 'hi@kotov.com.ua' };

  const { name, email, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    mail.subject = `Hi, AGP! <${email}${name !== '' ? `, ${name}` : ''}>`;
    mail.from = email;
    mail.text = message;

    sendMail(mail);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className='form-wrapper'>
        <div>
          <input
            type='text'
            name='name'
            placeholder='John Doe'
            value={name}
            autoComplete='off'
            size='40'
            onChange={(e) => onChange(e)}
          />
          <label htmlFor='name'>Name</label>
        </div>
        <div>
          <input
            type='email'
            name='email'
            placeholder='hi@mail.com'
            value={email}
            autoComplete='off'
            size='40'
            required
            onChange={(e) => onChange(e)}
          />
          <label htmlFor='email'>e-Mail*</label>
        </div>
        <div>
          <textarea
            name='message'
            placeholder='Hello, AGP...'
            value={message}
            required
            onChange={(e) => onChange(e)}
          ></textarea>
          <label htmlFor='message'>Message*</label>
        </div>

        <button
          type='submit'
          className={`btn btn-primary ${
            submit ? !submit.success && `btn-false` : ``
          }`}
        >
          {loading ? (
            'Loading...'
          ) : submit ? (
            submit.success ? (
              <>
                Sent <i className='fas fa-check-circle'></i>
              </>
            ) : (
              <>
                Oops <i className='fas fa-times'></i>
              </>
            )
          ) : (
            'Send'
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
