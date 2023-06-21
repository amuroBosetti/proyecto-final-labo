import './App.css';
import axios from "axios";
import {useState} from "react";

const ApiTester = () => {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [thirdName, setThirdName] = useState('')
  const [returnedIds, setReturnedIds] = useState([])

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleSecondNameChange = (event) => {
    setSecondName(event.target.value)
  }

  const handleThirdNameChange = (event) => {
    setThirdName(event.target.value)
  }

  const makeRequest = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/nombres', {
      firstName,
      secondName,
      thirdName
    }).then((response) => {
      setReturnedIds(response.data.ids)
    })
  };

  return <div>
    <input type="text" value={firstName} onChange={handleFirstNameChange} />
    <input type="text" value={secondName} onChange={handleSecondNameChange} />
    <input type="text" value={thirdName} onChange={handleThirdNameChange} />
    <button onClick={makeRequest}>Test API</button>

    <ul>
      {returnedIds.map((id) => {
        return <li>{id}</li>
      })}
    </ul>
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
