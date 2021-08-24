import './App.css';

//import SignIn from '../src/components/signIn/SignIn'
import SignUp from '../src/components/signUp/SignUp'

//import axios from 'axios'

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
      <SignUp />
    </div>
  );
}

export default App;
