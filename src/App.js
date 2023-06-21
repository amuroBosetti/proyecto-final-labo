import './App.css';
import axios from "axios";
import {useState} from "react";

const ApiTester = () => {
  const [requestOk, setRequestOk] = useState(false)

  const makeRequest = (event) => {
    event.preventDefault();
    axios.get('http://localhost:8000/', {
    }).then(setRequestOk(true))
  };

  return <div>
    { requestOk ? <h2>GET a / salio bien</h2> : <h2>GET a / aun no se envio</h2> }
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
