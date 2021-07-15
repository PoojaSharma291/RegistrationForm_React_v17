import React from 'react';
import "./App.css";
import RegistrationForm  from "./components/RegistrationForm";
import LoginForm from './components/Login/LoginForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/registerForm">Registration</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
          <LoginForm></LoginForm>
          </Route>
          <Route path="/registerForm">
          <RegistrationForm></RegistrationForm>
          </Route>
          <Route path="/">
          <LoginForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
