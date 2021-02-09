import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from '../src/assets/img/andtech-logo.png';
import './App.css';
import "assets/scss/material-kit-react.scss?v=1.9.0";

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Home = lazy(() => import('./views/LandingPage/LandingPage'));
const About = lazy(() => import('./views/AboutPage/AboutPage'));
const Hackathon = lazy(() => import('./views/HackathonPage/HackathonPage'));
const IntroResources = lazy(() => import('./views/IntroResourcesPage/IntroResourcesPage'));
const AdvancedResources = lazy(() => import('./views/AdvancedResourcesPage/AdvancedResourcesPage'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<div>Loading... </div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/hackandtech" component={Hackathon} />
        <Route path="/introstarters" component={IntroResources} />
        <Route path="/advancedstarters" component={AdvancedResources} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
