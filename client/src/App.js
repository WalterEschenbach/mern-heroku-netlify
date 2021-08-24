import logo from './logo.svg';
import './App.css';

import axios from 'axios'

function App() {

  const ping = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3030',
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000/"
      }
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
