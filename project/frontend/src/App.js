import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UsersList from './components/Users.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'users': []
    }
  }

  /*
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/user')
      .then(response => {
        const users = response.data
          this.setState(
            {
              'users': users
            }
    )
    }).catch(error => console.log(error))
  }
  */

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/user')
      .then(response => {
        this.setState(
          {
            'users': response.data
          }
        )
      }
    ).catch(error => console.log(error))
  }


  render() {
    return (
      <div>
        <UsersList users={this.state.users}/>
      </div>
    );
  }
}
export default App;



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
