import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
const URL = "http://localhost:3001/"


function App() {
  const [message, setMessage] = useState("test")

  useEffect(() => {
    axios.get(URL)
    .then((response)  => {
      console.log(response.data)
      setMessage(response.data.message)

    }).catch(error => {
      setMessage(error)
    } )
  
  }, [] )
  return (
    <div>
      <h3>This message was retrieved from my NodeJS server</h3>
      <p>{message}</p>
    </div>
    
  );
}

export default App;
