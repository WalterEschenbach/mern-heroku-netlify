import logo from './logo.svg';
import './App.css';

import axios from 'axios'

function App() {

  const ping = () => {
    axios({
      method: 'get',
      url: "https://mern-heroku-netlify-server.herokuapp.com/ping",
      withCredentials: true
    })
      .then((response) => {
        console.log('Response:', response)
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={ping}>
          Learn React
        </div>
      </header>
    </div>
  );
}

export default App;
