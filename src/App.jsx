import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import ClientPage from './pages/ClientPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/client" component={ClientPage} />
      </Switch>
    </Router>
  );
}

export default App;

