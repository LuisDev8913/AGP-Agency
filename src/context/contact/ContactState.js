import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import { SUBMIT_STATE, SUBMIT_CLEAR, SET_LOADING } from '../types';

const ContactState = (props) => {
  const initialState = {
    submit: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const setAlert = (success) => {
    const submit = { success };

    dispatch({
      type: SUBMIT_STATE,
      payload: submit,
    });

    setTimeout(() => dispatch({ type: SUBMIT_CLEAR }), 3000);
  };

  const sendMail = async (mail) => {
    setLoading();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(
        'https://api.kotov.com.ua/email', // https://api.kotov.com.ua
        mail,
        config
      );

      console.log(res);

      setAlert(true);
    } catch (err) {
      console.error(err);

      setAlert(false);
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ContactContext.Provider
      value={{
        submit: state.submit,
        loading: state.loading,
        sendMail,
        setLoading,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
