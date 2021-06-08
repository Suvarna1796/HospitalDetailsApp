import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import App from './App';
import Login from './components/SignUp/login';
import SignUp from './components/SignUp/hospitalSignUp';
import reportWebVitals from './reportWebVitals';
import PublicDashboard1 from './components/public/publicDashboard/publicDashboard1.js';
import PublicDashboard2 from './components/public/publicDashboard/publicDashboard2.js';
import HospitalSignUp from './components/SignUp/hospitalSignUp';
import GovernmentSignUp from './components/SignUp/governmentSignUp';
import PublicUserSignUp from './components/SignUp/publicUserSignUp';
import hospitalDashboard from './components/public/hospitalDashboard';
import chart from './components/public/governmentDashboard/mapindex';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/PublicDashboard1" component={PublicDashboard1} />
      <Route exact path="/publicDashboard2" component={PublicDashboard2} />
      <Route exact path="/hospitalSignUp" component={HospitalSignUp} />
      <Route exact path="/governmentSignUp" component={GovernmentSignUp} />
      <Route exact path="/publicUserSignUp" component={PublicUserSignUp} />
      <Route exact path="/hospitalDashboard" component={hospitalDashboard} />
      <Route exact path="/governmentDashboard" component={chart} />
      

    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
