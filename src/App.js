import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainCard from './components/MainCard';
import axios from 'axios';



function App(props) {

  const [parks, setParks] = useState([]);
  const state = useRef(null)

  useEffect(() => {
    (async () => {
      try{
        const response = await axios.get(`http://localhost:8000/api/nationalpark/apikey`);
        const data = await response.data
        setParks(data.data)
      } catch(error) {
        console.error(error)
      }
    })()
  }, [state]);


  return (
    <div className="main-container">
      <Header state={state} setParks={setParks}/>
      <div className="main-card">
        <MainCard data={parks} setParks={setParks} />
      </div>
    </div>
  );
}

export default App;
