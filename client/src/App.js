import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/auth/PrivateRoute'

import SignIn from '../src/components/signIn/SignIn'
import SignUp from '../src/components/signUp/SignUp'
import Dashboard from '../src/components/dashboard/Dashboard'
import NotFound from '../src/components/notFound/NotFound'

function App() {

  // const ping = () => {
  //   axios({
  //     method: 'get',
  //     url: "https://mern-heroku-netlify-server.herokuapp.com/ping",
  //     withCredentials: true
  //   })
  //     .then((response) => {
  //       console.log('Response:', response)
  //     })
  //     .catch((error) => {
  //       console.log('Error:', error)
  //     })
  // }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <PrivateRoute path="/dashboard" comp={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
