import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// components
import Main from './Main';
// import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import NotFound from './NotFound';

const Container = ({ location }) => (
  <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route exact path='/' component={Main} />
      {/* <Route exact path='/about' component={About} /> */}
      <Route exact path='/portfolio' component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  </AnimatePresence>
);

export default withRouter(Container);
