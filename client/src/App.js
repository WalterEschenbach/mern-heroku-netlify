import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/auth/PrivateRoute'
import { AuthProvider } from './components/auth/AuthContext'
import SignIn from '../src/components/signIn/SignIn'
import SignUp from '../src/components/signUp/SignUp'
import Dashboard from '../src/components/dashboard/Dashboard'
import NotFound from '../src/components/notFound/NotFound'

function App() {

  const user = JSON.parse(window.sessionStorage.getItem('user'));

  return (
    <div className="App">
      <AuthProvider user={user}>
        <Router>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <PrivateRoute path="/dashboard" comp={Dashboard} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
