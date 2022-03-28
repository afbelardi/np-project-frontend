import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import axios from 'axios';



function App() {

  const [state, setState] = useState({})
  const [parks, setParks] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const stateInput = event.target.value
  }

  return (
    <div className="main-container">
      <Header />
    <main w->
      

    </main>
    </div>
  );
}

export default App;
