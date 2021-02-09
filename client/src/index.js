import React from "react";
import { hydrate, render } from 'react-dom';
import App from './App';
// import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";
// import { Router, Route, Switch } from "react-router-dom";

// import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
// import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";
// import HackathonPage from "views/HackathonPage/HackathonPage.js";
// import IntroResourcesPage from "views/IntroResourcesPage/IntroResourcesPage.js";
// import AdvancedResourcesPage from "views/AdvancedResourcesPage/AdvancedResourcesPage.js";
// import AboutPage from "views/AboutPage/AboutPage.js";

// var hist = createBrowserHistory();

// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       <Route path="/profile-page" component={ProfilePage} />
//       <Route path="/login-page" component={LoginPage} />
//       <Route path="/hackandtech" component={HackathonPage} />
//       <Route path="/introstarters" component={IntroResourcesPage} />
//       <Route path="/advancedstarters" component={AdvancedResourcesPage} />
//       <Route path="/about" component={AboutPage} />
//       <Route path="/" component={LandingPage} />
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
