import './App.css';
import axios from "axios";
import {useState} from "react";

const ApiTester = () => {
  const [checkboxStatus, setCheckboxStatus] = useState(false)
  const [responseOk, setResponseOk] = useState(false)
  const [responseFailed, setResponseFailed] = useState(false)

  const handleCheckboxChange = () => {
    setCheckboxStatus(!checkboxStatus)
  };


  const makeRequest = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/error', {
      isError: checkboxStatus
    }).then(() => {
      setResponseOk(true)
    }).catch(() => {
      setResponseFailed(true)
    })
  };

  const successStyle = {
    backgroundColor: "green",
    visibility: responseOk
  }

  const failedStyle = {
    backgroundColor: "red",
    visibility: responseFailed
  }

  return <div>
    <input type="checkbox" value={checkboxStatus} onChange={handleCheckboxChange}/>
    <button onClick={makeRequest}>Test API</button>

    { responseOk && <h2 style={successStyle}>Response was successful</h2> }
    { responseFailed && <h2 style={failedStyle}>Response was an error</h2> }
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
