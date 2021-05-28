import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import App from './App';
import reportWebVitals from './reportWebVitals';
import PublicDashboard1 from './components/public/publicDashboard1.js';
import PublicDashboard2 from './components/public/publicDashboard2.js';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={PublicDashboard1} />
      <Route exact path="/PublicDashboard1" component={PublicDashboard1} />

      <Route exact path="/publicDashboard2" component={PublicDashboard2} />

    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
