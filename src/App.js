import React, { Fragment } from 'react';
import GlobalStyles, { Container } from './App.style';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './pages/home/';
import { Grid } from './pages/grid/';
import { FlexBox } from './pages/flexbox/';
import { BoxModel } from './pages/boxmodel/';

const App = () => (
  <Container>
    <GlobalStyles />
    <Router>
      <Fragment>
        <Route path='/' exact component={Home} />
        <Route path='/grid/' component={Grid} />
        <Route path='/flexbox/' component={FlexBox} />
        <Route path='/boxmodel/' component={BoxModel} />
      </Fragment>
    </Router>
  </Container>
);

export default App;