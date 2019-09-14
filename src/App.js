import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* COMPONENTS */
import SideSection from './components/SideSection';
import Header from './components/shared/Header';

/* ROUTER */
import Router from './routes';

const App = ()  => (
  <BrowserRouter basename="/">
    <div className="main-container">
      <Header />
      <Router />
      <SideSection />
    </div>
  </BrowserRouter>
);

export default App;
