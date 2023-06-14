import './App.css';
import axios from "axios";
import {useState} from "react";

const ApiTester = () => {
  const [users, setUsers] = useState([])
  const makeRequest = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/users', {
      type: 'admin'
    }).then(response => setUsers(response.data.users))
  };

  return <div>
    { users.map(user => {
      return <div>
        <p>{ user.name }</p>
        <p>{ user.id }</p>
      </div>
    }) }
    <button onClick={makeRequest}>Test API</button>
  </div>
};

function App() {
  return (
    <div className="App">
      <ApiTester/>
    </div>
  );
}

export default App;
