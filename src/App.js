import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { Helmet } from 'react-helmet';

// styles
import './css/style.css';

// components
import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

// context
import PortfolioState from './context/portfolio/PortfolioState';
import ContactState from './context/contact/ContactState';

const App = () => (
  <PortfolioState>
    <ContactState>
      <Router>
        <ScrollToTop />

        <Helmet>
          <title>AGP Agency</title>
          {/* <meta
            name='description'
            content=''
          /> */}
        </Helmet>

        <Navbar />
        <Container />
        <Footer />
      </Router>
    </ContactState>
  </PortfolioState>
);

export default App;
