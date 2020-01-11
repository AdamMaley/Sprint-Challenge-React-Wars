import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

import Card from "./components/card/Card.js";
import "./components/card/Card.css";

function App() {
  const [data, setData] = useState({});


  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
  .then((res) => setData(res.data))
  
  .catch((err) => console.log(err));
    
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Card data={data} />
    </div>
  );
}

export default App;
