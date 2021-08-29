import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './components/auth/PrivateRoute'
import { AuthProvider } from './components/auth/AuthContext'
import SignIn from '../src/components/signIn/SignIn'
import SignUp from '../src/components/signUp/SignUp'
import Dashboard from '../src/components/dashboard/Dashboard'
import NotFound from '../src/components/notFound/NotFound'

function App() {

  const [user, setUser] = useState(JSON.parse(window.sessionStorage.getItem('user')));

  return (
    <div className="App">
      <AuthProvider user={user}>
        <Router>
          <Switch>
            <Route exact path="/"><Redirect to="/signin" /></Route>
            <Route path="/signup" component={SignUp} />
            <Route path="/signin"><SignIn setUser={setUser} /></Route>
            <PrivateRoute path="/dashboard" comp={Dashboard} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
