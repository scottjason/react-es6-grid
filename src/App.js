import React, { Fragment } from 'react';
import GlobalStyles, { Container } from './App.style';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Dashboard } from './pages/dashboard/';

const App = () => (
  <Container>
    <GlobalStyles />
    <Router>
      <Fragment>
        <Route path='/' exact component={Dashboard} />
        <Route path='/grid/' component={Dashboard} />
        <Route path='/flexbox/' component={Dashboard} />
      </Fragment>
    </Router>
  </Container>
);

export default App;