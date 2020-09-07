import React, { useReducer } from 'react';
import axios from 'axios';
import PortfolioContext from './portfolioContext';
import PortfolioReducer from './portfolioReducer';
import { GET_ALL_LINKS, GET_BEST_LINKS, SET_LOADING } from '../types';

const PortfolioState = (props) => {
  const initialState = {
    portfolio: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(PortfolioReducer, initialState);

  // Get all links from portfolio
  const getAllLinks = async () => {
    setLoading();

    const res = await axios.get(
      'https://api.kotov.com.ua/portfolio-links?_sort=createdAt:DESC'
    );

    dispatch({
      type: GET_ALL_LINKS,
      payload: res.data,
    });
  };

  // Get best links from portfolio
  const getBestLinks = async () => {
    setLoading();

    const res = await axios.get(
      'https://api.kotov.com.ua/portfolio-links?best=true&_sort=createdAt:DESC&_limit=3'
    );

    dispatch({
      type: GET_BEST_LINKS,
      payload: res.data,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PortfolioContext.Provider
      value={{
        portfolio: state.portfolio,
        loading: state.loading,
        getAllLinks,
        getBestLinks,
        setLoading,
      }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioState;
